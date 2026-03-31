/**
 * BasePage - All page classes extend this.
 * Provides shared navigation, logging, and assertion utilities.
 */
export class BasePage {
  protected log(message: string): void {
    cy.log(`[BasePage] ${message}`);
    cy.task("log", message);
  }

  
  visit(path: string = "/"): void {
    this.log(`Navigating to: ${path}`);
    cy.visit(path);
  }

  getUrl(): Cypress.Chainable<string> {
    return cy.url();
  }

  assertUrlContains(keyword: string): void {
    this.log(`Asserting URL contains: "${keyword}"`);
    cy.url().should("include", keyword);
  }

  assertPageTitleContains(title: string): void {
    this.log(`Asserting page title contains: "${title}"`);
    cy.title().should("include", title);
  }

  waitForPageLoad(): void {
    this.log("Waiting for page to fully load");
    cy.document().its("readyState").should("eq", "complete");
  }

  getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    this.log(`Getting element: ${selector}`);
    return cy.get(selector).should("be.visible");
  }

  clickElement(selector: string): void {
    this.log(`Clicking element: ${selector}`);
    cy.get(selector).should("be.visible").click();
  }
}
