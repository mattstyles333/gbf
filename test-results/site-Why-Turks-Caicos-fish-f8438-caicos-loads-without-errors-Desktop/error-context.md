# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> Why Turks & Caicos (/fishing/why-turks-caicos/) loads without errors
- Location: tests/site.spec.ts:37:7

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 400
Received:   404
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Great Bone Fishing World-Class Bonefishing in the Turks & Caicos" [ref=e4] [cursor=pointer]:
        - /url: /
        - img [ref=e6]
        - generic [ref=e9]:
          - generic [ref=e10]: Great Bone Fishing
          - generic [ref=e11]: World-Class Bonefishing in the Turks & Caicos
      - navigation [ref=e12]:
        - button "Fishing" [ref=e15]:
          - text: Fishing
          - img [ref=e16]
        - link "Lodge & Stay" [ref=e19] [cursor=pointer]:
          - /url: /lodge/
        - button "Plan Your Trip" [ref=e22]:
          - text: Plan Your Trip
          - img [ref=e23]
        - button "Learn" [ref=e27]:
          - text: Learn
          - img [ref=e28]
        - link "Book" [ref=e31] [cursor=pointer]:
          - /url: /book/
      - generic [ref=e32]:
        - link "(336) 655-0541" [ref=e33] [cursor=pointer]:
          - /url: tel:3366550541
        - link "Check Availability" [ref=e34] [cursor=pointer]:
          - /url: /book/
  - main [ref=e35]:
    - generic [ref=e37]:
      - img [ref=e39]
      - heading "Great Bone Fishing" [level=1] [ref=e42]
      - paragraph [ref=e43]:
        - text: The page you're looking for doesn't exist. Try the
        - link "homepage" [ref=e44] [cursor=pointer]:
          - /url: /
        - text: or
        - link "contact us" [ref=e45] [cursor=pointer]:
          - /url: /book
        - text: .
      - link "Go to Homepage" [ref=e46] [cursor=pointer]:
        - /url: /
  - contentinfo [ref=e47]:
    - generic [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "Great Bone Fishing" [level=3] [ref=e51]
          - paragraph [ref=e52]: World-class bonefishing on the pristine flats of North Caicos, Turks & Caicos Islands. Experienced guides, comfortable lodge, and unforgettable fishing.
          - link "TripAdvisor" [ref=e54] [cursor=pointer]:
            - /url: https://www.tripadvisor.com/
            - img "TripAdvisor" [ref=e55]
        - generic [ref=e56]:
          - heading "Explore" [level=4] [ref=e57]
          - list [ref=e58]:
            - listitem [ref=e59]:
              - link "Fishing" [ref=e60] [cursor=pointer]:
                - /url: /fishing/
            - listitem [ref=e61]:
              - link "Lodge & Stay" [ref=e62] [cursor=pointer]:
                - /url: /lodge/
            - listitem [ref=e63]:
              - link "Plan Your Trip" [ref=e64] [cursor=pointer]:
                - /url: /travel/
            - listitem [ref=e65]:
              - link "Learn" [ref=e66] [cursor=pointer]:
                - /url: /learn/
            - listitem [ref=e67]:
              - link "Book" [ref=e68] [cursor=pointer]:
                - /url: /book/
        - generic [ref=e69]:
          - heading "Fishing" [level=4] [ref=e70]
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "Guided Fishing" [ref=e73] [cursor=pointer]:
                - /url: /fishing/
            - listitem [ref=e74]:
              - link "DIY Bonefishing" [ref=e75] [cursor=pointer]:
                - /url: /diy/
            - listitem [ref=e76]:
              - link "North Caicos Flats" [ref=e77] [cursor=pointer]:
                - /url: /fishing/north-caicos/
            - listitem [ref=e78]:
              - link "Bottle Creek Reserve" [ref=e79] [cursor=pointer]:
                - /url: /fishing/bottle-creek/
            - listitem [ref=e80]:
              - link "Fishing Seasons" [ref=e81] [cursor=pointer]:
                - /url: /learn/seasons/
            - listitem [ref=e82]:
              - link "Bonefish Flies" [ref=e83] [cursor=pointer]:
                - /url: /learn/bonefish-flies/
        - generic [ref=e84]:
          - heading "Contact" [level=4] [ref=e85]
          - list [ref=e86]:
            - listitem [ref=e87]:
              - 'link "USA: (336) 655-0541" [ref=e88] [cursor=pointer]':
                - /url: tel:3366550541
            - listitem [ref=e89]:
              - 'link "TCI: (649) 241-6263" [ref=e90] [cursor=pointer]':
                - /url: tel:6492416263
            - listitem [ref=e91]:
              - link "[email protected]" [ref=e92] [cursor=pointer]:
                - /url: mailto:[email protected]
            - listitem [ref=e93]: Bottle Creek, North Caicos TCI
      - generic [ref=e95]:
        - generic [ref=e96]:
          - text: "Great Sailfishing:"
          - link "Offshore Billfishing in Guatemala" [ref=e97] [cursor=pointer]:
            - /url: https://www.greatsailfishing.com
        - paragraph [ref=e98]: © 2026 Great Bone Fishing. All rights reserved.
  - alert [ref=e99]
```

# Test source

```ts
  1   | import { test, expect, ConsoleMessage } from "@playwright/test";
  2   | 
  3   | const BASE = "https://gbf-nine.vercel.app";
  4   | 
  5   | const PAGES = [
  6   |   { path: "/", name: "Homepage" },
  7   |   { path: "/fishing/", name: "Fishing" },
  8   |   { path: "/fishing/bottle-creek/", name: "Bottle Creek" },
  9   |   { path: "/fishing/east-bay/", name: "East Bay" },
  10  |   { path: "/fishing/north-caicos/", name: "North Caicos" },
  11  |   { path: "/fishing/why-turks-caicos/", name: "Why Turks & Caicos" },
  12  |   { path: "/lodge/", name: "Lodge" },
  13  |   { path: "/diy/", name: "DIY" },
  14  |   { path: "/diy/fishing-kayaks/", name: "Fishing Kayaks" },
  15  |   { path: "/diy/guided-vs-diy/", name: "Guided vs DIY" },
  16  |   { path: "/rates/", name: "Rates" },
  17  |   { path: "/travel/", name: "Travel" },
  18  |   { path: "/learn/", name: "Learn" },
  19  |   { path: "/learn/seasons/", name: "Seasons" },
  20  |   { path: "/learn/bonefish-season/", name: "Bonefish Season" },
  21  |   { path: "/learn/bonefish-flies/", name: "Bonefish Flies" },
  22  |   { path: "/learn/catch-and-release/", name: "Catch & Release" },
  23  |   { path: "/book/", name: "Book" },
  24  | ];
  25  | 
  26  | async function checkNoErrors(page: any, name: string) {
  27  |   const errors: string[] = [];
  28  |   page.on(ConsoleMessage, (msg: ConsoleMessage) => {
  29  |     if (msg.type() === "error") {
  30  |       errors.push(msg.text());
  31  |     }
  32  |   });
  33  |   return errors;
  34  | }
  35  | 
  36  | for (const { path, name } of PAGES) {
  37  |   test(`${name} (${path}) loads without errors`, async ({ page }) => {
  38  |     const consoleErrors: string[] = [];
  39  |     page.on("console", (msg: ConsoleMessage) => {
  40  |       if (msg.type() === "error") {
  41  |         consoleErrors.push(msg.text());
  42  |       }
  43  |     });
  44  | 
  45  |     const response = await page.goto(`${BASE}${path}`);
> 46  |     expect(response?.status()).toBeLessThan(400);
      |                                ^ Error: expect(received).toBeLessThan(expected)
  47  | 
  48  |     await page.waitForLoadState("networkidle");
  49  | 
  50  |     const filtered = consoleErrors.filter(
  51  |       (e) =>
  52  |         !e.includes("favicon") &&
  53  |         !e.includes("net::ERR") &&
  54  |         !e.includes("404") &&
  55  |         !e.includes("Warning:")
  56  |     );
  57  |     expect(filtered, `Console errors on ${path}: ${filtered.join(", ")}`).toHaveLength(0);
  58  |   });
  59  | 
  60  |   test(`${name} has header, footer and CTA`, async ({ page }) => {
  61  |     await page.goto(`${BASE}${path}`);
  62  | 
  63  |     await expect(page.locator("header")).toBeVisible();
  64  |     await expect(page.locator("footer")).toBeVisible();
  65  |     await expect(page.locator('a:has-text("Check Availability")').first()).toBeVisible();
  66  |   });
  67  | 
  68  |   test(`${name} has correct page title`, async ({ page }) => {
  69  |     await page.goto(`${BASE}${path}`);
  70  |     const title = await page.title();
  71  |     expect(title).toBeTruthy();
  72  |     expect(title.length).toBeGreaterThan(5);
  73  |   });
  74  | }
  75  | 
  76  | test("Mobile: hamburger opens and closes", async ({ page, isMobile }) => {
  77  |   test.skip(!isMobile, "Mobile-only test");
  78  |   await page.goto(`${BASE}/`);
  79  |   await page.waitForLoadState("networkidle");
  80  | 
  81  |   const hamburger = page.locator('button[aria-label="Toggle menu"]');
  82  |   await expect(hamburger).toBeVisible();
  83  | 
  84  |   await hamburger.click();
  85  |   await page.waitForTimeout(500);
  86  | 
  87  |   const nav = page.locator("nav").last();
  88  |   await expect(nav).toBeVisible();
  89  | });
  90  | 
  91  | test("Desktop: Fishing dropdown opens", async ({ page, isMobile }) => {
  92  |   test.skip(isMobile, "Desktop-only test");
  93  |   await page.goto(`${BASE}/`);
  94  |   await page.waitForLoadState("networkidle");
  95  | 
  96  |   const fishingBtn = page.locator("nav button:has-text('Fishing')");
  97  |   await fishingBtn.click();
  98  | 
  99  |   await page.waitForTimeout(300);
  100 |   const dropdown = page.locator("nav >> text=Our Locations").first();
  101 |   await expect(dropdown).toBeVisible();
  102 | });
  103 | 
  104 | test("Book page has form", async ({ page }) => {
  105 |   await page.goto(`${BASE}/book/`);
  106 |   await page.waitForLoadState("networkidle");
  107 | 
  108 |   const form = page.locator("form");
  109 |   await expect(form).toBeVisible();
  110 |   const nameInput = page.locator('input[name="name"], input[id="name"]');
  111 |   await expect(nameInput).toBeVisible();
  112 | });
  113 | 
  114 | test("Navigation links resolve (no 404s for key pages)", async ({ page }) => {
  115 |   await page.goto(`${BASE}/`);
  116 |   const navLinks = page.locator("header a");
  117 |   const count = await navLinks.count();
  118 |   const links: string[] = [];
  119 |   for (let i = 0; i < count; i++) {
  120 |     const href = await navLinks.nth(i).getAttribute("href");
  121 |     if (href && href.startsWith("/") && !href.startsWith("/book")) {
  122 |       links.push(href);
  123 |     }
  124 |   }
  125 |   const unique = [...new Set(links)];
  126 |   for (const link of unique.slice(0, 5)) {
  127 |     const response = await page.goto(`${BASE}${link}`);
  128 |     expect(response?.status()).toBeLessThan(400);
  129 |   }
  130 | });
  131 | 
```