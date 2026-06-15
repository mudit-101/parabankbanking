import { test, expect } from '@playwright/test';

test('scen-11 invalid customer api',async ({request}) => {
        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/customers/999999/accounts'
        );
        const body =await response.text();
        console.log(body);
        expect(body).toBeTruthy();
    }
);