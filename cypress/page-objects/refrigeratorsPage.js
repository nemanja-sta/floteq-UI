export class RefrigeratorsPage {
  navigate() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/refrigerators"}`);
  }
  navigateGroup() {
    cy.visit(`${Cypress.env("baseUrl") + "/#/refrigerator-groups"}`);
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
  overrideDvcConf() {
    return cy.get(
      ":nth-child(11) > app-form-factory-core > app-toggle.ng-star-inserted > .field > .p-element > .p-inputswitch > .p-inputswitch-slider"
    );
  }
  editRefBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(8) > .w-btn-group > a.p-element > .pi"
    );
  }
  editRefGroupBtn() {
    return cy.get(":nth-child(1) > :nth-child(5) > .w-btn-group > .mr-2");
  }
  deleteBtn() {
    return cy.get(
      ':nth-child(1) > :nth-child(8) > .w-btn-group > [ptooltip="Delete"] > .pi'
    );
  }
  deleteGroupBtn() {
    return cy.get(
      ":nth-child(1) > :nth-child(5) > .w-btn-group > button.p-element > .pi"
    );
  }
  confDeleteBtn() {
    return cy.get(".p-confirm-popup-accept > .p-button-label");
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
    this.overrideDvcConf().click();
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
    cy.wait(5000);
    this.editRefBtn().click({ force: true });
    this.deviceName().clear();
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
  validateEditedRefrigerator(imei) {
    this.tableFirstName().should("contain.text", imei);
  }

  deleteRefrigerator() {
    this.navigate();
    cy.wait(5000);
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
    this.locationDrpDwn().click();
    this.firstItemInDrpDwn().click();
    this.maxTemperature().type(maxT);
    this.minTemperature().type(minT);
    this.temperatureHeartbeat().type(tHeartBeat);
    this.deviceDesc().type(desc);
    this.saveBtn().click({ force: true });
  }

  validateAddedRefrigeratorGroup(groupName) {
    this.tableFirstName().should("contain.text", groupName);
  }

  editRefrigeratorGroup(groupName, maxT, minT, tHeartBeat, desc) {
    this.navigateGroup();
    cy.wait(5000);
    this.editRefGroupBtn().click({ force: true });
    this.deviceName().clear();
    this.deviceName().type(groupName);
    this.locationDrpDwn().click();
    this.firstItemInDrpDwn().click();
    this.maxTemperature().clear();
    this.maxTemperature().type(maxT);
    this.minTemperature().clear();
    this.minTemperature().type(minT);
    this.temperatureHeartbeat().clear();
    this.temperatureHeartbeat().type(tHeartBeat);
    this.deviceDesc().clear();
    this.deviceDesc().type(desc);
    this.saveBtn().click({ force: true });
  }
  validateEditedRefrigeratorGroup(groupName) {
    this.tableFirstName().should("contain.text", groupName);
    this.tableFirstName().should("not.contain.text", groupName);
  }

  deleteRefrigeratorGroup() {
    this.navigateGroup();
    cy.wait(5000);
    this.deleteGroupBtn().click();
    this.confDeleteBtn().click();
  }
  validateDeletedRefrigeratorGroup(groupName) {
    this.tableFirstName().should("not.contain.text", groupName);
  }
}
