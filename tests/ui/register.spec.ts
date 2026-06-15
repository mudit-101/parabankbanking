import { test } from "@playwright/test";
import Register from "../../pages/registerPage";

test.skip('scen-1 Registration', async ({ page }) => {
 const register =new Register(page);
 await register.navigate();
 await register.registerUser();
 await register.screenshot();
});