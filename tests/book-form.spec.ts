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
  await expect(page.getByRole("link", { name: /Send Another Inquiry/i })).toBeVisible();
  await expect(page.locator("main").getByRole("link", { name: "GreatBonefishing@gmail.com" }).first()).toBeVisible();
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
