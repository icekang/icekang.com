export interface Book {
	id: string;
	isbn: string;
	title: string;
	author: string;
	description: string;
	status: 'Reviewed' | 'Draft' | 'Read';
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
	{
		id: 'metamorphosis',
		isbn: '9781438114026',
		title: 'The Metamorphosis',
		author: 'Franz Kafka',
		description: 'A surreal exploration of isolation and the human condition, following Gregor Samsa’s sudden transformation.',
		status: 'Read',
		category: 'Classic Literature',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#002',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'blind-earthworm',
		isbn: '9789740212225',
		title: 'The Blind Earthworm in the Labyrinth',
		author: 'Veeraporn Nitiprapha',
		description: 'A lush, sensory-driven narrative exploring forbidden love and the intricacies of human desire.',
		status: 'Read',
		category: 'Contemporary Literature',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#003',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'kikis-delivery-service',
		isbn: '9780241449479',
		title: "Kiki's Delivery Service",
		author: 'Eiko Kadono',
		description: 'A charming story of a young witch’s journey toward independence in a new city.',
		status: 'Read',
		category: 'Fantasy',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#004',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'namiya-general-store',
		isbn: '9781975382582',
		title: 'The Miracles of the Namiya General Store',
		author: 'Keigo Higashino',
		description: 'A touching story of three delinquents who hide in an abandoned store and begin receiving letters from the past.',
		status: 'Read',
		category: 'Fiction',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#005',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'before-coffee-gets-cold',
		isbn: '9781529029598',
		title: 'Before the Coffee Gets Cold',
		author: 'Toshikazu Kawaguchi',
		description: 'In a small Tokyo cafe, customers can travel back in time, provided they return before their coffee gets cold.',
		status: 'Read',
		category: 'Contemporary Fiction',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#006',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'the-prophet',
		isbn: '9780143133582',
		title: 'The Prophet',
		author: 'Kahlil Gibran',
		description: 'A collection of poetic essays on the human condition, offering timeless wisdom on love, work, and joy.',
		status: 'Read',
		category: 'Philosophy',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#007',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'midnight-library',
		isbn: '9781786892713',
		title: 'The Midnight Library',
		author: 'Matt Haig',
		description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
		status: 'Read',
		category: 'Fantasy',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#008',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'the-graveyard-book',
		isbn: '9780060530945',
		title: 'The Graveyard Book',
		author: 'Neil Gaiman',
		description: 'The story of a boy named Bod, who is raised by ghosts and other graveyard denizens after his family is murdered.',
		status: 'Read',
		category: 'Fantasy',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#009',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	},
	{
		id: 'sapiens',
		isbn: '9780062316103',
		title: 'Sapiens: A Brief History of Humankind',
		author: 'Yuval Noah Harari',
		description: 'A provocative exploration of how Homo sapiens came to dominate the Earth and the myths that hold us together.',
		status: 'Read',
		category: 'Non-Fiction',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 0,
		dateRead: '',
		marginaliaId: '#010',
		fullReview: {
			subtitle: 'TBD',
			paragraphs: [],
			quote: '',
			motifs: []
		}
	}
];
