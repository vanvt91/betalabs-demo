import { Given, When, Then, DataTable } from "@wdio/cucumber-framework";
import { getProductList } from "../../../api/Product.js";

Given("I have retrivied all products", async function () {
  const productResponse = await getProductList();
  expect(productResponse.status).toBe(200);
  this.productList = productResponse.data;
});

Then("all products should be retrivied correctly", async function () {
  expect(this.productList.length).toEqual(100);
});

Then("response structure has the expected properties following", async function (dataTable: DataTable) {
  const expectedData = dataTable.hashes().map((item) => item.properties);
  const actualData = this.productList.map((item: {}) => Object.keys(item));
  const distinceActualData = [...new Set(actualData.flat(Infinity))];
  const result = distinceActualData.every((item) => expectedData.includes(item));
  expect(result).toBe(true);
});

Then("product can belong to multiple categories", async function () {
  const producttWithMultipleCate = this.productList.filter(
    (item: { categories: string[] }) => item.categories.length >= 2
  );
  expect(producttWithMultipleCate.length).toBeGreaterThan(1);
});
