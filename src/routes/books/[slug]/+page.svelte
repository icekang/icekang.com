<script lang="ts">
	import { onMount } from 'svelte';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
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

	$: isMobile = innerWidth < 768;

	function handleScroll() {
		y = window.scrollY;
		if (!articleRef) return;
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
	}

	onMount(() => {
		ready = true;
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:innerWidth />

{#if !ready}
	<div class="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden" aria-hidden="true">
		<div
			class="w-1/2 h-full bg-[#f9f9f9] border-r-2 border-black blueprint-pattern bg-blueprint flex items-center justify-end p-margin-desktop"
			out:fly={{ x: '-100%', duration: 1000, easing: cubicInOut }}
		>
			<div class="w-1 h-32 bg-black/10 mr-[-2px]"></div>
		</div>
		<div
			class="w-1/2 h-full bg-[#f9f9f9] border-l-2 border-black blueprint-pattern bg-blueprint flex items-center justify-start p-margin-desktop"
			out:fly={{ x: '100%', duration: 1000, easing: cubicInOut }}
		>
			<div class="w-1 h-32 bg-black/10 ml-[-2px]"></div>
		</div>
	</div>
{/if}

<svelte:head>
	<title>{book.title} Review - ICEKANG</title>
</svelte:head>

<ReadingProgressBar {scrollProgress} />

<div
	class="min-h-screen flex flex-col font-body-md antialiased selection:bg-surface-accent selection:text-white bg-white text-black pt-4"
>
	<TopNavBar />

	<main class="flex-grow flex flex-col w-full">
		<ReviewHero 
			title={book.title} 
			description={book.description} 
			isbn={book.isbn} 
			marginaliaId={book.marginaliaId}
			scrollY={y}
			{isMobile}
		/>

		<section class="w-full flex flex-col md:flex-row flex-grow">
			<ReviewSidebar 
				author={book.author}
				rating={book.rating}
				dateRead={book.dateRead}
				category={book.category}
				isbn={book.isbn}
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
