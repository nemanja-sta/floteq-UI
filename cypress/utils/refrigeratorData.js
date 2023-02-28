import { faker } from "@faker-js/faker";

export class refrigeratorData {
  dvcName = faker.lorem.word();
  imei = faker.random.numeric(10);
  maxT = faker.datatype.number({ min: -3, max: 0, precision: 0.1 });
  minT = faker.datatype.number({ min: -15, max: -10, precision: 0.1 });
  tHeartBeat = faker.datatype.number({ min: 1, max: 99 });
  stByPwr = faker.datatype.number({ min: 1, max: 50 });
  cmpPwr = faker.datatype.number({ min: 100, max: 500 });
  desc = faker.random.words(10);
}
