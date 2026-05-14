<script>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	// Inverted Swiss Modernist Hero: Animated Dynamic Multilingual Stack

	let languages = ['book review', 'buchkritik', 'critique de livre'];

	let activeIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			activeIndex = (activeIndex + 1) % languages.length;
		}, 3000);
		return () => clearInterval(interval);
	});

	$: currentStack = [
		languages[activeIndex],
		languages[(activeIndex + 1) % 3],
		languages[(activeIndex + 2) % 3]
	];
</script>

<section
	class="w-full min-h-[70vh] border-b-2 border-black bg-[#fcf8f1] flex flex-col relative p-margin-mobile md:p-margin-desktop text-[#005baa] selection:bg-[#005baa] selection:text-white"
>
	<!-- Simplified Top area -->
	<div class="mb-4 relative z-20"></div>

	<!-- Sub-header info -->
	<div class="max-w-[280px] mb-12 relative z-20">
		<p class="font-nav-lg text-[12px] leading-tight uppercase font-bold tracking-wider text-black">
			A stash of books I've read,<br />
			plus some highly subjective<br />
			opinions on them
		</p>
	</div>

	<!-- Massive Swiss Typography: Multilingual Dynamic Stack with FLIP animation -->
	<div class="mt-auto relative z-10 w-full flex flex-col">
		{#each currentStack as text, i (text)}
			<h1
				animate:flip={{ duration: 1000 }}
				class="font-headline-xl text-[14vw] md:text-[12vw] font-bold leading-[0.8] tracking-[-0.05em] uppercase whitespace-nowrap transition-opacity duration-1000 ease-in-out"
				style="opacity: {i === 0 ? 1 : i === 1 ? 0.1 : 0.05}"
			>
				{text}
			</h1>
		{/each}
	</div>
</section>

<style>
	/* Tightening up the Hanken Grotesk for that Swiss look */
	h1 {
		letter-spacing: -0.05em;
		text-transform: lowercase;
	}
</style>
