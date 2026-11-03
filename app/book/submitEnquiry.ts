export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const SUBMIT_TIMEOUT_MS = 20_000;

export type EnquiryFields = {
  name: string;
  email: string;
  phone: string;
  tripType: string;
  dates: string;
  guests: string;
  message: string;
};

export type SubmitEnquiryResult = { ok: true } | { ok: false; error: string };

const FALLBACK_ERROR =
  "We couldn't send your inquiry. Please try again, or email or call us using the links below.";

export function getWeb3FormsAccessKey(): string {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}

export function enquiryMailtoHref(fields: EnquiryFields, toEmail: string): string {
  const subject = encodeURIComponent("Great Bone Fishing inquiry");
  const body = encodeURIComponent(
    [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || "—"}`,
      `Trip type: ${fields.tripType}`,
      `Guests: ${fields.guests || "—"}`,
      `Dates: ${fields.dates || "—"}`,
      "",
      fields.message || "No additional message.",
    ].join("\n"),
  );
  return `mailto:${toEmail}?subject=${subject}&body=${body}`;
}

function messageFromResult(result: unknown): string | undefined {
  if (!result || typeof result !== "object") return undefined;
  const record = result as { message?: unknown; body?: { message?: unknown } };
  const raw =
    (typeof record.message === "string" && record.message.trim()) ||
    (typeof record.body?.message === "string" && record.body.message.trim()) ||
    "";
  if (!raw) return undefined;
  if (/access[_ ]?key|form_id|uuid|api key/i.test(raw)) {
    return FALLBACK_ERROR;
  }
  return raw;
}

export async function submitEnquiry(
  fields: EnquiryFields,
  options?: {
    accessKey?: string;
    honeypot?: string;
    fetchFn?: typeof fetch;
  },
): Promise<SubmitEnquiryResult> {
  if (options?.honeypot) {
    return { ok: true };
  }

  const accessKey = options?.accessKey ?? getWeb3FormsAccessKey();
  if (!accessKey) {
    return {
      ok: false,
      error:
        "The enquiry form is not configured yet. Please email or call us using the links below.",
    };
  }

  const fetchFn = options?.fetchFn ?? fetch;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

  try {
    const response = await fetchFn(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "Great Bone Fishing inquiry",
        from_name: fields.name,
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        tripType: fields.tripType,
        dates: fields.dates,
        guests: fields.guests,
        message: fields.message,
        botcheck: "",
      }),
      signal: controller.signal,
    });

    let result: unknown = null;
    try {
      result = await response.json();
    } catch {
      return {
        ok: false,
        error:
          "The enquiry service returned an unexpected response. Please try again, or email or call us using the links below.",
      };
    }

    const success =
      response.ok &&
      typeof result === "object" &&
      result !== null &&
      "success" in result &&
      (result as { success: unknown }).success === true;

    if (success) {
      return { ok: true };
    }

    return {
      ok: false,
      error: messageFromResult(result) || FALLBACK_ERROR,
    };
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return {
      ok: false,
      error: aborted
        ? "The enquiry service timed out. Please try again, or email or call us using the links below."
        : FALLBACK_ERROR,
    };
  } finally {
    clearTimeout(timeout);
  }
}
