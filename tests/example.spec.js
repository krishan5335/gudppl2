// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://next.hellomolly.io/signin');
 // await page.pause();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('udari+31@smashtaps.com');
  await page.getByLabel('Email').press('Alt+`');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Smash@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  // await page.goto('https://next.hellomolly.io/jobs/b10525cf-26a2-4678-ba33-4afbeed1bbf5/');
  // await page.goto('https://next.hellomolly.io/jobs/b10525cf-26a2-4678-ba33-4afbeed1bbf5');
  // await page.getByRole('link', { name: 'Add new job' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
