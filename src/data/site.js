/**
 * ALL site copy lives here.
 * The Portland address, hours, phone, etc. are placeholders from the mockup —
 * swap them for the real cafe details (e.g. 115 Amoy Street, Singapore) in
 * this one file and every component updates.
 */
export const site = {
  name: 'Sloth & Messenger',
  tagline: 'Good coffee. At our own pace.',
  established: '2019',
  city: 'Portland, OR',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '#menu' },
    { label: 'Menu', href: '#' },
    { label: 'Contact us', href: '#visit' },
  ],
  cta: { label: 'Order ahead', href: '#order' },

  hero: {
    eyebrow: 'EST. 2024 · SINGAPORE, SG',
    headline: ['Good coffee.', 'At our own pace.'],
    sub: 'We take our time so you can take yours. No rush, ever.',
    primary: { label: 'See the menu', href: '#menu' },
    secondary: { label: 'Our story', href: '#story' },
  },

  ticker: [
    'NO-RUSH COFFEE',
    'DELIVERED WITH CHILL',
    'SLOTH & MESSENGER',
    'SLOW BY DESIGN',
    'WORTH THE WAIT',
  ],

  story: {
    eyebrow: 'OUR STORY',
    headline: ['Slow roasted.', 'Worth every minute.'],
    paragraphs: [
      "Sloth and Messenger Coffee prides itself in delivering high-quality specialty coffee without pretense. Our mission is to offer a great coffee experience affordably.",
      'Each origin of green beans is chosen by Sloth and Messenger founder, Josh for its unique flavour profile. The beans are roasted locally on a weekly basis, using precise techniques to unlock the full potential of each batch. This small-batch roasting process ensures that every roast is fresh and tailored to highlight the unique characteristics of the beans.',
    ],
    badge: 'no rush',
    stats: [
      { value: '100%', label: 'Direct trade' },
      { value: '12', label: 'Farm partners' },
      { value: '0', label: 'Rush orders' },
    ],
  },

  shop: {
    headline: "What we're serving",
    shopAllLabel: 'Shop all coffee',
    shopAllHref: '#',
  },

  newsletter: {
    headline: 'Subscribe to the sloth mail',
    sub: 'Get first access to new bean drops, fresh roasts, brewing tips, and shop updates.',
    placeholder: 'Enter email',
    cta: 'Subscribe',
  },

  visit: {
    location: '115 Amoy Street',
    hours: 'Mon – Fri | 0830 – 1600',
    email: 'hello@slothandmessengercoffee',
    instagram: 'slothandmessengercoffee',
  },

  footer: {
    line: 'Portland, Oregon · Est. 2019',
    copyright: `© ${new Date().getFullYear()} Sloth & Messenger. All rights reserved.`,
  },
};
