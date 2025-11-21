import { type Config } from '$lib';
import { CoffeeIcon, GithubIcon, HeartIcon, TwitterIcon } from '@lucide/svelte';

export const config: Config = {
  username: 'Mitchell',
  description: 'Software Engineer',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/Creaous',
      icon: GithubIcon,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/XeniNexi',
      icon: TwitterIcon,
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/creaous.net',
      icon: GithubIcon,
    },
    {
      name: 'Github Sponsors',
      url: 'https://github.com/sponsors/Creaous',
      icon: HeartIcon,
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://buymeacoffee.com/creaous',
      icon: CoffeeIcon,
    },
  ],
  extra: {
    bottom: {
      content: `
      <p class="text-base-content/40">Information should be free and accessible.</p>
      `,
      isHtml: true,
    },
  },
};
