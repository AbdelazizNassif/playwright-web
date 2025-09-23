import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByRole('textbox', { name: 'Username' }).fill("standard_user");
  await page.getByRole('textbox', { name: 'Password' }).fill("secret_sauce");
  await page.getByRole('button', { name: 'LOGIN' }).click() ;

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  await  page.waitForTimeout(20000);
});

// test('get started link', async ({ page }) => {
//   // await page.goto('https://playwright.dev/');

//   // // Click the get started link.
//   // await page.getByRole('link', { name: 'Get started' }).click();

//   // // Expects page to have a heading with the name of Installation.
//   // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//     await  page.waitForTimeout(10000);

// });
