import { test, expect, ConsoleMessage } from "@playwright/test";
import vercelConfig from "../vercel.json";

const BASE = process.env.BASE_URL || "https://gbf-nine.vercel.app";

const PAGES = [
  { path: "/", name: "Homepage" },
  { path: "/fishing/", name: "Fishing" },
  { path: "/fishing/bottle-creek/", name: "Bottle Creek" },
  { path: "/fishing/east-bay/", name: "East Bay" },
  { path: "/fishing/north-caicos/", name: "North Caicos" },
  { path: "/fishing/why-turks-caicos/", name: "Why Turks & Caicos" },
  { path: "/lodge/", name: "Lodge" },
  { path: "/diy/", name: "DIY" },
  { path: "/diy/fishing-kayaks/", name: "Fishing Kayaks" },
  { path: "/diy/guided-vs-diy/", name: "Guided vs DIY" },
  { path: "/rates/", name: "Rates" },
  { path: "/travel/", name: "Travel" },
  { path: "/learn/", name: "Learn" },
  { path: "/learn/seasons/", name: "Seasons" },
  { path: "/learn/bonefish-season/", name: "Bonefish Season" },
  { path: "/learn/bonefish-flies/", name: "Bonefish Flies" },
  { path: "/learn/catch-and-release/", name: "Catch & Release" },
  { path: "/learn/tackle-and-gear/", name: "Tackle & Gear" },
  { path: "/faq/", name: "FAQ" },
  { path: "/gallery/", name: "Gallery" },
  { path: "/book/", name: "Book" },
  { path: "/contact/", name: "Contact" },
  { path: "/deposit/", name: "Deposit" },
];

const LEGACY_REDIRECTS = [
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/links/", "/"],
  ["/flyfishing-in-the-turks-and-caicos/", "/fishing/"],
  ["/flyfishing-in-the-turks-and-caicos/north-caicos/", "/fishing/north-caicos/"],
  ["/flyfishing-in-the-turks-and-caicos/bottle-creek/", "/fishing/bottle-creek/"],
  ["/flyfishing-in-the-turks-and-caicos/east-baysouth-cays/", "/fishing/east-bay/"],
  ["/flyfishing-in-the-turks-and-caicos/wading_for_bonefish/", "/diy/"],
  ["/offshore-fishing-in-the-turks-and-caicos/", "/fishing/"],
  ["/last-chance/", "/travel/"],
  ["/extra-stuff-dont-wanna-delete-get/", "/"],
  ["/size-bonefish-can-expect-see/", "/fishing/"],
  ["/twitter-test/", "/"],
  ["/fly-fish-bonefish/", "/fishing/"],
  ["/seasons/", "/learn/seasons/"],
  ["/payment-successful/", "/book/?sent=1"],
  ["/transport-provo/", "/travel/"],
  ["/bonefishing-rates/", "/rates/"],
  ["/bonefish-spawning-and-fishing-season/", "/learn/bonefish-season/"],
  ["/bonefish-flies/", "/learn/bonefish-flies/"],
  ["/contact-us/", "/book/"],
  ["/catch-and-release-bonefish-handling/", "/learn/catch-and-release/"],
  ["/why-the-turks-and-caicos-is-great-for-bonefishing/", "/fishing/why-turks-caicos/"],
  ["/accommodation/", "/lodge/#other-accommodation"],
  ["/bonefishing-trip/", "/fishing/"],
  ["/diy-bonefishing/", "/diy/"],
  ["/bonefishing-lodge-turks-caicos/", "/lodge/"],
  ["/diy-bonefishing-boat/", "/diy/guided-vs-diy/"],
  ["/fishing-kayaks/", "/diy/fishing-kayaks/"],
  ["/book-a-trip/", "/book/"],
] as const;

for (const { path, name } of PAGES) {
  test(`${name} (${path}) loads without errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg: ConsoleMessage) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    const response = await page.goto(`${BASE}${path}`);
    expect(response?.status()).toBeLessThan(400);

    await page.waitForLoadState("networkidle");

    const filtered = consoleErrors.filter(
      (e) =>
        !e.includes("favicon") &&
        !e.includes("net::ERR") &&
        !e.includes("404") &&
        !e.includes("Warning:")
    );
    expect(filtered, `Console errors on ${path}: ${filtered.join(", ")}`).toHaveLength(0);
  });

  test(`${name} has header, footer and CTA`, async ({ page }) => {
    await page.goto(`${BASE}${path}`);

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator('a:has-text("Book"):visible').first()).toBeVisible();
  });

  test(`${name} has correct page title`, async ({ page }) => {
    await page.goto(`${BASE}${path}`);
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(5);
  });
}

test("Mobile: hamburger opens and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only test");
  await page.goto(`${BASE}/`);
  await page.waitForLoadState("networkidle");

  const hamburger = page.locator('button[aria-label="Toggle menu"]');
  await expect(hamburger).toBeVisible();

  await hamburger.click();
  await page.waitForTimeout(500);

  const nav = page.locator("nav").last();
  await expect(nav).toBeVisible();
});

test("Desktop: Fishing dropdown opens", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop-only test");
  await page.goto(`${BASE}/`);
  await page.waitForLoadState("networkidle");

  const fishingBtn = page.locator("nav button:has-text('Fishing')");
  await fishingBtn.click();

  await page.waitForTimeout(300);
  const dropdown = page.locator("nav >> text=Our Locations").first();
  await expect(dropdown).toBeVisible();
});

test("Book page has form", async ({ page }) => {
  await page.goto(`${BASE}/book/`);
  await page.waitForLoadState("networkidle");

  const form = page.locator("form");
  await expect(form).toBeVisible();
  const nameInput = page.locator('input[name="name"], input[id="name"]');
  await expect(nameInput).toBeVisible();
});

test("Navigation links resolve (no 404s for key pages)", async ({ page }) => {
  await page.goto(`${BASE}/`);
  const navLinks = page.locator("header a");
  const count = await navLinks.count();
  const links: string[] = [];
  for (let i = 0; i < count; i++) {
    const href = await navLinks.nth(i).getAttribute("href");
    if (href && href.startsWith("/") && !href.startsWith("/book")) {
      links.push(href);
    }
  }
  const unique = [...new Set(links)];
  for (const link of unique.slice(0, 5)) {
    const response = await page.goto(`${BASE}${link}`);
    expect(response?.status()).toBeLessThan(400);
  }
});

test("Legacy sitemap URLs have Vercel redirects configured", async () => {
  const redirects = new Map(
    vercelConfig.redirects.map((redirect) => [redirect.source, redirect.destination])
  );

  for (const [source, destination] of LEGACY_REDIRECTS) {
    expect(redirects.get(source), `${source} should redirect`).toBe(destination);
  }
});
