<script lang="ts">
	import { onMount } from 'svelte';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { book } = data;

	let scrollProgress = 0;
	let articleRef: HTMLElement;

	function handleScroll() {
		if (!articleRef) return;
		const rect = articleRef.getBoundingClientRect();
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>{book.title} Review - ICEKANG</title>
</svelte:head>

<!-- Reading Progress Bar -->
<div class="fixed top-0 left-0 w-full h-1 bg-white border-b-2 border-black z-[60] shadow-cartoon-sm" id="reading-progress">
	<div class="relative w-full h-full">
		<div class="absolute bottom-0 flex flex-col items-center mb-0" style="left: {scrollProgress}%">
			<div class="flex items-center gap-2 mb-1 transform -translate-x-1/2">
				<span class="font-label-md text-[12px] font-bold uppercase whitespace-nowrap bg-white px-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
					{Math.round(scrollProgress)}% READ
				</span>
				<img 
					alt="Reading Mascot" 
					class="h-12 w-12 object-contain -mb-1 transform scale-x-[-1]" 
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmdyPMCBfmQ8RY5bsVN_zQrCPWAEHXhRHqdp631EuJ8cjvMYQ0mX3NbSn1b5I5bbV6YU0SwrxxYdAyEelWSy9_PMc07Q3F_8ooMpgGBdUt-iYGitkhlI4RKgsnRYd4b4WbXhSTqwBN0Uoh0QifrwwtY6JXh6kUoObkgyOlmwMypdFOsqQnRnsdLUq0v7dfSWHjUby-1Z7dc9LRXdIzpDuJ0Owf8T8IPXMzMT_1jf2f71kol9fqlpeqBrrVQJMvha80VUiaeI-lFijr"
				/>
			</div>
			<div class="w-full bg-surface-accent h-1 transition-all duration-150" style="width: {scrollProgress}%"></div>
		</div>
	</div>
</div>

<div class="min-h-screen flex flex-col font-body-md antialiased selection:bg-surface-accent selection:text-white bg-white text-black pt-4">
	<TopNavBar />

	<main class="flex-grow flex flex-col w-full">
		<!-- Header Section -->
		<header class="w-full border-b-2 border-black flex flex-col md:flex-row">
			<div class="w-full md:w-1/2 p-margin-mobile md:p-margin-desktop flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-black relative overflow-hidden bg-white">
				<div class="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" style="background-image: linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px); background-size: 40px 40px;"></div>
				<h2 class="font-label-md text-label-md uppercase tracking-widest mb-4 z-10 bg-white inline-block px-2 py-1 border-2 border-black shadow-cartoon-sm self-start">
					Marginalia {book.marginaliaId}
				</h2>
				<h1 class="font-headline-xl text-headline-xl italic z-10 leading-tight">{book.title}</h1>
				<p class="font-body-lg text-body-lg mt-6 z-10 max-w-lg">{book.description}</p>
			</div>
			<div class="w-full md:w-1/2 bg-surface-accent border-l-0 md:border-l-2 border-black relative min-h-[300px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
				<img 
					alt="Book cover visualization" 
					class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" 
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuASM-ocFrn0cBhKLPBw9-2_Gvf44l9NG083ZyUnG5c6f5t3BrRHOqjUmZlcTgeyVRL9rA-lNQh_G5fYWQkxYv57I3R2KAx_aLzzGKQhBwkNzPbSRbCCcIzwuULOiotQl2tbMlYcYIA7qQ-9JnvUGQer7T5zKgbGLM0MfswKOfU6AsHOVPLX6u7Rg200TME49gRNO4EnfxOoxUPsCQ2DBj3oYGEJPVFmElna0VbZ9zH5uWRaRb1XSxwL-PVIw_tYUl7jHA7MXkNgqJJ3"
				/>
				<!-- Decorative Elements -->
				<div class="absolute top-8 left-8 bg-white border-2 border-black p-2 shadow-cartoon transform -rotate-3 z-20">
					<span class="material-symbols-outlined text-4xl block">psychology</span>
				</div>
				<div class="absolute bottom-8 right-8 bg-white border-2 border-black p-2 shadow-cartoon transform rotate-6 z-20">
					<span class="material-symbols-outlined text-4xl block">construction</span>
				</div>
			</div>
		</header>

		<!-- Body Section -->
		<section class="w-full flex flex-col md:flex-row flex-grow">
			<!-- Metadata Sidebar -->
			<aside class="w-full md:w-[300px] flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-black p-margin-mobile md:p-margin-desktop flex flex-col gap-8 bg-surface-main">
				<div class="flex flex-col gap-2">
					<h3 class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start">Author</h3>
					<p class="font-body-lg text-body-lg font-bold">{book.author}</p>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start">Rating</h3>
					<div class="flex gap-1">
						{#each Array(5) as _, i}
							<span class="material-symbols-outlined text-black" style="font-variation-settings: 'FILL' {i < book.rating ? 1 : 0};">star</span>
						{/each}
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start">Date Read</h3>
					<p class="font-body-md text-body-md">{book.dateRead}</p>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start">Category</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						<span class="border-2 border-black px-2 py-1 bg-white font-label-md text-label-md shadow-cartoon-sm">
							{book.category.toUpperCase()}
						</span>
					</div>
				</div>
				<div class="mt-auto pt-8">
					<button class="w-full bg-surface-accent text-white border-2 border-black py-3 font-label-caps text-label-caps shadow-cartoon hover:scale-[0.98] transition-transform flex items-center justify-center gap-2">
						<span class="material-symbols-outlined">shopping_cart</span>
						PURCHASE COPY
					</button>
				</div>
			</aside>

			<!-- Editorial Content -->
			<article bind:this={articleRef} class="w-full p-margin-mobile md:p-margin-desktop max-w-4xl bg-white relative">
				<h2 class="font-headline-lg text-headline-lg mb-8">{book.fullReview.subtitle}</h2>
				<div class="space-y-6 font-body-lg text-body-lg leading-relaxed">
					{#each book.fullReview.paragraphs as paragraph, i}
						<p class={i === 0 ? "first-letter:text-7xl first-letter:font-bold first-letter:text-surface-accent first-letter:mr-3 first-letter:float-left" : ""}>
							{paragraph}
						</p>
					{/each}

					<div class="my-12 p-8 border-2 border-black bg-surface-main shadow-cartoon relative transform rotate-1 hover:rotate-0 transition-transform">
						<span aria-hidden="true" class="absolute -left-6 -top-6 text-6xl">👇</span>
						<blockquote class="font-headline-lg text-headline-lg italic text-center">
							"{book.fullReview.quote}"
						</blockquote>
					</div>

					<h3 class="font-headline-md text-2xl font-bold mt-12 mb-6 border-b-2 border-black inline-block pb-2">Core Narrative Motifs</h3>
					<ul class="space-y-4 pl-4">
						{#each book.fullReview.motifs as motif}
							<li class="flex items-start gap-4">
								<span class="text-2xl mt-1">👉</span>
								<div>
									<strong class="block mb-1">{motif.title}</strong>
									<span>{motif.description}</span>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</article>
		</section>
	</main>

	<Footer />
</div>

<style>
	.material-symbols-outlined {
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 24;
	}
</style>
