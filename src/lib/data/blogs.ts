export interface BlogItem {
	title: string;
	description: string;
	date: string;
	imageUrl: string;
	href: string;
}

export const blogItems: BlogItem[] = [
	{
		title: "The Aesthetics of Digital Porcelain",
		description: "Exploring the delicate balance between modern brutalism and smooth user experiences. Discover how we built a design system that feels both structural and fluid.",
		date: "MAY 14, 2026",
		imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
		href: "/blogs/digital-porcelain"
	},
	{
		title: "Building with SvelteKit",
		description: "Why we chose SvelteKit for high-performance edge computing and seamless developer experience. A deep dive into modern web architecture.",
		date: "APR 20, 2026",
		imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
		href: "/blogs/building-with-sveltekit"
	}
];
