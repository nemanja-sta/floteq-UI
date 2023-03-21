/// <reference types="cypress" />

import { RefrigeratorsPage } from "../page-objects/refrigeratorsPage";
import { handleRefrigeratorData } from "../utils/data";

describe("refrigerators actions", () => {
  const refrigeratorPage = new RefrigeratorsPage();
  const dataAdd = handleRefrigeratorData();
  const dataEdit = handleRefrigeratorData();

  beforeEach(() => {
    cy.loginViaAPI();
  });

  it("should add refrigerator", () => {
    refrigeratorPage.addNewRefrigerator(
      dataAdd.dvcName,
      dataAdd.imei,
      dataAdd.maxT,
      dataAdd.minT,
      dataAdd.tHeartBeat,
      dataAdd.stByPwr,
      dataAdd.cmpPwr,
      dataAdd.desc
    );
    refrigeratorPage.validateAddedRefrigerator(dataAdd.imei);
  });

  it("should edit refrigerator", () => {
    refrigeratorPage.editRefrigerator(
      dataEdit.dvcName,
      dataEdit.imei,
      dataEdit.maxT,
      dataEdit.minT,
      dataEdit.tHeartBeat,
      dataEdit.stByPwr,
      dataEdit.cmpPwr,
      dataEdit.desc
    );
    refrigeratorPage.validateEditedRefrigerator(dataEdit.imei);
  });

  it("should delete refrigerator", () => {
    refrigeratorPage.deleteRefrigerator();
    refrigeratorPage.validateDeletedRefrigerator(dataEdit.dvcName);
  });
});
