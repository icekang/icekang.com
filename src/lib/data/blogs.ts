export type BlogContentBlock = 
	| { type: 'paragraph'; text: string }
	| { type: 'quote'; text: string; author?: string }
	| { type: 'code'; code: string; language?: string }
	| { type: 'image'; url: string; caption?: string };

export interface BlogItem {
	title: string;
	description: string;
	date: string;
	imageUrl: string;
	href: string;
}

export type CollageImage = {
	id: string;
	src?: string;
	x: number;
	y: number;
	scale: number;
	mx?: number;
	my?: number;
	mScale?: number;
	rotate: number;
	flipX: number;
	z: number;
};

export const blogItems: BlogItem[] = [
];
