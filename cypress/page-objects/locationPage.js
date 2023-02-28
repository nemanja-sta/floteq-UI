export class LocationPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/locations"}`);
  }

  createLocationBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  nameInputField() {
    return cy.get(
      ":nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  adressInputField() {
    return cy.get(
      ":nth-child(2) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  saveBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  tableNames() {
    return cy.get(".p-4 > .grid > .col-12");
  }
  editBtn() {
    return cy.get(":nth-child(1) > :nth-child(3) > .w-btn-group > .mr-2");
  }
  deleteBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(3) > .w-btn-group > button.p-element > .pi"
    );
  }
  confrmDltBtn() {
    return cy.get(".p-confirm-popup-accept > .p-button-label");
  }

  addLocation(name, adress) {
    this.createLocationBtn().click({ force: true });
    this.nameInputField().type(name);
    this.adressInputField().type(adress);
    this.saveBtn().click({ force: true });
  }

  validateAddedLocation(name) {
    this.tableNames().should("contain.text", name);
  }

  editLocation(newName, newAdress) {
    this.editBtn().click();
    this.nameInputField().clear();
    this.nameInputField().type(newName);
    this.adressInputField().clear();
    this.adressInputField().type(newAdress);
    this.saveBtn().click({ force: true });
  }

  validateEditLocation(newName, newAdress) {
    this.tableNames().should("contain.text", name);
  }

  deleteLocation() {
    this.deleteBtn().click();
    this.confrmDltBtn().click();
  }

  validateDeleteLocation(name) {
    this.tableNames().should("not.contain.text", name);
  }
}
