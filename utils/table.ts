export default class Table {
  tableCssSelector: string;
  headerCellCss: string;
  dataRowCss: string;
  dataCellCss: string;
  nextPageButtonCss: string;
  getCellData: (dataCell: WebdriverIO.Element) => Promise<any>;

  constructor(options: any = {}) {
    this.tableCssSelector = options.tableCssSelector;
    this.headerCellCss = options.headerCellCss;
    this.dataRowCss = options.dataRowCss;
    this.dataCellCss = options.dataCellCss;
    this.getCellData =
      options.getCellData ||
      (async (dataCell: WebdriverIO.Element) => {
        return await dataCell.getText();
      });
    this.nextPageButtonCss = "[class=MuiTablePagination-actions] button[title='Next page']";
  }

  async getTableData() {
    const output = [];
    let nextPageButton: any;
    let isNextPageClickable = true;

    do {
      const table = await $(this.tableCssSelector);
      const headers = await table.$$(this.headerCellCss);
      const dataRows = await table.$$(this.dataRowCss);

      const headerTexts = await Promise.all(headers.map((header) => header.getText()));

      for (const row of dataRows) {
        const rowCells = await row.$$(this.dataCellCss);
        const rowData = {};
        for (let i = 0; i < rowCells.length; i++) {
          const cellData = await this.getCellData(rowCells[i]);
          rowData[headerTexts[i]] = cellData;
        }
        output.push(rowData);
      }
      nextPageButton = await $(this.nextPageButtonCss);
      isNextPageClickable = await nextPageButton.isClickable();

      if (isNextPageClickable) {
        await nextPageButton.click();
      }
    } while (isNextPageClickable);

    return output;
  }

  async getTableHeaders() {
    const table = await $(this.tableCssSelector);
    const headers = await table.$$(this.headerCellCss);
    const headerTexts = await Promise.all(headers.map((header) => header.getText()));
    return headerTexts;
  }
}
