import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://playwright.dev",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      on("task", {
        log(message: string) {
          console.log(`[LOG] ${message}`);
          return null;
        },
      });
      return config;
    },
  },
});
