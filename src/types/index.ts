/**
 * Core Types for CLS Web Project
 */

export type Language = 'en' | 'es';

export interface I18nStrings {
  en: Record<string, string>;
  es: Record<string, string>;
}

export interface ProjectCategory {
  id: string;
  name_en: string;
  name_es: string;
}

export interface PortfolioProject {
  id: string;
  title_en: string;
  title_es: string;
  description_en: string;
  description_es: string;
  category: 'commercial' | 'narrative' | 'documentary' | 'music-video';
  thumbnail: string;
  video?: string;
  year: number;
  tags: string[];
}

export interface BioContent {
  bio_en: string;
  bio_es: string;
  profileImage: string;
  awards: Award[];
  press: PressFeature[];
}

export interface Award {
  title_en: string;
  title_es: string;
  year: number;
  festival_en: string;
  festival_es: string;
}

export interface PressFeature {
  title_en: string;
  title_es: string;
  publication: string;
  url: string;
  date: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location_en?: string;
  location_es?: string;
  socialLinks: SocialLink[];
  representationEmail?: string;
}

export interface SocialLink {
  platform: 'instagram' | 'vimeo' | 'linkedin' | 'twitter' | 'youtube';
  url: string;
}
