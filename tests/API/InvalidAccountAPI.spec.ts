import { test, expect } from '@playwright/test';

test('scen-12 invalid api',async ({request}) => {
        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/999999'
        );
        const body = await response.text();
        console.log(body);
        expect(body).toContain('Could not find account');
    }
);