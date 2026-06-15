import { APIRequestContext } from '@playwright/test';

export async function getAccountDetails(
    request: APIRequestContext,
    accountId: string
) {
    const response = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
    );

    return await response.text();
}