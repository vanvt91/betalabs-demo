import Table from "../../utils/table.js";
import { sleepInSeconds } from "../../utils/time-utils.js";
import PageElements from "./elements/PageElements.js";

class ProductPage extends PageElements {
  public async getProductDataTable() {
    await sleepInSeconds(3);
    const tableOptions = this.tableOptions;
    const table = new Table(tableOptions);
    const data = await table.getTableData();
    return data;
  }

  public async openSortFilterMenu(headerTitle: string) {
    await sleepInSeconds(3);
    const headerTitleElement = await this.headerTitleElement(headerTitle);
    await headerTitleElement.moveTo();
    await headerTitleElement.click();
  }

  public async selectSortFilterItem(item: string) {
    await sleepInSeconds(3);
    const menuItemsElements = await this.sortFilterMenuListElement;
    for (let i = 0; i < menuItemsElements.length; i++) {
      const menuItemText = await menuItemsElements[i].getText();
      if (menuItemText === item) {
        await menuItemsElements[i].click();
        break;
      }
    }
  }

  public async selectColumn(column: string) {
    await this.selectColumnElement.selectByVisibleText(column);
  }

  public async selectOperator(operator: string) {
    await this.selectOperatorElement.selectByVisibleText(operator);
  }

  public async getTotalProduct() {
    await sleepInSeconds(3);
    const text = await this.totalProductElement.getText();
    const totalProduct = text.split("of")[1];
    return Number(totalProduct);
  }

  public async getTableHeaderText() {
    const tableOptions = this.tableOptions;
    const table = new Table(tableOptions);
    const headerTexts = await table.getTableHeaders();
    return headerTexts;
  }

  public async inputFilterData(data: string) {
    await this.inputFilterElement.setValue(data);
  }
}
const productPage = new ProductPage();
export default productPage;
