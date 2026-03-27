import { HomePage } from "../pages/HomePage";
import { DocsPage } from "../pages/DocsPage";

/**
 * BaseTest - All test suites extend this.
 * Centralises page object instantiation and common before/after hooks.
 */
export class BaseTest {
  homePage: HomePage;
  docsPage: DocsPage;

  constructor() {
    this.homePage = new HomePage();
    this.docsPage = new DocsPage();
  }

  /** Call inside a describe block to register standard hooks. */
  registerHooks(): void {
    beforeEach(() => {
      cy.log("[BaseTest] Starting test");
    });

    afterEach(function () {
      if (this.currentTest?.state === "failed") {
        cy.log(`[BaseTest] Test FAILED: ${this.currentTest?.title}`);
        cy.screenshot(`failed-${Date.now()}`);
      }
    });

    after(() => {
      cy.log("[BaseTest] All tests in suite complete");
    });
  }
}
