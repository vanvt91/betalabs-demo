export async function sleepInSeconds(seconds: number) {
  return await browser.pause(seconds * 1000);
}
