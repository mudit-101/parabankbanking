import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';
import loginData from '../../utils/loginData.json';
const accountTypes = [
    'CHECKING',
    'SAVINGS'
];

for (const type of accountTypes) {
    test(`scen - 4 Create ${type} Account`,async ({ page }) => {
            const loginPage =new LoginPage(page);
            const openAccountPage = new OpenAccountPage(page);
            await loginPage.navigateToLoginPage();
            await loginPage.login(
                loginData.validUser.username,
                loginData.validUser.password
            );
            await openAccountPage.openNewAccountPage();
            if (type === 'SAVINGS') {
                await page.locator('#type').selectOption('1');
            } else {
                await page.locator('#type').selectOption('0');
            }
            await openAccountPage.clickOpenNewAccount();
        }
    );
}