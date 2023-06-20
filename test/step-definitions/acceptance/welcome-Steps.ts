import { When, Then } from "@wdio/cucumber-framework";
import { retry } from "../../../utils/retry.js";
import welcomePage from "../../pages/WelcomePage.js";

When("I click on product page link", async function () {
  await welcomePage.clickProductPageLink();
});

Then("I will be navigated to product page", async function () {
  await retry(async () => {
    const result = await welcomePage.getCurrentUrl();
    expect(result).toContain("/products");
  });
});

Then("welcome page content should be the same", async function () {
  const result = await welcomePage.compareMainContentImage("welcomePage");
  expect(result).toEqual(0);
});
