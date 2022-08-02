import { faker } from "@faker-js/faker";

export function genData(colLength: number) {
  const rowLengths = Math.ceil(Math.random() * 200) + 200;
  const data = [];
  for (let i = 0; i < rowLengths; i++) {
    const record = genRecord(colLength);
    record.id = i;

    data.push(record);
  }

  return data;
}

function genRecord(length: number): any {
  const cellData = faker.helpers.uniqueArray(
    () => faker.lorem.words(parseInt(faker.random.numeric(1))),
    length
  );

  return cellData.reduce((prev, current, index) => {
    prev[`col-${index}`] = current;

    return prev;
  }, {});
}
