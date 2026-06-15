import { test, expect } from '@playwright/test';
import loginData from '../../utils/loginData.json';
import { getCustomerId } from '../../utils/customerUtils';
test('scen-5 account list', async ({request}) => {
    const customerId =
        await getCustomerId(
            request,
            loginData.validUser.username,
            loginData.validUser.password
        );

    const response = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`
    );
    expect(response.status()).toBe(200);
    const responseBody =await response.text();
    expect(responseBody).toContain('<accounts>');
});