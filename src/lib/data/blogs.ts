export type BlogContentBlock =
	| { type: 'paragraph'; text: string; heading?: string }
	| { type: 'quote'; text: string; author?: string }
	| { type: 'code'; code: string; language?: string }
	| { type: 'image'; url: string; caption?: string; layout?: 'full' | 'inset' };

export interface BlogItem {
	slug: string;
	title: string;
	fullTitle?: string;
	description: string;
	date: string;
	imageUrl: string;
	imageOrientation: 'portrait' | 'landscape';
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
		slug: 'technical-rhythm',
		title: "ISSUE#04",
		fullTitle: "Lorem Ipsum Dolor Sit Amet",
		description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		date: "MAY 14, 2026",
		imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
		imageOrientation: 'landscape',
		content: [
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			},
			{
				type: 'image',
				url: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2000&auto=format&fit=crop",
				caption: "Lorem Ipsum",
				layout: 'full'
			},
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
			},
			{ type: 'quote', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Lorem Ipsum" },
			{
				type: 'code',
				code: "const lorem = 'ipsum';\nconsole.log(lorem);",
				language: "javascript"
			}
		]
	},
	{
		slug: 'geometric-foundations',
		title: "ISSUE#03",
		fullTitle: "Lorem Ipsum Dolor Sit Amet",
		description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		date: "MAY 10, 2026",
		imageUrl: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2000&auto=format&fit=crop",
		imageOrientation: 'portrait',
		content: [
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			},
			{
				type: 'paragraph',
				text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
			},
			{ type: 'quote', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Lorem Ipsum" },
			{
				type: 'image',
				url: "https://images.unsplash.com/photo-1626544823105-df950291bbad?q=80&w=2000&auto=format&fit=crop",
				caption: "Lorem Ipsum",
				layout: 'full'
			},
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
			}
		]
	},
	{
		slug: 'modern-minimalism',
		title: "ISSUE#02",
		fullTitle: "Lorem Ipsum Dolor Sit Amet",
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		date: "APRIL 25, 2026",
		imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
		imageOrientation: 'landscape',
		content: [
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			},
			{ type: 'quote', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Lorem Ipsum" },
			{ type: 'code', code: "const lorem = () => {\n  return 'ipsum';\n};", language: "typescript" },
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
			},
			{ type: 'image', url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop", caption: "Lorem Ipsum", layout: 'inset' }
		]
	},
	{
		slug: 'digital-porcelain',
		title: "ISSUE#01",
		fullTitle: "The Philosophy of Digital Porcelain",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "APRIL 20, 2026",
		imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
		imageOrientation: 'portrait',
		content: [
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
			{ type: 'quote', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Lorem Ipsum" },
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
			},
			{ type: 'image', url: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000&auto=format&fit=crop", caption: "Lorem Ipsum", layout: 'full' },
			{
				type: 'paragraph',
				heading: "Lorem Ipsum",
				text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
			},
			{
				type: 'code',
				language: 'typescript',
				code: "interface LoremIpsum {\n  lorem: 'ipsum';\n  sit: 'amet';\n}"
			}
		]
	}
];
