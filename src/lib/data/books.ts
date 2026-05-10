export interface Book {
	id: string;
	isbn: string;
	title: string;
	author: string;
	description: string;
	status: 'Reviewed' | 'Draft' | 'Read' | 'Reading';
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
		collection: 'Classic',
		coverClass: 'bg-surface-accent',
		rating: 4.5,
		dateRead: 'April 06, 2026',
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
		status: 'Reviewed',
		category: 'Classic Literature',
		collection: 'Classic',
		coverClass: 'bg-surface-accent',
		rating: 5,
		dateRead: 'April 21, 2026',
		marginaliaId: '#002',
		fullReview: {
			subtitle: 'My Worst Nightmare is to be Gregor Samsa',
			paragraphs: [
				"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. That's how the book begins, and it never explains how or why Gregor has transformed into a giant insect.",
				"We later learn that he is a traveling salesman and the sole breadwinner of the family, sacrificing his personal needs and wants to pay off his family's debt. His parents initially show appreciation for his sacrifice, but slowly, they take it for granted. His younger sister, Grete, is all he has, and he truly loves her.",
				"However, after Gregor's transformation, everyone slowly turns against him. His father never wants to see him and treats him like a cockroach; his mother faints whenever he is in his sight; and his sister, who initially tried her best to take care of him, eventually grows to hate him and gives him the cold shoulder.",
				"I see this book as an analogy for a family burning out while taking care of a loved one who is suffering from depression or mental health issues. Gregor cannot leave his room. He can no longer function as a normal 'human' in society. His family, by social norms, are ashamed of him. Additionally, they are struggling financially without him fulfilling his 'responsibility'. They have other things to worry about, and Gregor slowly becomes a negativity radiator that kills the mood of everyone in the house.",
				"The story ends in the most depressing way possible—so much so that I have to pause and take a very deep breath. It is the cherry on top of the darkest version of humanity: a family that eventually sees their own as a bug to be gotten rid of. Yet, it is a version of reality that is hauntingly not far-fetched."
			],
			quote: '\"Father, Mother\", said his sister, [...], \"we can\'t carry on like this. Maybe you can\'t see it, but I can. I don\'t want to call this monster my brother, all I can say is: we have to try and get rid of it. We\'ve done all that\' humanly possible to look after it and be patient, I don\'t think anyone could accuse us of doing anything wrong.\"',
			motifs: [
				{
					title: "Locked Doors and Thresholds",
					description: "These represent the physical and emotional barriers the family uses to isolate Gregor, turning his room into a prison as they slowly shut him out of their lives."
				},
				{
					title: "Food and Decay",
					description: "Gregor’s changing appetite—from fresh milk to rotting scraps—symbolizes his fading connection to human society and the family's transition from care to total neglect."
				},
				{
					title: "Financial Debt and Value",
					description: "The constant focus on money highlights the transactional nature of the family's affection; Gregor is seen as valuable when he provides, but becomes a 'vermin' when he becomes a cost."
				}
			]
		}
	},
	{
		id: 'blind-earthworm',
		isbn: '9789740212225',
		title: 'The Blind Earthworm in the Labyrinth',
		author: 'Veeraporn Nitiprapha',
		description: 'A lush, sensory-driven narrative exploring forbidden love and the intricacies of human desire.',
		status: 'Reading',
		category: 'Contemporary Literature',
		collection: 'Thai',
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
		rating: 3.5,
		dateRead: 'April 18, 2026',
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
		status: 'Reviewed',
		category: 'Philosophy',
		collection: null,
		coverClass: 'bg-surface-accent',
		rating: 5,
		dateRead: 'Sep 17, 2024',
		marginaliaId: '#007',
		fullReview: {
			subtitle: 'The Prophet: A Parting Gift of Wisdom',
			paragraphs: [
				"The prophet, Almustafa, who has been living in the city of Orphalese for twelve years and is beloved by many villagers, is about to leave the town as he sees a large sailing boat approaching. As he climbs down the hill where he likes to enjoy his solitude each day, the people gather around him, lamenting his imminent departure and asking for his wisdom for the last time...",
				"His philosophy, woven into beautiful words, really makes the wisdom more powerful. I don't have much to say, as I think each chapter captures its essence perfectly.",
				"And here is part I love the most in his book: On Marriage"
			],
			quote: "Love one another, but make not a bond of love: \n\
			Let it rather be a moving sea between the shores of your souls. \n\
			Fill each other’s cup but drink not from one cup.\n\
			Give one another of your bread but eat not from the same loaf. \n\
			Sing and dance together and be joyous, but let each one of your be alone,\n\
			Even as the strings of the lute are alone though they quiver with the same music.",
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
