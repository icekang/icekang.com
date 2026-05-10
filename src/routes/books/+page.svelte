<script lang="ts">
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BookHero from '$lib/components/books/BookHero.svelte';
	import BookListHeader from '$lib/components/books/BookListHeader.svelte';
	import BookCard from '$lib/components/books/BookCard.svelte';

	let viewMode: 'grid' | 'list' = 'list';

	const books: Array<{
		title: string;
		description: string;
		status: 'Reviewed' | 'Draft' | 'Pending Index';
		category: string;
		collection: string | null;
		coverClass: string;
	}> = [
		{
			title: 'To the Lighthouse',
			description: 'An examination of perception and the passage of time. The narrative shifts continuously, capturing the transient nature of human experience.',
			status: 'Reviewed',
			category: 'Structuralism',
			collection: null,
			coverClass: 'bg-surface-accent'
		},
		{
			title: 'The Waves',
			description: 'A choral arrangement of six distinct voices. The boundaries between self and other dissolve in a rhythmic tide of consciousness.',
			status: 'Draft',
			category: 'Voices',
			collection: 'COLLECTION 04',
			coverClass: 'bg-white'
		},
		{
			title: 'Orlando',
			description: 'A satirical biography spanning centuries. The protagonist undergoes a profound transformation, challenging conventional notions of identity.',
			status: 'Pending Index',
			category: '',
			collection: null,
			coverClass: 'bg-surface-main border-dashed'
		},
		{
			title: 'Mrs. Dalloway',
			description: 'A single day in post-war London. The interplay of memory and present reality builds toward a quietly devastating climax.',
			status: 'Reviewed',
			category: 'Time',
			collection: null,
			coverClass: 'bg-surface-accent'
		},
		{
			title: "Howl's Moving Castle",
			description: 'A whimsical exploration of agency and appearance. The physical environment reshapes itself in response to emotional states.',
			status: 'Draft',
			category: 'Kinetic',
			collection: null,
			coverClass: 'bg-white'
		}
	];
</script>

<svelte:head>
	<title>Mrs. Dalloway Review - NANO BANANA</title>
	<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Newsreader:opsz,wght@6..72,400;500;600&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
</svelte:head>

<div class="text-black flex flex-col font-body-md selection:bg-surface-accent selection:text-white bg-[#f9f9f9] min-h-screen w-full relative">
	<TopNavBar />

	<main class="flex-grow flex flex-col">
		<BookHero />

		<section class="border-b-2 border-black bg-surface-main blueprint-pattern bg-blueprint flex-grow relative">
			<BookListHeader bind:viewMode />

			<div class="w-full {viewMode === 'list' ? 'flex flex-col' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter p-margin-mobile md:p-margin-desktop'}">
				{#each books as book, i}
					<BookCard
						title={book.title}
						description={book.description}
						status={book.status}
						category={book.category}
						collection={book.collection}
						coverClass={book.coverClass}
						isLast={i === books.length - 1}
						{viewMode}
					/>
				{/each}
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	.blueprint-pattern {
		background-size: 24px 24px;
	}
	.material-symbols-outlined {
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 24;
	}
</style>

