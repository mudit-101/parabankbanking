import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TransactionPage } from '../../pages/TransactionPage';
import loginData from '../../utils/loginData.json';
test('scen-6 Validate transfer msg',async ({page}) => {
        const loginPage = new LoginPage(page);
        const transactionPage =new TransactionPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        await transactionPage.navigateToTransferFunds();
        await transactionPage.verifyTransferPageLoaded();
        await transactionPage.transferAmount('100');
        await transactionPage .verifyTransferMessage();
    }
);