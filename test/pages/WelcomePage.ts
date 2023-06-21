import { sleepInSeconds } from "../../utils/time-utils.js";
import { checkImageByElement, saveImageByElement } from "../../WebElements.js";
import PageElements from "./elements/PageElements.js";

class WelcomePage extends PageElements {
  public async compareMainContentImage(tag: string) {
    const mainContentElement = await this.mainContent;
    await saveImageByElement(mainContentElement, tag);
    const result = await checkImageByElement(mainContentElement, tag);
    return result;
  }

  public async clickProductPageLink() {
    await this.productPageLinkElement.click();
    await sleepInSeconds(3);
  }
}
const welcomePage = new WelcomePage();
export default welcomePage;
