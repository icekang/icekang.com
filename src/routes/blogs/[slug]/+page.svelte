<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BlogContentRenderer from '$lib/components/blogs/BlogContentRenderer.svelte';

	export let data: PageData;
	const { blog } = data;

	let scrollProgress = 0;
	let contentElement: HTMLElement;

	function handleScroll() {
		if (!contentElement) return;
		const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = (window.scrollY / totalHeight) * 100;
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

<div class="text-black flex flex-col font-body-md selection:bg-primary selection:text-white bg-[#fcfcfc] min-h-screen w-full relative">
	<TopNavBar />

	<!-- SWISS PROGRESS LINE -->
	<div class="fixed top-0 left-0 w-1.5 h-full z-[100] bg-black/5 pointer-events-none">
		<div class="w-full bg-primary transition-all duration-100 ease-out" style="height: {scrollProgress}%"></div>
	</div>

	<main class="flex-grow pt-16">
		{#if blog.imageOrientation === 'portrait'}
			<!-- PORTRAIT HERO (IMAGE 1 STYLE) -->
			<div class="grid grid-cols-1 md:grid-cols-12 min-h-screen border-b-2 border-black">
				<!-- Sidebar -->
				<header class="md:col-span-3 border-r-2 border-black p-8 flex flex-col justify-between relative bg-white">
					<div class="flex flex-col gap-8">
						<a href="/blogs" class="font-nav-lg text-sm font-black uppercase tracking-tighter hover:text-primary transition-colors">
							← BACK_TO_COLLECTION
						</a>
						
						<div class="mt-12">
							<h1 class="font-headline-lg text-8xl md:text-[12rem] leading-[0.75] uppercase tracking-tighter vertical-text origin-top-left ml-4">
								{blog.title}
							</h1>
						</div>
					</div>

					<div class="flex flex-col gap-4 border-t-4 border-black pt-8">
						<div class="font-nav-lg text-xs font-black uppercase tracking-widest opacity-40">Entry_Metadata</div>
						<div class="font-headline-md text-2xl uppercase leading-none">{blog.date}</div>
						<p class="font-body-md text-sm opacity-60 leading-tight">{blog.description}</p>
					</div>
				</header>

				<!-- Image -->
				<div class="md:col-span-9 bg-surface-variant overflow-hidden relative group">
					<img src={blog.imageUrl} alt={blog.title} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
					<div class="absolute bottom-8 right-8 mix-blend-difference text-white font-nav-lg text-[10vw] font-black uppercase leading-none pointer-events-none opacity-20">
						{blog.slug.substring(0, 3)}
					</div>
				</div>
			</div>
		{:else}
			<!-- LANDSCAPE HERO (IMAGE 2 STYLE) -->
			<div class="flex flex-col border-b-2 border-black bg-white">
				<header class="p-8 md:p-16 flex flex-col gap-12">
					<div class="flex justify-between items-start">
						<a href="/blogs" class="font-nav-lg text-sm font-black uppercase tracking-tighter hover:text-primary transition-colors">
							← BACK_TO_COLLECTION
						</a>
						<div class="font-nav-lg text-xs font-black uppercase tracking-widest opacity-40">
							Nr. {Math.floor(Math.random() * 900) + 100} // CHF 0.00
						</div>
					</div>

					<h1 class="font-headline-lg text-[15vw] md:text-[20vw] leading-[0.75] uppercase tracking-[-0.08em] font-black break-all">
						{blog.title.split(' ')[0]}<br/>
						<span class="text-primary">{blog.title.split(' ')[1] || ''}</span>
					</h1>

					<div class="grid grid-cols-1 md:grid-cols-4 gap-8 border-t-4 border-black pt-8">
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
							<span class="font-headline-md text-xl">#{blog.slug.substring(0,4)}</span>
						</div>
					</div>
				</header>

				<div class="w-full aspect-[21/9] bg-surface-variant overflow-hidden relative group border-t-2 border-black">
					<img src={blog.imageUrl} alt={blog.title} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
				</div>
			</div>
		{/if}

		<!-- CONTENT -->
		<article bind:this={contentElement} class="bg-white">
			<BlogContentRenderer content={blog.content} />
		</article>

		<!-- FOOTER NAV -->
		<footer class="max-w-6xl mx-auto px-6 py-32 border-t-2 border-black flex flex-col md:flex-row justify-between items-end gap-12">
			<div class="flex flex-col gap-4">
				<div class="font-headline-lg text-8xl md:text-9xl uppercase leading-[0.75] opacity-10 font-black">FIN</div>
				<p class="font-nav-lg uppercase text-sm font-bold tracking-widest opacity-40">End of Archive Record</p>
			</div>
			<a href="/blogs" class="text-6xl md:text-8xl font-headline-lg uppercase hover:text-primary transition-all tracking-tighter">
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
