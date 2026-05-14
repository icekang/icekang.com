<script lang="ts">
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BlogHero from '$lib/components/blogs/BlogHero.svelte';
	import BlogItemCard from '$lib/components/blogs/BlogItemCard.svelte';
	import { blogItems } from '$lib/data/blogs';
</script>

<svelte:head>
	<title>Blogs | Naravich Chutisilp</title>
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
		<BlogHero />

		<section
			class="border-b-2 border-black bg-surface-main blueprint-pattern bg-blueprint flex-grow relative"
		>
			<div class="w-full flex flex-col">
				{#each blogItems as item}
					<BlogItemCard {...item} />
				{/each}
				<p class="w-full text-center py-20 text-xl font-bold font-headline-md opacity-50 bg-surface">
					More articles coming soon...
				</p>
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
