import { test, expect, Page } from '@playwright/test';

test.describe("WTD DEMO",()=>{
    test("Saucedemo login feature", async({page})=>{
        await page.goto("https://www.saucedemo.com")
        await page.locator('#user-name').fill("standard_user")
        await page.locator('#password').fill("secret_sauce")
        await page.locator("#login-button").click()

        expect(await page.locator('.title').innerText()).toContain("PRODUCTS")
    })
});
test('Saucedemo', async ({ page }) => {
  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');
  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();
  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');
  // Press Tab
  await page.locator('[data-test="username"]').press('Tab');
  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');
  // Press Enter
  await page.locator('[data-test="password"]').press('Enter');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
  // Double click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').dblclick();
});