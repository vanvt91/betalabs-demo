import { When, Then, DataTable } from "@wdio/cucumber-framework";
import productPage from "../../pages/ProductPage.js";
import welcomePage from "../../pages/WelcomePage.js";

When("I navigate to product page", async function () {
  await welcomePage.clickProductPageLink();
});

When(/^I filter product by information following$/, async function (dataTable: DataTable) {
  this.data = dataTable.rowsHash();
  await productPage.openSortFilterMenu(this.data.headerTitle);
  await productPage.selectSortFilterItem(this.data.type);
  await productPage.selectColumn(this.data.headerTitle);
  await productPage.selectOperator(this.data.operator);
  await productPage.inputFilterData(this.data.filterData);
});

When(/^I sort product by information following$/, async function (dataTable: DataTable) {
  this.data = dataTable.rowsHash();
  await productPage.openSortFilterMenu(this.data.headerTitle);
  await productPage.selectSortFilterItem(this.data.type);
});

When("I store number of products", async function () {
  this.totalProduct = await productPage.getTotalProduct();
});

When("I retrivie data from table", async function () {
  this.productList = await productPage.getProductDataTable();
});

Then("number of product returned the correct value", async function () {
  expect(this.totalProduct).toEqual(this.productList.length);
});

Then("all products listed in the result have correct category in the categories field", async function () {
  const listCategories = this.productList.map((item: { Categories: string }) => item.Categories);
  const result = listCategories.every((item: string) => item.includes(this.data.filterData));
  expect(result).toBe(true);
});

Then("every product has the expected properties following", async function (dataTable: DataTable) {
  const expectedHeaders: string[] = dataTable.hashes().map((item) => item.header);
  const actualHeaders = await productPage.getTableHeaderText();
  const result =
    expectedHeaders.length === actualHeaders.length &&
    expectedHeaders.every((header, index) => header.toLocaleLowerCase() === actualHeaders[index].toLowerCase());
  expect(result).toBe(true);
});

Then("none of the products have multiple occurrences of the same category", async function () {
  const productsWithMultiCate: Record<string, any>[] = this.productList.filter(
    (product: { Categories: string }) => product.Categories.split(",").length > 1
  );
  const duplicateCategoriesObject = productsWithMultiCate.filter((product) => {
    const categories: string[] = product.Categories.split(",");
    return categories.some((category, categoryIndex) => {
      return categories.indexOf(category) !== categoryIndex;
    });
  });
  expect(duplicateCategoriesObject.length).toBe(0);
});

Then("every product belongs to at least 1 of 4 categories", async function () {
  const totalProduct = this.productList.length;
  const listProductWithoutCategory = this.productList.filter(
    (product: { Categories: string }) => product.Categories.split(",").length === 0
  );
  const listProductHasCategory = this.productList.filter(
    (product: { Categories: string }) => product.Categories.split(",").length > 0
  );

  expect(listProductWithoutCategory.length).toBe(0);
  expect(listProductHasCategory.length).toEqual(totalProduct);
});

Then("product table show as descending order by price", async function () {
  const listPriceAfterSort: number[] = this.productList.map((product: { Price: string }) =>
    Number(product.Price.replace(/,/g, ""))
  );
  const sortedList = listPriceAfterSort.sort((a, b) => b - a);
  expect(JSON.stringify(sortedList)).toEqual(JSON.stringify(listPriceAfterSort));
});
