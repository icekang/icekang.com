<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BlogContentRenderer from '$lib/components/blogs/BlogContentRenderer.svelte';

	export let data: PageData;
	const { blog } = data;

	let scrollProgress = 0;
	let scrollY = 0;
	let contentElement: HTMLElement;
	let heroContainerHeight = 0;

	function handleScroll() {
		scrollY = window.scrollY;
		if (!contentElement) return;
		const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = (window.scrollY / totalHeight) * 100;
	}

	let parallaxY = 0;
	$: {
		const maxMove = heroContainerHeight * 0.15; // Stay within 20% slack
		parallaxY = Math.min(scrollY * 0.1, maxMove);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>{blog.title} | Archive</title>
</svelte:head>

<div
	class="text-black flex flex-col font-body-md selection:bg-primary selection:text-white bg-[#fcfcfc] min-h-screen w-full relative"
>
	<TopNavBar />

	<!-- SWISS PROGRESS LINE -->
	<div class="fixed top-0 left-0 w-1.5 h-full z-[100] bg-black/5 pointer-events-none">
		<div
			class="w-full bg-primary transition-all duration-100 ease-out"
			style="height: {scrollProgress}%"
		></div>
	</div>

	<main class="flex-grow">
		{#if blog.imageOrientation === 'portrait'}
			<!-- PORTRAIT HERO (IMAGE 1 STYLE) -->
			<div
				class="flex flex-col md:grid md:grid-cols-12 md:h-screen border-b-2 border-black overflow-hidden relative"
			>
				<!-- Image Section (Top on Mobile, Right on Desktop) -->
				<div
					bind:clientHeight={heroContainerHeight}
					class="md:col-span-9 h-[75vh] md:h-full bg-surface-variant overflow-hidden relative group order-1 md:order-2"
				>
					<img
						src={blog.imageUrl}
						alt={blog.title}
						class="w-full h-[120%] object-cover will-change-transform"
						style="transform: translateY({-parallaxY}px)"
					/>

					<!-- MOBILE TITLE OVERLAY -->
					<div
						class="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:hidden z-10"
					>
						<h1
							class="font-headline-lg text-[clamp(4rem,22vw,10rem)] leading-[0.75] uppercase tracking-tighter text-white [text-wrap:balance]"
						>
							{@html blog.title}
						</h1>
					</div>

					<div
						class="absolute bottom-8 right-8 mix-blend-difference text-white font-nav-lg text-[10vw] font-black uppercase leading-none pointer-events-none opacity-20 hidden md:block z-10"
					>
						{blog.slug.substring(0, 3)}
					</div>
				</div>

				<!-- Sidebar / Metadata Section -->
				<header
					class="md:col-span-3 md:border-r-2 border-black p-6 md:p-8 flex flex-col justify-between relative bg-white h-auto md:h-full order-2 md:order-1 z-20"
				>
					<div class="flex flex-col gap-8 h-full">
						<a
							href="/blogs"
							class="font-nav-lg text-sm font-black uppercase tracking-tighter hover:text-primary transition-colors shrink-0"
						>
							← BACK_TO_COLLECTION
						</a>

						<!-- DESKTOP VERTICAL TITLE -->
						<div class="hidden md:flex flex-grow items-center justify-center overflow-hidden">
							<h1
								class="font-headline-lg text-[clamp(6rem,12vh,12rem)] leading-none uppercase tracking-tighter vertical-text whitespace-nowrap"
							>
								{blog.title.replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ')}
							</h1>
						</div>
					</div>

					<div class="flex flex-col gap-4 border-t-2 border-black pt-8 mt-auto">
						<div class="font-nav-lg text-xs font-black uppercase tracking-widest opacity-40">
							Entry_Metadata
						</div>
						<div class="font-headline-md text-2xl uppercase leading-none">{blog.date}</div>
						<p class="font-body-md text-sm opacity-60 leading-tight">{blog.description}</p>
					</div>
				</header>
			</div>
		{:else}
			<!-- LANDSCAPE HERO (IMAGE 2 STYLE) -->
			<div class="flex flex-col border-b-2 border-black bg-white">
				<header class="p-8 md:p-16 flex flex-col gap-12">
					<div class="flex justify-between items-start">
						<a
							href="/blogs"
							class="font-nav-lg text-sm font-black uppercase tracking-tighter hover:text-primary transition-colors"
						>
							← BACK_TO_COLLECTION
						</a>
						<div class="font-nav-lg text-xs font-black uppercase tracking-widest opacity-40">
							Nr. {Math.floor(Math.random() * 900) + 100} // CHF 0.00
						</div>
					</div>

					<h1
						class="font-headline-lg text-[clamp(4rem,15vw,10rem)] md:text-[clamp(8rem,25vw,24rem)] leading-[0.75] uppercase tracking-[-0.08em] font-black break-all"
					>
						{blog.title.split(' ')[0]}<br />
						<span class="text-primary">{blog.title.split(' ')[1] || ''}</span>
					</h1>

					<div class="grid grid-cols-1 md:grid-cols-4 gap-8 border-t-2 border-black pt-8">
						<div class="flex flex-col gap-2">
							<span class="font-nav-lg text-[10px] font-black uppercase opacity-40">Date</span>
							<span class="font-headline-md text-xl uppercase">{blog.date}</span>
						</div>
						<div class="md:col-span-2 flex flex-col gap-2">
							<span class="font-nav-lg text-[10px] font-black uppercase opacity-40">Abstract</span>
							<span class="font-body-md text-lg leading-tight italic">{blog.description}</span>
						</div>
						<div class="flex flex-col gap-2 items-end justify-end">
							<span class="font-nav-lg text-[10px] font-black uppercase opacity-40">Archive</span>
							<span class="font-headline-md text-xl">#{blog.slug.substring(0, 4)}</span>
						</div>
					</div>
				</header>

				<div
					bind:clientHeight={heroContainerHeight}
					class="w-full h-[75vh] md:h-auto md:aspect-[21/9] bg-surface-variant overflow-hidden relative group border-t-2 border-black"
				>
					<img
						src={blog.imageUrl}
						alt={blog.title}
						class="w-full h-[120%] object-cover will-change-transform"
						style="transform: translateY({-parallaxY}px)"
					/>
				</div>
			</div>
		{/if}

		<!-- FULL TITLE SECTION (HORIZONTAL) -->
		{#if blog.fullTitle}
			<section class="bg-white border-b-2 border-black py-16 md:py-24 px-6 overflow-hidden">
				<div class="max-w-6xl mx-auto">
					<h2
						class="font-headline-lg text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(4rem,7vw,8rem)] leading-[0.9] uppercase tracking-tighter text-center [text-wrap:balance]"
					>
						{blog.fullTitle}
					</h2>
				</div>
			</section>
		{/if}

		<!-- CONTENT -->
		<article bind:this={contentElement} class="bg-white">
			<BlogContentRenderer content={blog.content} />
		</article>

		<!-- FOOTER NAV -->
		<footer
			class="max-w-6xl mx-auto px-6 py-32 border-t-2 border-black flex flex-col md:flex-row justify-between items-end gap-12"
		>
			<div class="flex flex-col gap-4">
				<div
					class="font-headline-lg text-8xl md:text-9xl uppercase leading-[0.75] opacity-10 font-black"
				>
					FIN
				</div>
				<p class="font-nav-lg uppercase text-sm font-bold tracking-widest opacity-40">
					End of Archive Record
				</p>
			</div>
			<a
				href="/blogs"
				class="text-6xl md:text-8xl font-headline-lg uppercase hover:text-primary transition-all tracking-tighter"
			>
				NEXT_ENTRY →
			</a>
		</footer>
	</main>

	<Footer />
</div>

<style>
	.vertical-text {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}

	:global(body) {
		background-color: #fcfcfc;
	}

	/* Custom Scrollbar for Swiss Aesthetic */
	:global(::-webkit-scrollbar) {
		width: 6px;
	}
	:global(::-webkit-scrollbar-track) {
		background: #f1f1f1;
	}
	:global(::-webkit-scrollbar-thumb) {
		background: #000;
	}
</style>
