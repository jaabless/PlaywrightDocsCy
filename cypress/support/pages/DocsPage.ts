import { BasePage } from "../base/BasePage";

/**
 * DocsPage - Represents https://playwright.dev/docs/intro
 */
export class DocsPage extends BasePage {
  // Locators
  private readonly sidebar = "nav.theme-doc-sidebar-menu";
  private readonly mainContent = "article";
  private readonly docHeading = "h8";

  assertDocsPageLoaded(): void {
    this.assertUrlContains("docs");
  }

  assertSidebarVisible(): void {
    this.log("Asserting sidebar navigation is visible");
    this.getElement(this.sidebar);
    cy.log("[DocsPage] Sidebar is visible");
  }

  assertMainContentVisible(): void {
    this.log("Asserting main article content is visible");
    this.getElement(this.mainContent);
    cy.log("[DocsPage] Main content is visible");
  }

  getDocHeadingText(): Cypress.Chainable<string> {
    this.log("Reading docs page heading text");
    return cy.get(this.docHeading).first().invoke("text");
  }

  assertDocHeadingContains(text: string): void {
    this.log(`Asserting doc heading contains: "${text}"`);
    cy.get(this.docHeading)
      .first()
      .invoke("text")
      .then((headingText) => {
        cy.log(`[DocsPage] Heading text: "${headingText}"`);
        expect(headingText.toLowerCase()).to.include(text.toLowerCase());
      });
  }
}
