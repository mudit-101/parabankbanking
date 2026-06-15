import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import loginData from '../../utils/loginData.json';
test('scen-9 empty login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        loginData.emptyUser.username,
        loginData.emptyUser.password
    );

    await expect( page.locator('.error')).toContainText('Please enter a username and password.');
});