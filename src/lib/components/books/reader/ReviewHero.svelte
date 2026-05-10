<script lang="ts">
	import { onMount } from 'svelte';
	
	export let title: string;
	export let description: string;
	export let isbn: string;
	export let marginaliaId: string;
	export let scrollY: number = 0;
	export let isMobile: boolean = false;

	let coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

	function handleImageError() {
		coverUrl = ''; // Fallback
	}
</script>

<header class="w-full border-b-2 border-black flex flex-col md:flex-row">
	<div class="w-full md:w-1/2 p-margin-mobile md:p-margin-desktop flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-black relative overflow-hidden bg-white">
		<div
			class="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none"
			style="background-image: linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px); background-size: 40px 40px;"
		></div>
		<h2 class="font-label-md text-label-md uppercase tracking-widest mb-4 z-10 bg-white inline-block px-2 py-1 border-2 border-black shadow-cartoon-sm self-start">
			Marginalia {marginaliaId}
		</h2>
		<h1 class="font-headline-xl text-headline-xl italic z-10 leading-tight">{title}</h1>
		<p class="font-body-lg text-body-lg mt-6 z-10 max-w-lg">{description}</p>
	</div>
	<div class="w-full md:w-1/2 bg-surface-accent border-l-0 md:border-l-2 border-black relative min-h-[300px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
		{#if coverUrl}
			<img
				alt="{title} book cover"
				class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
				src={coverUrl}
				on:error={handleImageError}
				style="transform: translateY({scrollY * (isMobile ? -0.2 : 0.35)}px) scale(1.1);"
			/>
		{/if}
		<!-- Decorative Elements -->
		<div
			class="absolute top-8 left-8 bg-white border-2 border-black p-2 shadow-cartoon transform -rotate-3 z-20"
			style="transform: translateY({scrollY * -0.2}px) rotate(-3deg);"
		>
			<span class="material-symbols-outlined text-4xl block">psychology</span>
		</div>
		<div
			class="absolute bottom-8 right-8 bg-white border-2 border-black p-2 shadow-cartoon transform rotate-6 z-20"
			style="transform: translateY({scrollY * 0.1}px) rotate(6deg);"
		>
			<span class="material-symbols-outlined text-4xl block">construction</span>
		</div>
	</div>
</header>
