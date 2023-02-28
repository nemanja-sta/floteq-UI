/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.loginViaAPI();
  });

  it("test login", () => {
    cy.visit(`${Cypress.env("baseUrl") + "/#/refrigerators-stats"}`);
    cy.url().should(
      "eql",
      `${Cypress.env("baseUrl") + "/#/refrigerators-stats"}`
    );
  });
});
