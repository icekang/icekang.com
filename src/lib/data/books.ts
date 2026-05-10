export interface Book {
	id: string;
	title: string;
	author: string;
	description: string;
	status: 'Reviewed' | 'Draft' | 'Pending Index';
	category: string;
	collection: string | null;
	coverClass: string;
	rating: number;
	dateRead: string;
	marginaliaId: string;
	fullReview: {
		subtitle: string;
		paragraphs: string[];
		quote: string;
		motifs: Array<{ title: string; description: string }>;
	};
}

export const books: Book[] = [
	{
		id: 'mrs-dalloway',
		title: 'Mrs. Dalloway',
		author: 'Virginia Woolf',
		description: 'An exploration of the internal lives of high-society Londoners post-WWI, weaving a tapestry of memory, regret, and the relentless ticking of time.',
		status: 'Reviewed',
		category: 'Classic Literature',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 5,
		dateRead: 'October 11, 2024',
		marginaliaId: '#042',
		fullReview: {
			subtitle: 'The Echo of the Leaden Circles',
			paragraphs: [
				'Clarissa Dalloway said she would buy the flowers herself. In that simple act of preparation for a party, Woolf unfolds the entire universe of a single day in June 1923. The narrative flows like water, transcending the boundaries between individuals, capturing the fragmented nature of modern consciousness.',
				'The sound of Big Ben striking the hour serves as a recurring anchor, the leaden circles dissolving in the air. This structural device reminds us of the objective passage of time even as the characters\' subjective experiences stretch and compress it through memory and introspection.',
				'Through the parallel journey of Septimus Smith, Woolf addresses the deep psychological scars of the Great War, contrasting Clarissa\'s social vitality with his tragic isolation. The novel becomes a meditation on what it means to be alive and the thin veil between sanity and madness.'
			],
			quote: 'The clock was striking. The leaden circles dissolved in the air. For she was a child, throwing bread to the ducks, between her parents over the lake.',
			motifs: [
				{ title: 'Stream of Consciousness', description: 'Capturing the fluid, often non-linear progression of thoughts and sensory impressions.' },
				{ title: 'Temporal Interplay', description: 'The contrast between internal, psychological time and the external, chronological time marked by Big Ben.' },
				{ title: 'Social Interconnectedness', description: 'The subtle, invisible threads that link disparate lives within the modern urban landscape.' }
			]
		}
	},
	{
		id: 'to-the-lighthouse',
		title: 'To the Lighthouse',
		author: 'Virginia Woolf',
		description: 'An examination of perception and the passage of time. The narrative shifts continuously, capturing the transient nature of human experience.',
		status: 'Reviewed',
		category: 'Structuralism',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 4,
		dateRead: 'September 5, 2024',
		marginaliaId: '#041',
		fullReview: {
			subtitle: 'The Subjective Lens',
			paragraphs: [
				'Virginia Woolf\'s "To the Lighthouse" is a masterpiece of modernism, focusing on the Ramsay family\'s visits to the Isle of Skye.',
				'The middle section, "Time Passes," is particularly notable for its depiction of the passage of time without human presence.'
			],
			quote: 'Nothing stays; all changes; but not words, not music of a sort, from a sense of something re-endured; of a light that was ever on sea or land.',
			motifs: [
				{ title: 'Perception', description: 'How different characters perceive the same event differently.' }
			]
		}
	}
];
