import { test, expect } from '@playwright/test';
import loginData from '../../utils/loginData.json';
import { getCustomerId } from '../../utils/customerUtils';
test('Scen-15 get account api', async ({request}) => {
    const customerId =
        await getCustomerId(
            request,
            loginData.validUser.username,
            loginData.validUser.password
        );
    console.log('Customer ID:', customerId);
    const response = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    console.log(responseBody);
    expect(responseBody).not.toBeNull();
    console.log(await response.text());

});