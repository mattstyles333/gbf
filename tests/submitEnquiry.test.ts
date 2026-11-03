import assert from "node:assert/strict";
import test from "node:test";
import {
  enquiryMailtoHref,
  submitEnquiry,
  WEB3FORMS_ENDPOINT,
  type EnquiryFields,
} from "../app/book/submitEnquiry.ts";

const fields: EnquiryFields = {
  name: "Pat Guest",
  email: "pat@example.com",
  phone: "336-555-0100",
  tripType: "guided-day-trip",
  dates: "March 2026",
  guests: "2",
  message: "Please book a guided day.",
};

test("enquiryMailtoHref includes the destination and fields", () => {
  const href = enquiryMailtoHref(fields, "GreatBonefishing@gmail.com");
  assert.match(href, /^mailto:GreatBonefishing@gmail.com\?/);
  assert.match(href, /subject=/);
  assert.match(decodeURIComponent(href), /Pat Guest/);
});

test("honeypot short-circuits without calling fetch", async () => {
  let called = false;
  const result = await submitEnquiry(fields, {
    accessKey: "test-key",
    honeypot: "1",
    fetchFn: async () => {
      called = true;
      throw new Error("fetch should not run");
    },
  });
  assert.deepEqual(result, { ok: true });
  assert.equal(called, false);
});

test("missing access key returns a configuration error", async () => {
  const result = await submitEnquiry(fields, {
    accessKey: "",
    fetchFn: async () => {
      throw new Error("fetch should not run");
    },
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.match(result.error, /not configured/i);
  }
});

test("successful JSON response is ok", async () => {
  const result = await submitEnquiry(fields, {
    accessKey: "test-key",
    fetchFn: async (input, init) => {
      assert.equal(String(input), WEB3FORMS_ENDPOINT);
      assert.equal(init?.method, "POST");
      const body = JSON.parse(String(init?.body));
      assert.equal(body.access_key, "test-key");
      assert.equal(body.email, fields.email);
      assert.equal(body.botcheck, "");
      return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });
  assert.deepEqual(result, { ok: true });
});

test("failed JSON response surfaces a user-facing error", async () => {
  const result = await submitEnquiry(fields, {
    accessKey: "test-key",
    fetchFn: async () =>
      new Response(JSON.stringify({ success: false, message: "Temporary upstream error" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }),
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.match(result.error, /Temporary upstream error/);
  }
});

test("technical API errors are replaced with the fallback message", async () => {
  const result = await submitEnquiry(fields, {
    accessKey: "test-key",
    fetchFn: async () =>
      new Response(JSON.stringify({ success: false, message: "Invalid form_id/access_key format. Must be a valid UUID." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }),
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.match(result.error, /couldn't send your inquiry/i);
    assert.doesNotMatch(result.error, /UUID/i);
  }
});

test("network failure returns a fallback error", async () => {
  const result = await submitEnquiry(fields, {
    accessKey: "test-key",
    fetchFn: async () => {
      throw new TypeError("Failed to fetch");
    },
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.match(result.error, /couldn't send/i);
  }
});
