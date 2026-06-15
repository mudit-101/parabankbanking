import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import loginData from '../../utils/loginData.json';
test('scen-9 invalid login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );
    await expect(page.locator('.error')).toContainText('The username and password could not be verified.');
});