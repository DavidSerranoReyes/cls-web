// Types for portfolio projects
export interface Project {
	id: string;
	title: string;
	titleEs: string;
	description: string;
	descriptionEs: string;
	category: 'Commercial' | 'Narrative' | 'Documentary' | 'Music Video';
	featured: boolean;
	thumbnail: string;
	video?: string;
	images: string[];
	year: number;
	awards?: string[];
	role: string;
	roleEs: string;
}

// Types for bio/about section
export interface Director {
	name: string;
	bio: string;
	bioEs: string;
	photo: string;
	awards: Award[];
	filmography: FilmographyEntry[];
	socialLinks: SocialLink[];
}

export interface Award {
	title: string;
	titleEs: string;
	festival: string;
	year: number;
}

export interface FilmographyEntry {
	title: string;
	year: number;
	role: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon?: string;
}

// Types for contact information
export interface ContactInfo {
	email: string;
	phone?: string;
	address?: string;
	representation?: {
		name: string;
		email: string;
		phone?: string;
	};
}
