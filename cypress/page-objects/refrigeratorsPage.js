export class RefrigeratorsPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/refrigerators"}`);
  }
  navigateGroup() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/refrigerator-groups"}`);
  }
  createRefBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  saveBtn() {
    return cy.get("app-button.ng-star-inserted > .p-element");
  }
  deviceName() {
    return cy.get(
      ":nth-child(1) > :nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  venueDrpDwn() {
    return cy.get(
      ":nth-child(2) > app-dropdown.ng-star-inserted > .field > .p-inputwrapper > .w-full > .p-dropdown-label"
    );
  }
  locationDrpDwn() {
    return cy.get(
      ":nth-child(3) > app-dropdown.ng-star-inserted > .field > .p-inputwrapper > .w-full > .p-dropdown-label"
    );
  }
  thirdItemInDrpDwn() {
    return cy.get(":nth-child(3) > .p-ripple");
  }
  firstItemInDrpDwn() {
    return cy.get(":nth-child(1) > .p-ripple");
  }
  deviceIMEI() {
    return cy.get(
      ":nth-child(4) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  timezone() {
    return cy.get(
      ":nth-child(5) > app-dropdown.ng-star-inserted > .field > .p-inputwrapper > .w-full > .p-dropdown-label"
    );
  }
  minTemperature() {
    return cy.get(
      ":nth-child(2) > :nth-child(2) > app-input.ng-star-inserted > .field > .p-inputtext"
    );
  }
  maxTemperature() {
    return cy.get(
      ":nth-child(2) > :nth-child(1) > app-input.ng-star-inserted > .field > .p-inputtext"
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
    return cy.get(":nth-child(1) > :nth-child(9) > .w-btn-group > a.p-element");
  }
  editRefGroupBtn() {
    return cy.get(":nth-child(1) > :nth-child(6) > .w-btn-group > a.p-element");
  }
  deleteBtn() {
    return cy.get(
      ':nth-child(1) > :nth-child(9) > .w-btn-group > [ptooltip="Delete"]'
    );
  }
  deleteGroupBtn() {
    return cy.get(
      ':nth-child(1) > :nth-child(6) > .w-btn-group > [ptooltip="Delete"]'
    );
  }
  confDeleteBtn() {
    return cy.get(".p-confirm-popup-accept");
  }
  tableFirstName() {
    return cy.get(
      ".p-datatable-tbody > :nth-child(1) > :nth-child(1) > .ng-star-inserted"
    );
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
    this.venueDrpDwn().click();
    this.thirdItemInDrpDwn().click();
    cy.wait(1000);
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
  validateAddedRefrigerator(imei) {
    this.tableFirstName().should("contain.text", imei);
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
    this.editRefBtn().click({ force: true });
    this.deviceName().clear();
    this.deviceName().type(dvcName);
    this.venueDrpDwn().click();
    this.thirdItemInDrpDwn().click();
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
  validateEditedRefrigerator(imei) {
    this.tableFirstName().should("contain.text", imei);
  }

  deleteRefrigerator() {
    this.navigate();
    this.deleteBtn().click();
    this.confDeleteBtn().click();
  }
  validateDeletedRefrigerator(dvcName) {
    this.tableFirstName().should("not.contain.text", dvcName);
  }

  addRefGroup(groupName, maxT, minT, tHeartBeat, desc) {
    this.navigateGroup();
    this.createRefBtn().click({ force: true });
    this.deviceName().type(groupName);
    cy.wait(1000);
    this.venueDrpDwn().click();
    this.thirdItemInDrpDwn().click();
    cy.wait(1000);
    this.locationDrpDwn().click();
    this.firstItemInDrpDwn().click();
    cy.wait(1000);
    this.maxTemperature().type(maxT);
    cy.wait(1000);
    this.minTemperature().type(minT);
    cy.wait(1000);
    this.temperatureHeartbeat().type(tHeartBeat);
    cy.wait(1000);
    this.deviceDesc().type(desc);
    cy.wait(1000);
    this.saveBtn().click({ force: true });
  }

  validateAddedRefrigeratorGroup(groupName) {
    this.tableFirstName().should("contain.text", groupName);
  }

  editRefrigeratorGroup(groupName, maxT, minT, tHeartBeat, desc) {
    this.navigateGroup();
    this.editRefGroupBtn().click({ force: true });
    this.deviceName().clear();
    this.deviceName().type(groupName);
    cy.wait(1000);
    this.venueDrpDwn().click();
    this.thirdItemInDrpDwn().click();
    cy.wait(1000);
    this.locationDrpDwn().click();
    this.firstItemInDrpDwn().click();
    cy.wait(1000);
    this.maxTemperature().clear();
    this.maxTemperature().type(maxT);
    cy.wait(1000);
    this.minTemperature().clear();
    this.minTemperature().type(minT);
    cy.wait(1000);
    this.temperatureHeartbeat().clear();
    this.temperatureHeartbeat().type(tHeartBeat);
    cy.wait(1000);
    this.deviceDesc().clear();
    this.deviceDesc().type(desc);
    cy.wait(1000);
    this.saveBtn().click({ force: true });
  }
  validateEditedRefrigeratorGroup(groupName) {
    this.tableFirstName().should("contain.text", groupName);
  }

  deleteRefrigeratorGroup() {
    this.navigateGroup();
    this.deleteGroupBtn().click();
    this.confDeleteBtn().click();
  }
  validateDeletedRefrigeratorGroup(groupName) {
    this.tableFirstName().should("not.contain.text", groupName);
  }
}
