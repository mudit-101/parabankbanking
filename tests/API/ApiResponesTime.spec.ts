import {test,expect} from "@playwright/test";
import loginData from '../../utils/loginData.json';
import { getCustomerId } from '../../utils/customerUtils';
test('scen-14 Api response time', async ({request}) =>{
     const customerId =
        await getCustomerId(
            request,
            loginData.validUser.username,
            loginData.validUser.password
        );

    console.log('Customer ID:', customerId);
    let startTime =Date.now();
    let r1 = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    let endTime = Date.now();
    let responseTime = endTime - startTime;
    console.log("Response Time :",responseTime );
    expect(r1.status()).toBe(200);
    expect(responseTime).toBeLessThan(2000);
});