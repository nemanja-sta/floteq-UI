export class LocationPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/locations"}`);
  }

  addLocation(name, adress) {
    cy.get("app-button.ng-star-inserted > .p-element").click({ force: true });
    cy.get(
      ":nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    ).type(name);
    cy.get(
      ":nth-child(2) > app-input.ng-star-inserted > .field > .p-inputtext"
    ).type(adress);
    cy.get("app-button.ng-star-inserted > .p-element").click({ force: true });
  }

  validateAddedLocation(name) {
    cy.get(".p-4 > .grid > .col-12").should("contain.text", name);
  }
}
