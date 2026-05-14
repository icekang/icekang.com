<script lang="ts">
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BookHero from '$lib/components/books/BookHero.svelte';
	import BookCard from '$lib/components/books/BookCard.svelte';
	import { books } from '$lib/data/books';

	const statusPriority: Record<string, number> = {
		Reading: 1,
		Reviewed: 2,
		Draft: 3,
		Read: 4,
		'Pending Index': 5
	};

	$: sortedBooks = [...books].sort((a, b) => {
		const pA = statusPriority[a.status] || 99;
		const pB = statusPriority[b.status] || 99;

		if (pA !== pB) return pA - pB;

		const dateA = new Date(a.dateRead).getTime() || 0;
		const dateB = new Date(b.dateRead).getTime() || 0;
		return dateB - dateA;
	});
</script>

<svelte:head>
	<title>Book Reviews | Naravich Chutisilp</title>
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
	class="text-black flex flex-col font-body-md selection:bg-[#a83232] selection:text-white bg-[#fcf8f1] min-h-screen w-full relative"
>
	<TopNavBar />

	<main class="flex-grow flex flex-col">
		<BookHero />

		<section
			class="border-b-2 border-black bg-[#fcf8f1] flex-grow relative"
		>
			<div
				class="w-full flex flex-col"
			>
				{#each sortedBooks as book, i}
					<BookCard
						id={book.id}
						isbn={book.isbn}
						title={book.title}
						description={book.description}
						status={book.status}
						category={book.category}
						collection={book.collection}
						coverClass={book.coverClass}
						rating={book.rating}
						dateRead={book.dateRead}
						isLast={i === sortedBooks.length - 1}
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
