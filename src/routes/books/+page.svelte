<script lang="ts">
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BookHero from '$lib/components/books/BookHero.svelte';
	import BookListHeader from '$lib/components/books/BookListHeader.svelte';
	import BookCard from '$lib/components/books/BookCard.svelte';

	let viewMode: 'grid' | 'list' = 'list';
	import { books } from '$lib/data/books';
</script>

<svelte:head>
	<title>Mrs. Dalloway Review - NANO BANANA</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Newsreader:opsz,wght@6..72,400;500;600&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="text-black flex flex-col font-body-md selection:bg-surface-accent selection:text-white bg-[#f9f9f9] min-h-screen w-full relative"
>
	<TopNavBar />

	<main class="flex-grow flex flex-col">
		<BookHero />

		<section
			class="border-b-2 border-black bg-surface-main blueprint-pattern bg-blueprint flex-grow relative"
		>
			<BookListHeader bind:viewMode />

			<div
				class="w-full {viewMode === 'list'
					? 'flex flex-col'
					: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter p-margin-mobile md:p-margin-desktop'}"
			>
				{#each books as book, i}
					<BookCard
						id={book.id}
						isbn={book.isbn}
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
</style>
