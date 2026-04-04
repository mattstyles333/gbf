import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "https://gbf-nine.vercel.app",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Mobile Chrome",
      use: { ...devices["Mobile Chrome"] },
    },
    {
      name: "Desktop",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
