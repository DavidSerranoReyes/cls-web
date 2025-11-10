/**
 * Project Constants
 */

export const SITE_NAME = 'CLS Films';
export const SITE_DESCRIPTION =
  'Cinematic Excellence - Film Director & Cinematographer';
export const SITE_URL = 'https://clsfilms.com';

export const LANGUAGES = ['en', 'es'] as const;
export const DEFAULT_LANGUAGE = 'en';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  vimeo: 'https://vimeo.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
};

export const CONTACT_EMAIL = 'hello@clsfilms.com';
export const CONTACT_PHONE = '+34 XXX XXX XXX';

export const ANIMATION_DURATION = 300; // ms
export const ANIMATION_DURATION_LONG = 500; // ms

export const COLORS = {
  primary: '#0f0f0f',
  secondary: '#1a1a1a',
  accent: '#ff6b35',
  accentLight: '#ffa500',
  textPrimary: '#ffffff',
  textSecondary: '#b0b0b0',
  border: '#2a2a2a',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
