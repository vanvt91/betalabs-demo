import Page from "../Page.js";
export default class PageElements extends Page {
  public get mainContent() {
    return $("[id=main-content]");
  }

  public get productPageLinkElement() {
    return $("[data-testid=main-instruction-products-link]");
  }

  public get tableOptions() {
    const tableOptions = {
      tableCssSelector: "[class=MuiDataGrid-main]",
      headerCellCss: "[class=MuiDataGrid-columnHeaderTitleContainer]",
      dataRowCss: "[class=MuiDataGrid-row]",
      dataCellCss: `[class=MuiDataGrid-renderingZone] [class*="MuiDataGrid-cell MuiDataGrid-cell--text"]`,
    };
    return tableOptions;
  }

  public headerTitleElement(headerText: string) {
    return $(`//*[text() [contains(., "${headerText}")]]/parent::div/following-sibling::div/button`);
  }

  public get sortFilterMenuListElement() {
    return $$("[class*=MuiDataGrid-gridMenuList] li");
  }

  public get selectOperatorElement() {
    return $$(`//*[text() [contains(., "Operators")]]/parent::div//select`)[1];
  }

  public get selectColumnElement() {
    return $(`//*[text() [contains(., "Columns")]]/parent::div//select`);
  }

  public get inputFilterElement() {
    return $("input[placeholder='Filter value']");
  }

  public get totalProductElement() {
    return $("[class*=MuiTablePagination-caption]");
  }
}
