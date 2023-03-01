/// <reference types="cypress" />

import { LocationPage } from "../page-objects/locationPage";
import { handleLocationData } from "../utils/data";

describe("location actions", () => {
  beforeEach(() => {
    cy.loginViaAPI();
  });

  const locationPage = new LocationPage();
  const dataAdd = handleLocationData();
  const dataEdit = handleLocationData();

  it("should add location", () => {
    locationPage.navigate();
    locationPage.addLocation(dataAdd.name, dataAdd.address);
    locationPage.validateAddedLocation(dataAdd.name);
  });

  it("should edit location", () => {
    locationPage.navigate();
    locationPage.editLocation(dataEdit.name, dataEdit.address);
    locationPage.validateEditLocation(dataEdit.name);
  });

  it("should delete location", () => {
    locationPage.navigate();
    locationPage.deleteLocation();
    locationPage.validateDeleteLocation(dataEdit.name);
  });
});
