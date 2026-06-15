import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';
import loginData from '../../utils/loginData.json';
test('scen -2 Create new acc', async ({page}) => {
    const loginPage = new LoginPage(page);
    const openAccountPage =new OpenAccountPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await expect(page).toHaveURL(/overview.htm/);
    await openAccountPage.openNewAccountPage();
    await expect(page.locator('[id="fromAccountId"]')).not.toBeEmpty();
    await openAccountPage.selectSavingsAccount();
    await openAccountPage.clickOpenNewAccount();
    await openAccountPage.verifyAccountCreated();

});