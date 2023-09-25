const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 50000,
  retries:1,
  env:{
    baseUrl: "https://www.unibet.co.uk",
    UK : "co.uk",
    SE : "se",
    INT : "com" 
  },
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.cy.js',
  },
});
