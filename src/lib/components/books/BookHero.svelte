<script>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	// Inverted Swiss Modernist Hero: Animated Dynamic Multilingual Stack

	let languages = [
		{ text: 'book review', lang: 'en' },
		{ text: 'buchkritik', lang: 'de' },
		{ text: 'critique de livre', lang: 'fr' },
		{ text: 'รีวิวหนังสือ', lang: 'th' }
	];

	let activeIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			activeIndex = activeIndex + 1;
		}, 3000);
		return () => clearInterval(interval);
	});

	$: currentStack = [
		{ ...languages[activeIndex % 4], key: activeIndex },
		{ ...languages[(activeIndex + 1) % 4], key: activeIndex + 1 },
		{ ...languages[(activeIndex + 2) % 4], key: activeIndex + 2 },
		{ ...languages[(activeIndex + 3) % 4], key: activeIndex + 3 }
	];
</script>

<section
	class="w-full min-h-[50vh] md:min-h-[70vh] border-b-2 border-black bg-[#fcf8f1] flex flex-col relative p-margin-mobile md:p-margin-desktop text-[#005baa] selection:bg-[#005baa] selection:text-white overflow-hidden"
>
	<!-- Simplified Top area -->
	<div class="mb-4 relative z-20"></div>

	<!-- Sub-header info -->
	<div class="max-w-[280px] mb-8 relative z-20">
		<p class="font-nav-lg text-[12px] leading-tight uppercase font-bold tracking-wider text-black">
			A stash of books I've read,<br />
			plus some highly subjective<br />
			opinions on them
		</p>
	</div>

	<!-- Massive Swiss Typography: Multilingual Rolling Stack -->
	<div
		class="mt-auto relative z-10 w-full h-[40vh] md:h-[60vh] max-h-[40vh] md:max-h-[60vh] overflow-hidden pt-4 flex flex-col justify-start"
	>
		<div class="stack-grid">
			{#each currentStack as item, i (item.key)}
				<div
					animate:flip={{ duration: 1000 }}
					in:fly={{ y: 200, duration: 1000 }}
					out:fly={{ y: -200, duration: 1000 }}
					class="w-full"
				>
					<h1
						class="text-[14vw] md:text-[12vw] leading-[0.8] tracking-[-0.05em] whitespace-nowrap transition-opacity duration-1000 {item.lang ===
						'th'
							? 'font-kanit font-medium'
							: 'font-headline-xl uppercase font-bold'}"
						style="opacity: {i === 0 ? 1 : i === 1 ? 0.1 : i === 2 ? 0.05 : 0.025}"
					>
						{item.text}
					</h1>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Tightening up the Hanken Grotesk for that Swiss look */
	h1 {
		letter-spacing: -0.05em;
		text-transform: lowercase;
	}

	.stack-grid {
		display: grid;
		grid-template-rows: auto auto auto auto;
		grid-auto-rows: 0px; /* Prevents extra elements from expanding the container */
		align-items: start;
	}
</style>
