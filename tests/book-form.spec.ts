import { test, expect } from "@playwright/test";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";

const sampleEnquiry = {
  name: "Test Guest",
  email: "guest@example.com",
  phone: "336-555-0100",
  dates: "March 15-20, 2026 / 5 nights",
  message: "Looking for a guided day for two.",
};

async function fillEnquiryForm(page: import("@playwright/test").Page) {
  // useSearchParams() Suspense can briefly keep a fallback form in the DOM.
  await expect(page.locator("form input[id='name']")).toHaveCount(1);
  const form = page.locator("form");
  await form.locator("#name").fill(sampleEnquiry.name);
  await form.locator("#email").fill(sampleEnquiry.email);
  await form.locator("#phone").fill(sampleEnquiry.phone);
  await form.locator("#dates").fill(sampleEnquiry.dates);
  await form.locator("#message").fill(sampleEnquiry.message);
}

test("Book form does not depend on FormSubmit", async ({ page }) => {
  await page.goto(`${BASE}/book/`);
  await page.waitForLoadState("networkidle");

  const form = page.locator("form");
  await expect(form).toBeVisible();
  const action = (await form.getAttribute("action")) ?? "";
  expect(action).not.toContain("formsubmit");
  await expect(page.locator("input[name='_next'], input[name='_captcha']")).toHaveCount(0);
});

test("Book form uses a hidden text honeypot instead of a checkbox", async ({ page }) => {
  await page.goto(`${BASE}/book/`);
  await page.waitForLoadState("networkidle");
  await expect(page.locator("form input[id='name']")).toHaveCount(1);
  await expect(page.locator("form input[name='botcheck'][type='checkbox']")).toHaveCount(0);
  const honeypot = page.locator("form input[name='website']");
  await expect(honeypot).toHaveCount(1);
  await expect(honeypot).toHaveAttribute("type", "text");
});

test("Book page keeps the success screen at ?sent=1", async ({ page }) => {
  await page.goto(`${BASE}/book/?sent=1`);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();
  const another = page.getByRole("link", { name: /Send Another Inquiry/i });
  await expect(another).toBeVisible();
  await expect(another).toHaveAttribute("href", "/book/");
  await expect(page.getByRole("link", { name: /Call \(336\)/ })).toHaveAttribute("href", /^tel:/);
  const email = page.locator("main").getByRole("link", { name: "GreatBonefishing@gmail.com" }).first();
  await expect(email).toBeVisible();
  await expect(email).toHaveAttribute("href", /^mailto:/);
});

test("Send Another Inquiry returns to a blank enquiry form", async ({ page }) => {
  await page.goto(`${BASE}/book/?sent=1`);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();

  await page.getByRole("link", { name: /Send Another Inquiry/i }).click();

  await expect(page).toHaveURL(/\/book\/$/);
  await expect(page).not.toHaveURL(/sent=/);
  await expect(page.getByRole("heading", { name: "Start Your Inquiry" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toHaveCount(0);
  await expect(page.locator("form input[id='name']")).toHaveCount(1);
  await expect(page.locator("form input[id='name']")).toHaveValue("");
});

// Keep in sync with SUCCESS_IDLE_HOME_REDIRECT_MS in app/book/BookPageClient.tsx.
const SUCCESS_IDLE_HOME_REDIRECT_MS = 12_000;

test("idle inquiry-sent screen returns home after the timeout", async ({ page }) => {
  test.setTimeout(SUCCESS_IDLE_HOME_REDIRECT_MS + 15_000);
  await page.goto(`${BASE}/book/?sent=1`);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();
  await expect(page.getByText(/Returning home in \d+ seconds?/)).toBeVisible();

  await page.waitForURL((url) => url.pathname === "/", {
    timeout: SUCCESS_IDLE_HOME_REDIRECT_MS + 5_000,
  });

  await expect(page).not.toHaveURL(/book/);
  await expect(page.getByRole("heading", { name: /Bonefishing at Its/i })).toBeVisible();
});

test("clicking a success CTA cancels the home redirect", async ({ page }) => {
  test.setTimeout(SUCCESS_IDLE_HOME_REDIRECT_MS + 15_000);
  await page.goto(`${BASE}/book/?sent=1`);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();

  const call = page.getByRole("link", { name: /Call \(336\)/ });
  await call.evaluate((el) => {
    el.addEventListener("click", (event) => event.preventDefault(), { capture: true });
  });
  await call.click();

  await expect(page.getByText(/Returning home in/i)).toHaveCount(0);

  await page.waitForTimeout(SUCCESS_IDLE_HOME_REDIRECT_MS + 1_500);

  await expect(page).toHaveURL(/\/book\/?\?sent=1/);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();
});

test("enquiry form is not auto-redirected home", async ({ page }) => {
  await page.goto(`${BASE}/book/`);
  await expect(page.locator("form input[id='name']")).toHaveCount(1);
  await expect(page.locator("form")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Start Your Inquiry" })).toBeVisible();
  await expect(page.getByText(/Returning home in/i)).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toHaveCount(0);

  await expect(page).toHaveURL(/\/book\/$/);
  await expect(page).not.toHaveURL(/sent=/);
});

test("failed enquiry submit shows an error and restores the button", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ success: false, message: "Simulated outage" }),
    });
  });

  await page.goto(`${BASE}/book/`);
  await fillEnquiryForm(page);
  await page.getByRole("button", { name: "Send Inquiry" }).click();

  const alert = page.locator("form [role='alert']");
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/GreatBonefishing@gmail.com/i);
  await expect(alert).toContainText(/336/);
  await expect(page.getByRole("button", { name: "Sending..." })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Send Inquiry" })).toBeEnabled();
});

test("successful enquiry submit shows the sent screen", async ({ page }) => {
  let web3formsCalled = false;
  await page.route("https://api.web3forms.com/submit", async (route) => {
    web3formsCalled = true;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    });
  });

  await page.goto(`${BASE}/book/`);
  await fillEnquiryForm(page);
  await page.getByRole("button", { name: "Send Inquiry" }).click();

  await expect(page).toHaveURL(/\/book\/?\?sent=1/);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();
  expect(web3formsCalled).toBe(true);
});

test("filled honeypot shows success without calling Web3Forms", async ({ page }) => {
  let web3formsCalled = false;
  await page.route("https://api.web3forms.com/submit", async (route) => {
    web3formsCalled = true;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    });
  });

  await page.goto(`${BASE}/book/`);
  await fillEnquiryForm(page);
  await page.locator("form input[name='website']").evaluate((el: HTMLInputElement) => {
    el.value = "http://spam.example";
  });
  await page.getByRole("button", { name: "Send Inquiry" }).click();

  await expect(page).toHaveURL(/\/book\/?\?sent=1/);
  await expect(page.getByRole("heading", { name: "Inquiry Sent" })).toBeVisible();
  expect(web3formsCalled).toBe(false);
});
