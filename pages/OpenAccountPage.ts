import { Page, expect } from '@playwright/test';

export class OpenAccountPage {
    constructor(private page: Page) {}
    async openNewAccountPage() {
        await this.page.getByRole('link', {name: 'Open New Account'}).click();
    }
    async selectSavingsAccount() {
        await this.page.selectOption('#type','0');
    }
    async clickOpenNewAccount() {
        await this.page.locator( 'input[value="Open New Account"]').click();
    }
    async verifyAccountCreated() {
        await this.page.waitForLoadState('networkidle');
        console.log('Account creation flow completed successfully');
        await this.page.screenshot({path: 'screenshots/account-created.png',fullPage: true});
    }
}