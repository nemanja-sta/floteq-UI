export class VenuesPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/venues"}`);
  }
  createBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  saveBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  editBtn() {
    return cy.get(":nth-child(1) > :nth-child(3) > .w-btn-group > .mr-2 > .pi");
  }
  deleteBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(3) > .w-btn-group > button.p-element"
    );
  }
  deleteConfBtn() {
    return cy.get(".p-confirm-popup-accept");
  }

  venuesFirstItem() {
    return cy.get(
      ".p-datatable-tbody > :nth-child(1) > :nth-child(1) > .ng-star-inserted"
    );
  }
  venueName() {
    return cy.get(
      ":nth-child(1) > app-form-factory-core > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  venueAddress() {
    return cy.get(
      ":nth-child(2) > app-form-factory-core > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  venueLatitude() {
    return cy.get(
      ":nth-child(3) > app-form-factory-core > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  venueLongitude() {
    return cy.get(
      ":nth-child(4) > app-form-factory-core > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  venueSupervisor() {
    return cy.get(".p-multiselect-label-container");
  }
  addNewVenue(venueName, venueAddress, venueLatitude, venueLongitude) {
    this.navigate();
    this.createBtn().click({ force: true });
    this.venueName().type(venueName);
    this.venueAddress().type(venueAddress);
    this.venueLatitude().type(venueLatitude);
    this.venueLongitude().type(venueLongitude);
    this.saveBtn().click({ force: true });
  }
  validateAddedVenue(venueName) {
    this.venuesFirstItem().should("contain.text", venueName);
  }

  editVenue(venueName, venueAddress, venueLatitude, venueLongitude) {
    this.navigate();
    this.editBtn().click({ force: true });
    this.venueName().clear();
    this.venueName().type(venueName);
    this.venueAddress().clear();
    this.venueAddress().type(venueAddress);
    this.venueLatitude().clear();
    this.venueLatitude().type(venueLatitude);
    this.venueLongitude().clear();
    this.venueLongitude().type(venueLongitude);
    this.saveBtn().click({ force: true });
  }
  validateEditedVenue(venueName) {
    this.venuesFirstItem().should("contain.text", venueName);
  }

  deleteVenue() {
    this.navigate();
    this.deleteBtn().click({ force: true });
    this.deleteConfBtn().click({ force: true });
  }
  validateDeletedVenue(venueName) {
    this.venuesFirstItem(venueName).should("not.contain.text", venueName);
  }
}
