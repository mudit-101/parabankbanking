import { APIRequestContext } from '@playwright/test';

export async function getCustomerId(
    request: APIRequestContext,
    username: string,
    password: string
) {

    const response = await request.get(
        `https://parabank.parasoft.com/parabank/services/bank/login/${username}/${password}`
    );

    const body = await response.text();

    const customerId =
        body.match(/<id>(\d+)<\/id>/)?.[1];

    return customerId;
}