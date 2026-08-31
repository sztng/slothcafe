/**
 * Client-side newsletter signup via the Storefront API.
 *
 * customerCreate is built for full account creation, so it requires a
 * password even for a marketing-only signup — we generate a throwaway
 * one nobody will ever use. The record only exists to carry
 * acceptsMarketing: true into Shopify Admin.
 */
const API_VERSION = '2025-04';

export async function subscribeToNewsletter({ domain, token, email }) {
  const res = await fetch(`https://${domain}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({
      query: /* GraphQL */ `
        mutation SubscribeNewsletter($input: CustomerCreateInput!) {
          customerCreate(input: $input) {
            customer {
              id
            }
            customerUserErrors {
              code
              message
            }
          }
        }
      `,
      variables: {
        input: { email, password: crypto.randomUUID(), acceptsMarketing: true },
      },
    }),
  });

  if (!res.ok) throw new Error(`Shopify request failed: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));

  const errors = json.data.customerCreate.customerUserErrors;
  const alreadySubscribed = errors.some((e) => e.code === 'TAKEN');
  if (errors.length && !alreadySubscribed) {
    throw new Error(errors.map((e) => e.message).join(', '));
  }

  return { alreadySubscribed };
}
