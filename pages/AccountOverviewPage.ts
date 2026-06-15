import { Page, expect } from '@playwright/test';

export class AccountOverviewPage {
    constructor(private page: Page) {}
    async navigateToAccountsOverview() {
        await this.page.getByRole('link', {name: 'Accounts Overview'}).click();
    }
    async verifyAccountsOverviewDisplayed() {
        await expect(this.page.getByRole('heading', {name: 'Accounts Overview'})).toBeVisible();
    }
    async captureOverviewScreenshot() {
        await this.page.screenshot({path: 'screenshots/account-overview.png',fullPage: true});
    }
}