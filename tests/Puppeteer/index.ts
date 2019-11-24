const puppeteer = require('puppeteer');
//@ts-ignore
const url = 'http://127.0.0.1';
const viewportWidth = 1920;
const viewportHeight = 1080;


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({
    width: viewportWidth,
    height: viewportHeight,
  });
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // const bodyHandle = await page.$('body');
  // const { width, height } = await bodyHandle.boundingBox();

  // await page.screenshot({
  //   path: 'tests/Puppeteer/screenshots/example2.png',
  //   clip: {
  //     x: 0,
  //     y: 0,
  //     width,
  //     height,
  //   },
  //   type: 'png',
  // });

  // await page.screenshot({
    // path: 'tests/Puppeteer/screenshots/example2.png',
  //   fullPage: true,
  // })
  const bodyHandle = await page.$('body');
  const { width, height } = await bodyHandle.boundingBox();
  await page.screenshot({
    clip: {
      x: 0,
      y: 0,
      width,
      height
    },
    type: 'png',
    path: 'tests/Puppeteer/screenshots/example2.png',
  });
  // console.log(screenshot);
  await bodyHandle.dispose();
  // await fullPageScreenshot(page, { path: 'tests/Puppeteer/screenshots/example2.png' });
  // await bodyHandle.dispose();

  await browser.close();
})();
