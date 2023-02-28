export class RefrigeratorsPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/refrigerators"}`);
  }
  saveBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  createRefBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  deviceName() {
    return cy.get(
      ":nth-child(1) > :nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  locationDrpDwn() {
    return cy.get(
      ":nth-child(2) > app-dropdown.ng-star-inserted > .field > .p-inputwrapper > .w-full > .p-dropdown-label"
    );
  }
  firstItemInDrpDwn() {
    return cy.get(":nth-child(1) > .p-ripple");
  }
  deviceIMEI() {
    return cy.get(
      ":nth-child(1) > :nth-child(3) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  timezone() {
    return cy.get(
      ":nth-child(4) > app-dropdown.ng-star-inserted > .field > .p-inputwrapper > .w-full > .p-dropdown-label"
    );
  }
  minTemperature() {
    return cy.get(
      ":nth-child(2) > :nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  maxTemperature() {
    return cy.get(
      ":nth-child(2) > :nth-child(2) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  temperatureHeartbeat() {
    return cy.get(
      ":nth-child(3) > :nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  refStnByPwr() {
    return cy.get(
      ":nth-child(3) > :nth-child(2) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  refCompPwr() {
    return cy.get(
      ":nth-child(3) > :nth-child(3) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  deviceDesc() {
    return cy.get(".p-inputtextarea");
  }
  editRefBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(8) > .w-btn-group > a.p-element > .pi"
    );
  }
  deleteBtn() {
    return cy.get(
      ':nth-child(1) > :nth-child(8) > .w-btn-group > [ptooltip="Delete"] > .pi'
    );
  }
  confDeleteBtn() {
    return cy.get(".p-confirm-popup-accept > .p-button-label");
  }
  tableNames() {
    return cy.get(".p-4 > .grid > .col-12");
  }

  addNewRefrigerator(
    dvcName,
    imei,
    maxT,
    minT,
    tHeartBeat,
    stByPwr,
    cmpPwr,
    desc
  ) {
    this.navigate();
    this.createRefBtn().click({ force: true });
    this.deviceName().type(dvcName);
    this.locationDrpDwn().click();
    this.firstItemInDrpDwn().click();
    this.deviceIMEI().clear();
    this.deviceIMEI().type(imei);
    this.timezone().click();
    this.firstItemInDrpDwn().click();
    this.maxTemperature().clear();
    this.maxTemperature().type(maxT);
    this.minTemperature().clear();
    this.minTemperature().type(minT);
    this.temperatureHeartbeat().clear();
    this.temperatureHeartbeat().type(tHeartBeat);
    this.refStnByPwr().clear();
    this.refStnByPwr().type(stByPwr);
    this.refCompPwr().clear();
    this.refCompPwr().type(cmpPwr);
    this.deviceDesc().clear();
    this.deviceDesc().type(desc);
    this.saveBtn().click({ force: true });
  }
  validateAddedRefrigerator(dvcName) {
    this.tableNames().should("contain.text", dvcName);
  }

  editRefrigerator(
    dvcName,
    imei,
    maxT,
    minT,
    tHeartBeat,
    stByPwr,
    cmpPwr,
    desc
  ) {
    this.navigate();
    cy.wait(5000);
    this.editRefBtn().click({ force: true });
    this.deviceName().clear();
    this.deviceName().type(dvcName);
    this.locationDrpDwn().click();
    this.firstItemInDrpDwn().click();
    this.deviceIMEI().type(imei);
    this.timezone().click();
    this.firstItemInDrpDwn().click();
    this.maxTemperature().type(maxT);
    this.minTemperature().type(minT);
    this.temperatureHeartbeat().type(tHeartBeat);
    this.refStnByPwr().type(stByPwr);
    this.refCompPwr().type(cmpPwr);
    this.deviceDesc().type(desc);
    this.saveBtn().click({ force: true });
  }
  validateEditedRefrigerator(dvcName) {
    this.tableNames().should("contain.text", dvcName);
    // this.tableNames().should("not.contain.text", dvcName);
  }

  deleteRefrigerator() {
    this.navigate();
    cy.wait(5000);
    this.deleteBtn().click();
    this.confDeleteBtn().click();
  }
  validateDeletedRefrigerator(dvcName) {
    this.tableNames().should("not.contain.text", dvcName);
  }
}
