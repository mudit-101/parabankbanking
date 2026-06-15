import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';
import loginData from '../../utils/loginData.json';
test('scen-6 Account Overview Validation', async ({page}) => {
    const loginPage = new LoginPage(page);
    const accountOverviewPage =new AccountOverviewPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await expect(page).toHaveURL(/overview.htm/);
    await accountOverviewPage.navigateToAccountsOverview();
    await accountOverviewPage.verifyAccountsOverviewDisplayed();
    await accountOverviewPage.captureOverviewScreenshot();
    console.log('Accounts Overview Page Verified Successfully');
});