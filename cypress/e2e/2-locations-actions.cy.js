/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
const { LocationPage } = require("../page-objects/locationPage");

describe("location actions", () => {
  beforeEach(() => {
    cy.loginViaAPI();
  });

  const locationPage = new LocationPage();
  let name = faker.address.cityName();
  let adress = faker.address.streetName();

  let newName = faker.address.cityName();
  let newAdress = faker.address.streetName();

  it("should add location", () => {
    locationPage.navigate();
    locationPage.addLocation(name, adress);
    locationPage.validateAddedLocation(name);
  });

  it("should edit location", () => {
    locationPage.navigate();
    locationPage.editLocation(newName, newAdress);
    locationPage.validateEditLocation(newName);
  });

  it("should delete location", () => {
    locationPage.navigate();
    locationPage.deleteLocation();
    locationPage.validateDeleteLocation(name);
  });
});
