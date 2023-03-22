const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      baseUrl: "https://floteq.itcentar.rs",
      apiUrl: "https://floteq-api.itcentar.rs/api",
      superAdminEmail: "super@admin.com",
      superAdminPass: "password",
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/results",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: false,
      saveAllAttempts: true,
      overwrite: true,
      html: true,
      json: true,
    },
    video: false,
  },
});
