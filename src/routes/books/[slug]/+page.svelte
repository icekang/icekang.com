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

	// Dummy transition to make parent wait for children
	function wait(node: HTMLElement, { duration = 0 }) {
		return { duration };
	}

	let revealing = false;

	onMount(() => {
		// 1. Wait 1s, then start sliding the shutter bars
		setTimeout(() => {
			revealing = true;
		}, 500);

		// 2. Wait for the entire animation to finish (1s start + 480ms max delay + 1.2s slide)
		// and then remove the overlay entirely
		setTimeout(() => {
			ready = true;
		}, 1500);

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:innerWidth />

{#if !ready}
	<div
		id="book-preview"
		class="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
		aria-hidden="true"
	>
		<!-- Background Shutter Bars -->
		{#each Array(12) as _, i (i)}
			<div
				class="shutter-bar absolute w-full h-[8.34vh] rounded-full z-10 bg-surface-container-high scale-x-[1.2]"
				class:animate-reveal={revealing}
				style="top: {i * 8.33}vh; animation-delay: {Math.abs(i - 5.5) * 80}ms"
			></div>
		{/each}

		<!-- Top Layer Skeletal Page -->
		<div
			id="book-preview-inner"
			class="absolute inset-0 z-[110] flex items-center justify-center pointer-events-none"
			class:animate-reveal={revealing}
			style="animation-delay: 100ms"
		>
			<div class="w-full max-w-5xl px-margin-desktop flex flex-col justify-center">
				<!-- Content Skeleton -->
				<div class="flex flex-col gap-6 md:gap-10 w-full">
					<!-- Title -->
					<div class="h-12 md:h-24 w-3/4 bg-on-secondary-container rounded-full"></div>

					<!-- Paragraph 1 -->
					<div class="flex flex-col gap-4">
						<div class="h-12 md:h-24 w-full bg-on-secondary-container rounded-full"></div>
						<div class="h-12 md:h-24 w-5/6 bg-on-secondary-container rounded-full"></div>
						<div class="h-12 md:h-24 w-2/3 bg-on-secondary-container rounded-full"></div>
						<div class="h-12 md:h-24 w-full bg-on-secondary-container rounded-full"></div>
					</div>

					<!-- Paragraph 2 -->
					<div class="flex flex-col gap-4 mt-16 md:mt-20">
						<div class="h-12 md:h-24 w-11/12 bg-on-secondary-container rounded-full"></div>
						<div class="h-12 md:h-24 w-4/5 bg-on-secondary-container rounded-full"></div>
						<div class="h-12 md:h-24 w-full bg-on-secondary-container rounded-full"></div>
					</div>

					<!-- CTA/Footer -->
					<div class="h-12 md:h-24 w-32 bg-on-secondary-container rounded-full opacity-80"></div>
				</div>
			</div>
		</div>
	</div>
{/if}

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

	@keyframes slideRight {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(110vw);
		}
	}

	.shutter-bar.animate-reveal,
	#book-preview-inner.animate-reveal {
		animation: slideRight 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
	}

	#book-preview-inner.animate-reveal {
		animation-duration: 1s; /* Slightly faster for parallax */
	}
</style>
