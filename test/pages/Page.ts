export default class Page {
  public async open(path?: string) {
    if (path === "") {
      return await browser.url("/");
    } else {
      return await browser.url(path);
    }
  }

  public async refeshPage() {
    return await browser.refresh();
  }

  public async getCurrentUrl() {
    const currentUrl = await browser.getUrl();
    return currentUrl;
  }
}
