import { type IconProps } from '@lucide/svelte';
import type { Component } from 'svelte';
import { config as _config } from '../values';

export interface Link {
  name: string;
  url: string;
  icon: string;
  button?: {
    color?: ButtonColor;
    style?: ButtonStyle;
    size?: ButtonSize;
  };
}

export interface ExtraItem {
  content: string;
  isHtml?: boolean;
}

export interface Config {
  username: string;
  description: string;
  links: Link[];
  extra?: {
    bottom?: ExtraItem;
  };
}

export type ButtonColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
export type ButtonStyle = 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// load in config

export var config: Config;
config = _config;

if (config == null) {
  throw new Error(
    'Please ensure that you have provided a valid configuration in src/values.ts!',
  );
}

export const possessiveUsername = config.username.endsWith('s')
  ? config.username + "'"
  : config.username + "'s";

export const { username, description, links, extra } = config;
