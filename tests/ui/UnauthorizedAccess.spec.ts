import { test, expect } from '@playwright/test';

test('scen-10 acess without login',async ({page}) => {
        await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        await expect(page).toHaveURL(/parabank/);
        await expect(page.locator('#loginPanel')).toBeVisible();
    }
);