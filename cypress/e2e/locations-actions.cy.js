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

  it("should add location", () => {
    locationPage.navigate();
    locationPage.addLocation(name, adress);
    locationPage.validateAddedLocation(name);
  });

  it("should edit location", () => {
    locationPage.navigate();
    locationPage.deleteLocation();
    locationPage.validateDeleteLocation(name);
  });
});
