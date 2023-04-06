const { chromium } = require('playwright');
import 'setimmediate';

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Home' }).click();
  await page.locator('form').click();
  await page.locator('form').click();
  await page.getByRole('combobox').selectOption('Africa');
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('afreedi');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('afree@asd.in');
  await page.getByPlaceholder('Travellers').click();
  await page.getByPlaceholder('Travellers').fill('34');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForNavigation();
  await page.getByRole('button', { name: 'View' }).click();
  await page.waitForNavigation();

  // ---------------------
  try {
    await context.close();
    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
