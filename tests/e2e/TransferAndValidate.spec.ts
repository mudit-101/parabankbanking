import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';
import { getAccountDetails } from '../../fixtures/accountFixture';
import loginData from '../../utils/loginData.json';

test('scen-7 and scen-8 validate transfer money', async ({ page, request }) => {
    const loginPage = new LoginPage(page);
    const transferFundsPage = new TransferFundsPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await expect(page).toHaveURL(/overview.htm/);
    await transferFundsPage.navigateToTransferFundsPage();
    const accounts =await transferFundsPage.getSelectedAccounts();
    const fromAccount =accounts.fromAccount;
    const toAccount =accounts.toAccount;
    console.log('Validating Account:',fromAccount);
    console.log('Fetching balance before transfer');

    const beforeTransfer =await getAccountDetails(request,fromAccount);
    console.log('Before Transfer:',beforeTransfer);
    await transferFundsPage.transferFunds('',fromAccount,toAccount);
    await transferFundsPage.verifyTransferCompleted();
    await page.waitForTimeout(3000);
    console.log('Fetching balance after transfer');

    const afterTransfer =await getAccountDetails(request,fromAccount);
    console.log('After Transfer:',afterTransfer);
    expect(afterTransfer).toContain('<account>');
    expect(afterTransfer).toContain('<balance>');
    expect(afterTransfer).not.toContain('Could not find account');

    if (beforeTransfer !== afterTransfer) {
        console.log('Balance updated successfully');
    } else {
        console.log('Balance did not change');
    }
    await page.screenshot({path: 'screenshots/FR07_FR08.png'});
});