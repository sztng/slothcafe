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
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Visit', href: '#visit' },
  ],
  cta: { label: 'Order ahead', href: '#order' },

  hero: {
    eyebrow: 'EST. 2019 · PORTLAND, OR',
    headline: ['Good coffee.', 'At our own pace.'],
    sub: 'We take our time so you can take yours. No rush, ever.',
    primary: { label: 'See the menu', href: '#menu' },
    secondary: { label: 'Our story', href: '#story' },
    special: {
      eyebrow: "TODAY'S SPECIAL",
      title: 'Honey Lavender Latte',
      description:
        'Local raw honey, dried lavender syrup, oat milk. Available while our sleepy baristas keep up.',
      price: '$6.50',
    },
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

  visit: {
    eyebrow: 'FIND US',
    headline: 'Come hang',
    hours: {
      rows: [
        { days: 'Monday – Friday', time: '7:00 am – 6:00 pm' },
        { days: 'Saturday', time: '8:00 am – 7:00 pm' },
        { days: 'Sunday', time: '8:00 am – 5:00 pm' },
      ],
      note: 'We open when the sloth is ready.',
    },
    location: {
      lines: ['1842 SE Malden Street', 'Portland, OR 97202'],
      note: 'Bike parking out front — we insist. Street parking also available. Accessible entrance on Malden.',
      directionsUrl: 'https://maps.google.com/?q=1842+SE+Malden+Street+Portland+OR',
    },
    contact: {
      phone: '(503) 842-1190',
      email: 'hello@slothandmessenger.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },

  footer: {
    line: 'Portland, Oregon · Est. 2019',
    copyright: `© ${new Date().getFullYear()} Sloth & Messenger. All rights reserved.`,
  },
};
