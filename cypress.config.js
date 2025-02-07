const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // cypress can only control one domain at a time, so cy.origin() is required when testing across domains. I think Medium was blocking automation or preventing cross-origin interaction, so test was failing due to their security settings. This was bypassed by disabling chrome security in config file.
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
  },
});
