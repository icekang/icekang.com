export type BlogContentBlock =
	| { type: 'paragraph'; text: string; heading?: string }
	| {
			type: 'quote';
			text: string;
			author?: string;
			size?: 'sm' | 'md' | 'lg';
			weight?: 'light' | 'normal' | 'medium' | 'bold';
			uppercase?: boolean;
			leading?: 'ultra-tight' | 'tight' | 'normal' | 'relaxed';
			tracking?: 'ultra-tight' | 'tight' | 'normal';
	  }
	| { type: 'code'; code: string; language?: string }
	| { type: 'image'; url: string; caption?: string; layout?: 'full' | 'inset' }
	| { type: 'youtube'; videoId: string; start?: number; caption?: string }
	| { type: 'tweet'; html: string };

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
		slug: 'ai-coding',
		title: "ISSUE#01",
		fullTitle: "My take on AI Coding Agent",
		description: "My honest, but highly subjective first take on AI Coding Agent.",
		date: "MAY 28, 2026",
		imageUrl: "https://images.unsplash.com/vector-1738590593450-647695dbf9d0?q=100&w=3000&auto=format&fit=crop",
		imageOrientation: 'portrait',
		content: [
			{
				type: 'paragraph',
				heading: "TL;DR",
				text: "Coding Agent + Human = Highly Productive Human* (*with caveats)"
			},
			{
				type: 'paragraph',
				heading: "The Background",
				text: "I have practiced my art in software engineering since my Bachelor's and Master's degrees, and even now... but things have changed significantly since I started. Yet, a seasoned software engineer would have said that this is yet another massive tool shift. This community is constantly improving, building tools to help others, including themselves, to build things more easily, securely, or with greater sophistication. That's humanity. It's been like this since somebody discovered fire and built some tools."
			},
			{
				type: 'paragraph',
				heading: "",
				text: "Humans have been building tools for a long time. Tools for cooking that help us consume more nutrients from the same amount of food. Tools for storing raw ingredients, or preserving them, so that we do not need to worry about finding them during times of scarcity. Once past the fright of survival, we made tools for ideas: philosophies of life, of nature, and of how things work, or even how things *should* work. Furthermore, we built better tools from existing ones. Basic cooking tools before advanced kitchenware; we have refrigerators with freezers after keeping raw ingredients in a well or underground; we have convoluted philosophies that were based on many other philosophies; we even developed religions. Extending those things, we have science which introduced a methodological way of improving or testing how 'valid' other theories are. And Computer Science is yet another evolution of these theoretical tools."
			},
			{
				type: 'paragraph',
				heading: "Computer Science & Software Engineering",
				text: "Computer Science branched off from mathematics and engineering, when we were trying to compute a value. Then came Ada Lovelace. She imagined a machine that served beyond pure calculation -- a general purpose computer -- perhaps... During World War II, 90 years after Ada's ambitious idea, Alan Turing built a computer that could decipher the Nazis' Enigma machine, and helped win the war. Nowadays, computers are ubiquitous, we take them for granted like they are the basic foundation of other technology; yet compared to Alan's machine, even the cheapest computer today is way more powerful than his invention."
			},
			{
				type: 'paragraph',
				heading: '',
				text: "With Alan's creation, and Ada's pioneering work, we tried and succeeded in making a computer not only serve one sole purpose, but ANY purpose, and that's programming. We program instructions to a computer to tell it what to do. There are multiple iterations of programming languages. People have tried and thought that their ways of telling computers what to do are the best ways. Languages have improved upon one another. They take good ideas from some languages and add their own original ideas -- their correct way. Take a look at the code below, which was already considered 'easier' compared to its contemporary languages."
			},
			{
				type: 'code',
				language: 'assembly',
				code: "section .data\n    msg db \"Hello, World!\", 0xa\n    len equ $ - msg\n\nsection .text\n    global _start\n\n_start:\n    mov rax, 1      ; sys_write syscall\n    mov rdi, 1      ; stdout file descriptor\n    mov rsi, msg    ; message pointer\n    mov rdx, len    ; length of message\n    syscall\n\n    mov rax, 60     ; sys_exit syscall\n    xor rdi, rdi    ; exit code 0\n    syscall"
			},
			{
				type: 'paragraph',
				heading: '',
				text: "You would appreciate how far we have come when you look at the same program written in one of our contemporary languages."
			},
			{
				type: 'code',
				language: 'python',
				code: "print(\"Hello, World!\")"
			},
			{
				type: 'paragraph',
				heading: 'Getting to the Point',
				text: "That is enough of a history class to say that AI is yet another advancement in the field that will help us build more things, more easily, better, and with more sophistication. Because, if we only had Assembly to program (the first code), it would be too niche for enough people to join and innovate, as you would have to worry about so many little details about the computer before you actually do your work, just like you would be worried about survival until it all gets handled by some level of abstraction!"
			},
			{
				type: 'paragraph',
				heading: '',
				text: "The software engineering field is changing, but it always has been. Yet the foundation and best practices are there. You cannot just throw away the basic philosophy of Socrates because it is the base for every Western idea. Similarly, you cannot just stop thinking about good software architecture; otherwise, your work will not scale and will become just another pile of AI slop. Additionally, this significant tool shift would, without a doubt, disrupt the status quo of our lives, society and economy. Nevertheless, it should, like other historical technological advancements, elevate the workforce's output. For that, I vehemently agree with Jerome's view on the large language models (LLMs) that we simply call an AI."
			},
			{
				type: 'quote',
				text: "...if you look back through history [...] since the loom was invented, putting the weavers out of business [...] in all cases, it has wound up raising productivity and raising living standards as long as the society keeps producing people who have the skills and aptitudes to benefit from that technology.",
				author: "Jerome Powell, Federal Reserve Chair",
				size: 'md',
				weight: 'normal',
				uppercase: false,
				leading: 'normal',
				tracking: 'normal'
			},
			{
				type: 'youtube',
				videoId: "oqeGhgbEwr0",
				start: 1940,
				caption: "Jerome Powell discusses AI, productivity, and job displacement during the FOMC Press Conference"
			},
			{
				type: 'paragraph',
				heading: 'Not for the sake of building',
				text: "Building software has never been easier than it is nowadays. But it is not the only factor for a successful software. Like the CEO of Take-Two -- the game developer behind GTA -- said, building games is easy, there are many game engines that help you do so. Look at how many games are released these days. But that does not mean that they are good games that people will buy.",
			},
			{
				type: 'youtube',
				videoId: "1ZgUcrR0K7I",
				start: 5866,
				caption: "Take-Two CEO Strauss Zelnick on the 'laughable' notion that generative AI will replace human game creation"
			},
			{
				type: 'quote',
				text: "With AI, anyone can make a video game. But [...] anyone could make a video game five years ago. The technology is readily available; it's commoditized. You know how many mobile games get put out a year? Thousands. You know how many hits are made in a year? Zero to five. You know who makes them? [...] We do.",
				author: "Strauss Zelnick, Take-Two Interactive CEO",
				size: 'md',
				weight: 'light',
				uppercase: false,
				leading: 'normal',
				tracking: 'normal'
			},
			{
				type: 'paragraph',
				heading: 'conclusion',
				text: "All in all, 6 years after GPT-3, things have become clearer. I don't think that AI is gonna completely replace us all. It would undoubtedly change the way many of us work and live our lives. Nevertheless, it will augment our productivity, make us more efficient at learning new things and building new things. And hopefully, the economy will expand and create more jobs to support us and uplift our living standards.",
			}
		]
	}
];
