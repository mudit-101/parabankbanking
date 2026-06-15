import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';
import { getCustomerAccounts } from '../../fixtures/apiFixture';
import { getCustomerId } from '../../utils/customerUtils';
import loginData from '../../utils/loginData.json';

test('scen-3 Create acc and validate api', async ({ page, request }) => {
    const loginPage = new LoginPage(page);
    const openAccountPage = new OpenAccountPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await openAccountPage.openNewAccountPage();
    await openAccountPage.selectSavingsAccount();
    await openAccountPage.clickOpenNewAccount();
    await openAccountPage.verifyAccountCreated();
    const customerId = await getCustomerId(
        request,
        loginData.validUser.username,
        loginData.validUser.password
    );
    console.log('Customer ID:', customerId);
    const accounts = await getCustomerAccounts(request,customerId!);
    expect(accounts).toContain(`<customerId>${customerId}</customerId>`);
    expect(accounts).toContain('<type>');
    expect(accounts).toContain('<balance>');
    console.log('Account creation validated successfully');
    await page.screenshot({path: 'screenshots/TS03.png'});
});