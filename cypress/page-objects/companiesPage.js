export class CompaniesPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/companies"}`);
  }
  createCompanyBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  saveBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  editBtn() {
    return cy.get(":nth-child(1) > :nth-child(3) > .w-btn-group > .mr-2");
  }
  deleteBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(3) > .w-btn-group > button.p-element"
    );
  }
  deleteConfBtn() {
    return cy.get(".p-confirm-popup-accept");
  }
  firstItem() {
    return cy.get(
      ".p-datatable-tbody > :nth-child(1) > :nth-child(1) > .ng-star-inserted"
    );
  }
  companyName() {
    return cy.get(
      ":nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  companyAddress() {
    return cy.get(
      ":nth-child(2) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  companyBusinessNumber() {
    return cy.get(
      ":nth-child(3) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  companyEmail() {
    return cy.get(
      ":nth-child(4) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  companyAdminEmail() {
    return cy.get(
      ":nth-child(5) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }

  addNewCompany(name, address, bsnNmb, email, adminEmail) {
    this.navigate();
    this.createCompanyBtn().click({ force: true });
    this.companyName().type(name);
    this.companyAddress().type(address);
    this.companyBusinessNumber().type(bsnNmb);
    this.companyEmail().type(email);
    this.companyAdminEmail().type(adminEmail);
    this.saveBtn().click({ force: true });
  }
  validateAddedCompany(name) {
    this.firstItem().should("contain.text", name);
  }

  editCompany(name, address, bsnNmb, email, adminEmail) {
    this.navigate();
    this.editBtn().click({ force: true });
    this.companyName().clear();
    this.companyName().type(name);
    this.companyAddress().clear();
    this.companyAddress().type(address);
    this.companyBusinessNumber().clear();
    this.companyBusinessNumber().type(bsnNmb);
    this.companyEmail().clear();
    this.companyEmail().type(email);
    this.saveBtn().click({ force: true });
  }
  validateEditedCompany(name) {
    this.firstItem().should("contain.text", name);
  }

  deleteCompany() {
    this.navigate();
    this.deleteBtn().click();
    this.deleteConfBtn().click();
  }
  validateDeletedCompany(name) {
    this.firstItem().should("not.contain.text", name);
  }
}
