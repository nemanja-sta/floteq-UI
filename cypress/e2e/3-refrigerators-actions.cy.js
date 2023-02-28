/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { RefrigeratorsPage } from "../page-objects/refrigeratorsPage";
import { refrigeratorData } from "../utils/refrigeratorData";

describe("refrigerators actions", () => {
  const refrigeratorPage = new RefrigeratorsPage();

  let dvcName = faker.lorem.word();
  let imei = faker.random.numeric(10);
  let maxT = faker.datatype.number({ min: -3, max: 0, precision: 0.1 });
  let minT = faker.datatype.number({ min: -15, max: -10, precision: 0.1 });
  let tHeartBeat = faker.datatype.number({ min: 1, max: 99 });
  let stByPwr = faker.datatype.number({ min: 1, max: 50 });
  let cmpPwr = faker.datatype.number({ min: 100, max: 500 });
  let desc = faker.random.words(10);

  let newdvcName = faker.lorem.word();
  let newimei = faker.random.numeric(10);
  let newmaxT = faker.datatype.number({ min: -3, max: 0, precision: 0.1 });
  let newminT = faker.datatype.number({ min: -15, max: -10, precision: 0.1 });
  let newtHeartBeat = faker.datatype.number({ min: 1, max: 99 });
  let newstByPwr = faker.datatype.number({ min: 1, max: 50 });
  let newcmpPwr = faker.datatype.number({ min: 100, max: 500 });
  let newdesc = faker.random.words(10);

  beforeEach(() => {
    cy.loginViaAPI();
  });

  it("should create refrigerator", () => {
    refrigeratorPage.addNewRefrigerator(
      dvcName,
      imei,
      maxT,
      minT,
      tHeartBeat,
      stByPwr,
      cmpPwr,
      desc
    );
    refrigeratorPage.validateAddedRefrigerator(dvcName);
  });

  it("should edit refrigerator", () => {
    refrigeratorPage.editRefrigerator(
      newdvcName,
      newimei,
      newmaxT,
      newminT,
      newtHeartBeat,
      newstByPwr,
      newcmpPwr,
      newdesc
    );
    refrigeratorPage.validateEditedRefrigerator(newdvcName);
  });

  it("should delete refrigerator", () => {
    refrigeratorPage.deleteRefrigerator();
    refrigeratorPage.validateDeletedRefrigerator(newdvcName);
  });
});
