import type { CategorySlug } from './catalog';

export type PageId = 'home' | 'faq' | CategorySlug;

export const externalLinks = {
  patreon: 'https://www.patreon.com/analogobsession',
  instagram: 'https://www.instagram.com/analog_obsession/',
} as const;

export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL === '/'
    ? ''
    : import.meta.env.BASE_URL.replace(/\/$/, '');

  const cleanPath = path.replace(/^\/+/, '');

  return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
}

export const faqDirectoryEntry = {
  number: '06',
  href: 'faq.html',
  label: 'FAQ',
  note: 'FORMATS / INSTALLATION / SUPPORT',
} as const;
