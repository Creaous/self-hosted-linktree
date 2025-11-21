import { type Config } from '$lib';

// you can get icons from https://icon-sets.iconify.design/ :)

export const config: Config = {
  username: 'Your name goes here!',
  description: 'A little description about yourself.',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/example.invalid',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"/></svg>`,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/example.invalid',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5h1v1h-1zm0-2h1v1h-1zm-1 2v1h1v1h-1v5h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-3v1H4v-1H2v-1H1v-1h2v1h3v-1h1v-1H5v-1H4v-1H3v-1h2v-1H3v-1H2v-2h2V9H3V8H2V4h1v1h1v1h1v1h2v1h3v1h2V5h1V4h1V3h5v1h3v1z"/></svg>`,
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/example.invalid',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23 3v8h-1v2h-2v1h-2v1h2v1h1v3h-1v1h-1v1h-2v1h-2v-1h-1v-1h-1v-2h-2v2h-1v1H9v1H7v-1H5v-1H4v-1H3v-3h1v-1h2v-1H4v-1H2v-2H1V3h1V2h2v1h2v1h1v1h1v1h1v1h1v2h1v1h2V9h1V7h1V6h1V5h1V4h1V3h2V2h2v1z"/></svg>`,
    },
    {
      name: 'Github Sponsors',
      url: 'https://github.com/sponsors/example.invalid',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6V5h-1V4h-1V3h-6v1h-1v1h-2V4h-1V3H4v1H3v1H2v1H1v5h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V6zm-2 4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3V7h1V6h1V5h4v1h1v1h1v1h2V7h1V6h1V5h4v1h1v1h1v3z"/></svg>`,
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://buymeacoffee.com/example.invalid',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 11v9h-1v1H4v-1H3v-9h2v5h7v-5zm5 0h2v10h-2zm3-4V6h-1V4h-1V3H4v1H3v2H2v1H1v2h1v1h20V9h1V7zM3 8V7h1V6h1V5h14v1h1v1h1v1z"/></svg>`,
    },
  ],
  extra: {
    bottom: {
      content: `
      <p class="text-base-content/40">An additional message at the bottom if you'd like!</p>
      `,
      isHtml: true,
    },
  },
};
