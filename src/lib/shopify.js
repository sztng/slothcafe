/**
 * Shopify data layer — MOCK MODE.
 *
 * Every function returns data shaped exactly like Shopify's Storefront API
 * (GraphQL) responses, so when the store credentials arrive you only edit
 * THIS file: flip USE_MOCKS to false and fill in the two constants below.
 * No component needs to change.
 *
 * To go live:
 *   1. Get the store domain, e.g. 'sloth-and-messenger.myshopify.com'
 *   2. In Shopify admin: Settings → Apps → Develop apps → create one with
 *      Storefront API access, copy the PUBLIC Storefront access token
 *      (this token is safe to use at build time; it's read-only for
 *      published products).
 *   3. Set the values below (or via env vars) and set USE_MOCKS = false.
 */

const USE_MOCKS = true;

const SHOPIFY_DOMAIN = import.meta.env.SHOPIFY_DOMAIN ?? 'your-store.myshopify.com';
const STOREFRONT_TOKEN = import.meta.env.SHOPIFY_STOREFRONT_TOKEN ?? '';
const API_VERSION = '2025-04';

/* ------------------------------------------------------------------ */
/* Mock data — mirrors the Storefront API response shape               */
/* ------------------------------------------------------------------ */

const MOCK_PRODUCTS = [
  {
    id: 'gid://shopify/Product/1001',
    handle: 'ethiopia-yirgacheffe-konga',
    title: 'Ethiopia Yirgacheffe Konga',
    description:
      'Floral and tea-like with bergamot and dark fruit. Roasted in-house weekly.',
    featuredImage: {
      url: '/images/product-ethiopia.jpg',
      altText: 'Bag of Ethiopia Yirgacheffe Konga beans',
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/2001',
          title: '250g / Whole bean',
          availableForSale: true,
          price: { amount: '24.00', currencyCode: 'USD' },
        },
      ],
    },
  },
  {
    id: 'gid://shopify/Product/1002',
    handle: 'brazil-carmo-de-minas',
    title: 'Brazil Carmo de Minas',
    description:
      'Round and chocolate-leaning with hazelnut sweetness. An easy daily cup.',
    featuredImage: {
      url: '/images/product-brazil.jpg',
      altText: 'Bag of Brazil Carmo de Minas beans',
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/2002',
          title: '250g / Whole bean',
          availableForSale: true,
          price: { amount: '22.00', currencyCode: 'USD' },
        },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Public API — components import ONLY these functions                 */
/* ------------------------------------------------------------------ */

/** Fetch up to `first` products. */
export async function getProducts(first = 12) {
  if (USE_MOCKS) return MOCK_PRODUCTS.slice(0, first);

  const data = await storefront(
    /* GraphQL */ `
      query Products($first: Int!) {
        products(first: $first) {
          nodes {
            id
            handle
            title
            description
            featuredImage { url altText }
            variants(first: 5) {
              nodes {
                id
                title
                availableForSale
                price { amount currencyCode }
              }
            }
          }
        }
      }
    `,
    { first }
  );
  return data.products.nodes;
}

/** Fetch one product by its URL handle. */
export async function getProduct(handle) {
  if (USE_MOCKS) return MOCK_PRODUCTS.find((p) => p.handle === handle) ?? null;

  const data = await storefront(
    /* GraphQL */ `
      query Product($handle: String!) {
        product(handle: $handle) {
          id
          handle
          title
          description
          featuredImage { url altText }
          variants(first: 5) {
            nodes {
              id
              title
              availableForSale
              price { amount currencyCode }
            }
          }
        }
      }
    `,
    { handle }
  );
  return data.product;
}

/* ------------------------------------------------------------------ */
/* Internal fetch helper                                               */
/* ------------------------------------------------------------------ */

async function storefront(query, variables = {}) {
  const res = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  if (!res.ok) throw new Error(`Shopify request failed: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}
