export async function retry(functionToRun: Function, retryCount: number = 50) {
  let tryCount = 0;
  while (tryCount <= retryCount) {
    try {
      await functionToRun();
      tryCount = retryCount + 1;
    } catch (err) {
      tryCount++;
      if (tryCount > retryCount) {
        throw err;
      }

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }
  }
}
