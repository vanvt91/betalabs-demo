export async function saveImageByElement(element: WebdriverIO.Element, tag: string) {
  return await browser.saveElement(element, tag);
}

export async function checkImageByElement(element: WebdriverIO.Element, tag: string) {
  return await browser.checkElement(element, tag);
}
