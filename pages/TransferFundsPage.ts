import { Page, expect } from '@playwright/test';

export class TransferFundsPage {
    constructor(private page: Page) {}
    async navigateToTransferFundsPage() {
        await this.page.getByRole('link', {name: 'Transfer Funds'}).click();
        await expect(this.page.getByRole('heading', {name: 'Transfer Funds'})).toBeVisible();
    }
    async getSelectedAccounts() {
        await this.page.waitForFunction(() => {
            return document.querySelectorAll(
                '#fromAccountId option'
            ).length > 1;
        });
        const accounts = await this.page
            .locator('#fromAccountId option')
            .evaluateAll(options =>
                options.map(
                    option =>
                        (option as HTMLOptionElement).value
                )
            );
        console.log('Available Accounts:',accounts);
        return {
            fromAccount: accounts[0],
            toAccount: accounts[1]
        };
    }
    async transferFunds(
        amount: string,
        fromAccount: string,
        toAccount: string
    ) {
        await this.page.locator('#amount').fill(amount);
        await this.page.locator('#fromAccountId').selectOption(fromAccount);
        await this.page.locator('#toAccountId').selectOption(toAccount);
        console.log(`From Account: ${fromAccount}`);
        console.log(`To Account: ${toAccount}`);
        await this.page.locator('input[value="Transfer"]').click();
        console.log(`Transferred Amount: ${amount}`);
    }
    async verifyTransferCompleted() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.locator('#showResult')).toContainText('Transfer Complete');
        console.log('Transfer completed successfully');
        await this.page.screenshot({path: 'screenshots/transfer-completed.png',fullPage: true});
    }
}