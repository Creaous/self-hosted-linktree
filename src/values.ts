import { type Config } from '$lib';
import { CoffeeIcon, GithubIcon, HeartIcon, TwitterIcon } from '@lucide/svelte';

export const config: Config = {
  username: 'Your name goes here!',
  description: 'A little description about yourself.',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/example.invalid',
      icon: GithubIcon,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/example.invalid',
      icon: TwitterIcon,
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/example.invalid',
      icon: GithubIcon,
    },
    {
      name: 'Github Sponsors',
      url: 'https://github.com/sponsors/example.invalid',
      icon: HeartIcon,
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://buymeacoffee.com/example.invalid',
      icon: CoffeeIcon,
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
