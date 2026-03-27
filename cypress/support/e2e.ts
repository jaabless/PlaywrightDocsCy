// Global support file — runs before every test file
// Add custom commands or global configuration here

Cypress.on("uncaught:exception", (err) => {
  // Prevent Cypress from failing on uncaught exceptions from the app under test
  cy.log(`[Global] Uncaught exception: ${err.message}`);
  return false;
});
