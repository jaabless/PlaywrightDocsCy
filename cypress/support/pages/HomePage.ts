import { BasePage } from "../base/BasePage";

/**
 * HomePage - Represents https://playwright.dev (landing page)
 */
export class HomePage extends BasePage {
  // Locators
  private readonly getStartedLink = "a[href='/docs/intro']";
  private readonly heroHeading = "h1.hero__title";
  private readonly navBar = "nav.navbar";

  visit(): void {
    super.visit("/");
    this.waitForPageLoad();
    cy.log("[HomePage] Loaded playwright.dev home page");
  }

  assertHomePageLoaded(): void {
    this.log("Asserting home page is loaded");
    this.assertUrlContains("playwright.dev");
    this.getElement(this.navBar);
    cy.log("[HomePage] Home page verified successfully");
  }

  assertHeroHeadingVisible(): void {
    this.log("Asserting hero heading is visible");
    cy.get(this.heroHeading).should("be.visible");
  }

  clickGetStarted(): void {
    this.log("Clicking 'Get Started' link");
    cy.get(this.getStartedLink).first().should("be.visible").click();
    cy.log("[HomePage] Clicked Get Started link");
  }
}
