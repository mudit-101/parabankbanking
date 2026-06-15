import { Page, expect } from '@playwright/test';

export class TransactionPage {
    constructor(private page: Page) {}
    async navigateToTransferFunds() {
        await this.page.getByRole('link', { name: 'Transfer Funds'}).click();
    }
    async verifyTransferPageLoaded() {
        await expect( this.page.getByRole('heading', {name: 'Transfer Funds' })).toBeVisible();
    }
    async transferAmount(amount: string) {
        await this.page.locator('#amount').fill(amount);
        await this.page.locator('#fromAccountId') .selectOption({ index: 1 });
        const count = await this.page .locator('#toAccountId option') .count();
        if (count > 1) {
            await this.page.locator('#toAccountId').selectOption({ index: 2 });
        } else{
            await this.page.locator('#toAccountId').selectOption({ index: 1 });
        }
        await this.page.locator( 'input[value="Transfer"]').click();
    }
    async verifyTransferMessage() {
        await expect( this.page.locator('body')).toContainText('Transfer Complete');
    }
}