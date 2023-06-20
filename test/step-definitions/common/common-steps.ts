import { Given, When, Then } from "@wdio/cucumber-framework";
import { sleepInSeconds } from "../../../utils/time-utils.js";

Given(/^I go to demo web$/, async function () {
  await browser.url("/test-site-qa");
  await sleepInSeconds(4);
});
