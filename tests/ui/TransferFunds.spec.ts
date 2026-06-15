import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';
import loginData from '../../utils/loginData.json';

test('scen-6 transfer money',async ({ page }) => {
        const loginPage =new LoginPage(page);
        const transferFundsPage =new TransferFundsPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        await expect(page).toHaveURL(/overview.htm/);
        await transferFundsPage.navigateToTransferFundsPage();
        const accounts = await transferFundsPage.getSelectedAccounts();
        await transferFundsPage.transferFunds(
            '',
            accounts.fromAccount,
            accounts.toAccount
        );
        await transferFundsPage.verifyTransferCompleted();
    }
);