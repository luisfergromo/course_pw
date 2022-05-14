import { test, expect, Page } from '@playwright/test';

test.describe("Validate the notification signup process. Need Thanks shows", () => {
    test('Wize 1', async ({ page }) => {
        await page.goto('https://academy.workshop-qa.website.wize.mx/');
        await page.locator('text=Select Topics').click();
        await page.locator('text=All Topics').click();
        await page.locator('text=Select Locations').click();
        await page.locator('text=All Locations').click();
        await page.locator('text=Select Formats').click();
        await page.locator('text=All Formats').click();
        await page.locator('[placeholder="Email"]').click();
        await page.locator('[placeholder="Email"]').fill('ana.lopez.devops-page@wizeline.com');
        await page.locator('button:has-text("Sign up")').click();
        expect(page.locator('text=There was an error. Please try again!'))
    });
    test('Wize 2', async ({ page }) => {
        await page.goto("https://academy.workshop-qa.website.wize.mx/women-in-tech/")
        await page.locator('button:has-text("Accept All Cookies")').click();
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
        await expect(page).toHaveScreenshot();

    });
    test("Wize 3", async ({ page }) => {
        await page.goto('https://academy.workshop-qa.website.wize.mx/');
        await page.locator('text=Follow Us Subscribe to >> use').nth(3).click();
        await expect(page).toHaveURL('https://www.youtube.com/channel/UCPGzT4wecuWM0BH9mPiulXg');
        expect(page.locator('text=Wizeline'))
    })
    test("Wize 4", async ({ page }) => {
        await page.goto('https://workshop-qa.website.wize.mx/');
        expect(page.locator('text=Let\'s get started. Tell us how we can help.'))
        await page.locator('.stepped-form__option').first().click();
        await page.locator('div:nth-child(2) > .stepped-form__options > button').first().click();
        await page.locator('div:nth-child(3) > .stepped-form__options > button').first().click();
        await page.locator('div:nth-child(4) > .stepped-form__options > button').first().click();
        await page.locator('#mktoForm_1383 div:has-text("*First Name:")').first().click();
        await page.locator('[placeholder="First Name"]').fill('Ana');
        await page.locator('[placeholder="First Name"]').press('Tab');
        await page.locator('[placeholder="Last Name"]').fill('Lopez');
        await page.locator('[placeholder="Last Name"]').press('Tab');
        await page.locator('[placeholder="Email Address"]').fill('ana.lopez.devops-page@wizeline.com');
        await page.locator('[placeholder="Email Address"]').press('Tab');
        await page.locator('[placeholder="Company"]').fill('Wizeline');
        await page.locator('[placeholder="Job Title"]').click();
        await page.locator('[placeholder="Job Title"]').fill('Devops');
        await page.locator('select[name="Country"]').selectOption('Mexico');
        await page.locator('button:has-text("Build with Wizeline")').click();
        expect(page.locator('Thank you'));
    })
    test('Wize 5', async ({ page }) => {
        await page.goto('https://academy.workshop-qa.website.wize.mx/');
        await page.locator('button:has-text("Accept All Cookies")').click();
        /* validate tje screenshot */
        await expect(page).toHaveScreenshot([animation:disabled]);
    })
});