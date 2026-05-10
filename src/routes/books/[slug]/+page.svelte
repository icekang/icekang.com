<script lang="ts">
	import { onMount } from 'svelte';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	// Refactored Components
	import ReadingProgressBar from '$lib/components/books/reader/ReadingProgressBar.svelte';
	import ReviewHero from '$lib/components/books/reader/ReviewHero.svelte';
	import ReviewSidebar from '$lib/components/books/reader/ReviewSidebar.svelte';
	import ReviewContent from '$lib/components/books/reader/ReviewContent.svelte';
	import RevealOverlay from '$lib/components/books/reader/RevealOverlay.svelte';

	export let data: PageData;
	const { book } = data;

	let scrollProgress = 0;
	let articleRef: HTMLElement;
	let ready = false;
	let y = 0;
	let innerWidth = 0;

	let coverUrl = `https://books.google.com/books/content?vid=ISBN${book.isbn}&printsec=frontcover&img=1&zoom=3`;
	let coverSource = 'Google Books';

	$: isMobile = innerWidth < 768;

	function handleScroll() {
		y = window.scrollY;
		if (!articleRef) return;
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
	}

	function handleImageLoad(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		// Google Books placeholder signatures:
		// Small: 128x192 or 128x170
		// High-res (zoom=2/3): 575x750
		if (
			(img.naturalWidth === 128 && (img.naturalHeight === 192 || img.naturalHeight === 170)) ||
			(img.naturalWidth === 575 && img.naturalHeight === 750)
		) {
			handleImageError();
		}
	}

	function handleImageError() {
		coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
		coverSource = 'Open Library';
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:innerWidth />

<RevealOverlay bind:ready />

<svelte:head>
	<title>{book.title} Review - ICEKANG</title>
</svelte:head>

<div
	class="min-h-screen flex flex-col font-body-md antialiased selection:bg-surface-accent selection:text-white bg-white text-black"
>
	<TopNavBar />
	<ReadingProgressBar {scrollProgress} />

	<main class="flex-grow flex flex-col w-full">
		<ReviewHero
			title={book.title}
			description={book.description}
			isbn={book.isbn}
			marginaliaId={book.marginaliaId}
			scrollY={y}
			{isMobile}
			{coverUrl}
			{handleImageLoad}
			{handleImageError}
		/>

		<section class="w-full flex flex-col md:flex-row flex-grow">
			<ReviewSidebar
				author={book.author}
				rating={book.rating}
				dateRead={book.dateRead}
				category={book.category}
				isbn={book.isbn}
				{coverSource}
			/>

			<ReviewContent
				subtitle={book.fullReview.subtitle}
				paragraphs={book.fullReview.paragraphs}
				quote={book.fullReview.quote}
				motifs={book.fullReview.motifs}
				bind:articleRef
			/>
		</section>
	</main>

	<Footer />
</div>

<style>
	:global(.material-symbols-outlined) {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
</style>
