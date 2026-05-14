export type BlogContentBlock = 
	| { type: 'paragraph'; text: string; heading?: string }
	| { type: 'quote'; text: string; author?: string }
	| { type: 'code'; code: string; language?: string }
	| { type: 'image'; url: string; caption?: string; layout?: 'full' | 'inset' };

export interface BlogItem {
	slug: string;
	title: string;
	description: string;
	date: string;
	imageUrl: string;
	imageOrientation: 'portrait' | 'landscape';
	href: string;
	content: BlogContentBlock[];
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
	{
		slug: 'digital-porcelain',
		title: "Digital Porcelain",
		description: "Exploring the delicate balance between modern brutalism and smooth user experiences.",
		date: "MAY 14, 2026",
		imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
		imageOrientation: 'portrait',
		href: "/blogs/digital-porcelain",
		content: [
			{ 
				type: 'paragraph', 
				heading: "The Fragility of Pixels",
				text: "Design isn't just about how it looks, but how it feels. In the world of Digital Porcelain, we strive for a surface that is both fragile and resilient, much like the physical ceramic itself." 
			},
			{ type: 'quote', text: "The details are not the details. They make the design.", author: "Charles Eames" },
			{ 
				type: 'paragraph', 
				heading: "Brutalist Roots",
				text: "When we talk about brutalism in the digital age, we're talking about raw expressions of function. But when that meets the 'porcelain'—the smooth, responsive, and refined UI—we get something unique." 
			},
			{ type: 'image', url: "https://images.unsplash.com/photo-1574360522682-494c8b9dedcb?q=80&w=2000&auto=format&fit=crop", caption: "The texture of digital surface.", layout: 'inset' }
		]
	},
	{
		slug: 'building-with-sveltekit',
		title: "Building with SvelteKit",
		description: "Why we chose SvelteKit for high-performance edge computing.",
		date: "APR 20, 2026",
		imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
		imageOrientation: 'landscape',
		href: "/blogs/building-with-sveltekit",
		content: [
			{ 
				type: 'paragraph', 
				heading: "Performance First",
				text: "SvelteKit is the most developer-friendly framework I've ever used. Its approach to server-side rendering and client-side navigation is unparalleled." 
			},
			{ type: 'code', code: "export const load = async () => {\n  return {\n    data: await fetchData()\n  };\n}", language: "typescript" },
			{ 
				type: 'paragraph', 
				heading: "Intuitive Routing",
				text: "The way it handles routing with file-based structures makes it incredibly intuitive to build complex applications." 
			}
		]
	}
];
