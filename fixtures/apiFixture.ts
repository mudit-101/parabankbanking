import { APIRequestContext, expect } from '@playwright/test';

export async function getCustomerAccounts(
    request: APIRequestContext,
    customerId: string
) {

    const response = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`
    );

    expect(response.status()).toBe(200);

    return await response.text();
}