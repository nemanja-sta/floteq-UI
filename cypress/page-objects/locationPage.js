export class LocationPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/venues/edit/3"}`);
  }

  createLocationBtn() {
    return cy.get(".mb-3 > .main-btn");
  }
  nameInputField() {
    return cy.get(".p-inputtext");
  }
  saveBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  locationFirstItem() {
    return cy.get(
      ".p-datatable-tbody > :nth-child(1) > :nth-child(1) > .ng-star-inserted"
    );
  }
  editBtn() {
    return cy.get(":nth-child(1) > :nth-child(2) > .w-btn-group > .mr-2");
  }
  deleteBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(2) > .w-btn-group > button.p-element"
    );
  }
  deleteConfBtn() {
    return cy.get(".p-confirm-popup-accept");
  }

  addLocation(locationName) {
    this.createLocationBtn().click({ force: true });
    this.nameInputField().type(locationName);
    this.saveBtn().click({ force: true });
  }
  validateAddedLocation(locationName) {
    this.locationFirstItem().should("contain.text", locationName);
  }

  editLocation(locationName) {
    this.editBtn().click();
    this.nameInputField().clear();
    this.nameInputField().type(locationName);
    this.saveBtn().click({ force: true });
  }
  validateEditLocation(locationName) {
    this.locationFirstItem().should("contain.text", locationName);
  }

  deleteLocation() {
    this.deleteBtn().click();
    this.deleteConfBtn().click();
  }
  validateDeleteLocation(name) {
    this.locationFirstItem().should("not.contain.text", name);
  }
}
