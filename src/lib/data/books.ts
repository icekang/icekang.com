export interface Book {
	id: string;
	isbn: string;
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
		isbn: '9780525507741',
		title: 'Mrs. Dalloway',
		author: 'Virginia Woolf',
		description: 'A neutral exploration of internal realities, where the mundane act of buying flowers opens into a complex web of memory, defiance, and the invisible lives of others.',
		status: 'Reviewed',
		category: 'Classic Literature',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 5,
		dateRead: 'May 10, 2026',
		marginaliaId: '#001',
		fullReview: {
			subtitle: 'The Immense Complexity of the Individual',
			paragraphs: [
				'Clarissa Dalloway goes to buy flowers for her party—an ordinary errand that serves as a gateway into the extraordinary internal worlds of Woolf’s masterpiece. The book is built on this simplicity, yet its true genius lies in a "camera-like" narrative style that fluidly jumps between minds. This captures a shifting reality where our internal thoughts and memories often carry more weight than the physical world we share.',
				'This subjectivity is most apparent in the massive gaps between how characters perceive one another. We see it in how Clarissa and Peter remember Sally versus the reality of who she became, or the way Clarissa, Miss Kilman, and Elizabeth all view their relationships through entirely different lenses. It highlights a profound human isolation: we are often trapped within our own perceptions, even when standing in the same room as those we love.',
				'The thematic climax rests on Clarissa’s reaction to Septimus. His death is not framed merely as a tragedy, but as a powerful, private act of defiance against social expectations of conformity. This defiance ultimately inspires Clarissa; it motivates her to accept her own fears regarding aging and the "shifting" nature of her life, allowing her to find the strength to persevere.',
				'Through Elizabeth, the novel also hints at a generational world in transition. Her need for a "break" and her moment of independence on the bus represent a neutral observation of progress. It shows a new generation trying to define its own unique reality, balancing the desire to fit in with the inherent need to be an individual.',
				'Ultimately, the book serves as a reminder that everyone around us—even the people we think we know best—is living a life just as immense, messy, and complex as our own. It is a powerful depiction of how we all share the same space while inhabiting completely different realities.'
			],
			quote: 'She felt somehow very like him—the young man who had killed himself.',
			motifs: [
				{ title: 'Subjective Reality', description: 'The disconnect between how individuals perceive themselves and how they are perceived by others.' },
				{ title: 'Defiance vs. Conformity', description: 'The tension between societal expectations and the private, powerful choices made to preserve one’s identity.' },
				{ title: 'Generational Autonomy', description: 'The subtle shift in perspective as younger characters seek independence from the rigid structures of the past.' }
			]
		}
	},
];
