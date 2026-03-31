import { BaseTest } from "../support/base/BaseTest";

/**
 * Test Suite: Playwright Website Navigation
 *
 * Scenarios:
 *  1. Visit playwright.dev and assert URL contains 'playwright.dev'
 *  2. Click the 'Get Started' link
 *  3. Verify the resulting URL contains 'docs'
 */

const test = new BaseTest();

describe("Playwright Website - Navigation Tests", () => {
  test.registerHooks();

  beforeEach(() => {
    cy.log("[Suite] Navigating to playwright.dev before each test");
    test.homePage.visit();
  });
  

  it("should load playwright.dev and URL should contain 'playwright.dev'", () => {
    cy.log("[Test 1] Verifying home page URL");

  
    test.homePage.assertHomePageLoaded();

    cy.url().then((url) => {
      cy.log(`[Test 1] Current URL: ${url}`);
      expect(url).to.include("playwright.dev");
    });
  });

  it("should click Get Started and URL should contain 'docs'", () => {
    cy.log("[Test 2] Clicking Get Started and asserting docs URL");

    // Assert we are on the home page first
    test.homePage.assertHomePageLoaded();

    // Click the Get Started link
    test.homePage.clickGetStarted();

    test.docsPage.assertDocsPageLoaded();
  });

  it("should display docs page heading after navigating from Get Started", () => {
    cy.log("[Test 3] Verifying docs page content after Get Started click");

    test.homePage.clickGetStarted();
    test.docsPage.assertDocsPageLoaded();

    test.docsPage.getDocHeadingText().then((text) => {
      cy.log(`[Test 3] Docs heading: "${text}"`);
      expect(text.length).to.be.greaterThan(0);
    });
  });
});
