/// <reference types="cypress" />

import { RefrigeratorsPage } from "../page-objects/refrigeratorsPage";
import { handleRefrigeratorData } from "../utils/data";

describe("refrigerator groups actions", () => {
  const refrigeratorPage = new RefrigeratorsPage();
  const dataAdd = handleRefrigeratorData();
  const dataEdit = handleRefrigeratorData();

  beforeEach(() => {
    cy.loginViaAPI();
  });

  it("should add group", () => {
    refrigeratorPage.addRefGroup(
      dataAdd.groupName,
      dataAdd.maxT,
      dataAdd.minT,
      dataAdd.tHeartBeat,
      dataAdd.desc
    );
    refrigeratorPage.validateAddedRefrigeratorGroup(dataAdd.groupName);
  });

  it("should edit group", () => {
    refrigeratorPage.editRefrigeratorGroup(
      dataEdit.groupName,
      dataEdit.maxT,
      dataEdit.minT,
      dataEdit.tHeartBeat,
      dataEdit.desc
    );
    refrigeratorPage.validateEditedRefrigeratorGroup(dataEdit.groupName);
  });

  it("should delete group", () => {
    refrigeratorPage.deleteRefrigeratorGroup();
    refrigeratorPage.validateDeletedRefrigeratorGroup(dataEdit.groupName);
  });
});
