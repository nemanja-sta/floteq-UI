/// <reference types="cypress" />

import { CompaniesPage } from "../page-objects/companiesPage";
import { handleCompaniesData } from "../utils/data";

describe("refrigerators actions", () => {
  const companiesPage = new CompaniesPage();
  const dataAdd = handleCompaniesData();
  const dataEdit = handleCompaniesData();

  beforeEach(() => {
    cy.loginViaAPI();
  });

  it("should add new company", () => {
    companiesPage.addNewCompany(
      dataAdd.name,
      dataAdd.address,
      dataAdd.bsnNmb,
      dataAdd.email,
      dataAdd.adminEmail
    );
    companiesPage.validateAddedCompany(dataAdd.name);
  });

  it("should edit company", () => {
    companiesPage.editCompany(
      dataEdit.name,
      dataEdit.address,
      dataEdit.bsnNmb,
      dataEdit.email
    );
    companiesPage.validateEditedCompany(dataEdit.name);
  });

  it("should delete company", () => {
    companiesPage.deleteCompany();
    companiesPage.validateDeletedCompany(dataAdd.name);
  });
});
