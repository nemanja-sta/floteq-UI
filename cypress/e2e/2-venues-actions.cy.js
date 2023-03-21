/// <reference types="cypress" />

import { VenuesPage } from "../page-objects/venuesPage";
import { handleVenuesData } from "../utils/data";

describe("Venues actions", () => {
  beforeEach(() => {
    cy.loginViaAPI();
  });
  const venuesPage = new VenuesPage();
  const dataAdd = handleVenuesData();
  const dataEdit = handleVenuesData();

  it("should add venue", () => {
    venuesPage.addNewVenue(
      dataAdd.name,
      dataAdd.address,
      dataAdd.latitude,
      dataAdd.longitude
    );
    venuesPage.validateAddedVenue(dataAdd.name);
  });

  it("should edit venue", () => {
    venuesPage.editVenue(
      dataEdit.name,
      dataEdit.address,
      dataEdit.latitude,
      dataEdit.longitude
    );
    venuesPage.validateEditedVenue(dataEdit.name);
  });

  it("should delete venue", () => {
    venuesPage.deleteVenue();
    venuesPage.validateDeletedVenue(dataEdit.name);
  });
});
