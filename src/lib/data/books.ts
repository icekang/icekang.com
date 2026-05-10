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
			subtitle: '',
			paragraphs: [
				"This story is about Clarissa Dalloway, a high-society lady in London, who spends her day buying flowers in the morning, meeting with an old friend in the afternoon, and hosting a party in the evening. Her story is interlaced with that of Septimus, a war veteran struggling with his mental health, whom she never actually meets.",
				"Woolf entertains us not by a normal life of Clarissa, but in her mind and others'—a technique I find incredibly unique, for her time and even today. We are reading the flowing thoughts of Clarissa: how she is so upset after learning that she was not invited to Lady Bruton's lunch party; how that makes her question if Lady Bruton might actually hate her or look down on her; how it reminds her that she is not getting any younger; and how her life has not been particularly 'successful' as a wife of a great politician. She reflects on how her marriage is all right, but not as great, and how she misses her old friends—especially Sally, whom she kissed once and liked, and her thought comes to an end when Elizabeth, her daugther, comes to her room. It is so entertaining to watch Virginia Woolf surgically unfold the flow of consciousness of us humans in form of words with such precision.",
				"Woolf reminds us all that even though we share the same exact physical reality, we live in totally different realities within our own minds. Even when characters are physically in the same place, their minds are not together in the slightest. While Clarissa is lamenting about how Miss Kilman—Elizabeth's history tutor, a religion preacher, and her archnemesis—is trying to 'steal' her daugther, as Elizabeth shows no interest in high-societly lifestyle of flowers, gloves and dresses, Miss Kilman is busy pitying Clarissa's shallow, wealthy life; yet, deep down, she craves the ease that Clarissa has and, more than anything, Elizabeth's companionship. She masks her jealousy with the belief that her suffering is a part of a merciful plan by God. Then we finally get into the mind of Elizabeth, who just wants to be free from these two adults' expectations, daydreaming about a future as a doctor, a farmer, or a professional woman who is financially independent of any man.",
				"In the middle of the story, we jump to Reiza and her husband, Septimus. Their story is a stark contrast to Clarissa’s social circle. Before the war, Septimus was a man who loved Shakespeare and had a brilliant career ahead of him. However, feeling the pressure to be 'manly,' he went to war. He complied with social norms, only to lose his best friend, Evans, on the battlefield and subsequently lose his ability to feel... Reiza has been desperately taking care of him since they married. Septimus visits Dr. Holmes, who insists there is nothing wrong with him and that he just needs to 'take an interest in things' like cricket. Then he visits Sir William Bradshaw, who tells Reiza that Septimus must be institutionalized until he becomes 'normal.' Everyone respects Sir William's authority because he is the top specialist. At that time, PTSD was unknown, and mental health was seen as a lack of effort. These doctors speak as if they own reality and try to force Septimus to conform. Septimus still sees the beauty and value of life, but to avoid being crushed by social conformity, he chooses to fight with all his strength to keep his soul his own.",
				"In conclusion, Woolf reveals that we are all vastly different within our own minds. No matter how punishingly society tries to impose a 'standard' reality on us, we remain the only true experts on our own souls. We are all like the people in her world: fighting desperately, worrying nervously at times, and daydreaming on other occasions. No matter how much someone tries to impose their own reality on us, we are the only ones who truly know our own minds. We are all just trying to navigate the complex, beautiful, and sometimes terrifying flow of our own thoughts."
			],
			quote: 'The whole world was clamouring: Kill yourself, kill yourself, for our sakes. But why should he kill himself for their sakes? Food was pleasant; the sun hot;',
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
