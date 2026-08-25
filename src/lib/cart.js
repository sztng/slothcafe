/**
 * Client-side cart — browser-only, backed by localStorage.
 *
 * Holds nothing Shopify doesn't already know: just which variant IDs and
 * quantities the visitor picked. There's no server and no cart API call —
 * on checkout we build one Shopify cart permalink (comma-separated
 * variantId:quantity pairs) and hand off to Shopify's own hosted checkout,
 * which owns inventory, pricing, and payment from that point on.
 */

const STORAGE_KEY = 'slothcafe_cart';

function readCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart:change', { detail: items }));
}

export function getCart() {
  return readCart();
}

export function addToCart(item) {
  const items = readCart();
  const existing = items.find((i) => i.variantId === item.variantId);
  if (existing) {
    existing.quantity += item.quantity ?? 1;
  } else {
    items.push({ ...item, quantity: item.quantity ?? 1 });
  }
  writeCart(items);
}

export function setQuantity(variantId, quantity) {
  const items = readCart();
  const existing = items.find((i) => i.variantId === variantId);
  if (!existing) return;

  if (quantity <= 0) {
    writeCart(items.filter((i) => i.variantId !== variantId));
  } else {
    existing.quantity = quantity;
    writeCart(items);
  }
}

export function removeFromCart(variantId) {
  writeCart(readCart().filter((i) => i.variantId !== variantId));
}

export function getCartCount() {
  return readCart().reduce((sum, i) => sum + i.quantity, 0);
}

/** Build a Shopify-hosted checkout URL covering every item in the cart. */
export function buildCheckoutUrl(domain) {
  const items = readCart();
  const parts = items.map((i) => `${i.variantId.split('/').pop()}:${i.quantity}`);
  return `https://${domain}/cart/${parts.join(',')}`;
}
