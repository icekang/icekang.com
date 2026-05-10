<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';

	export let ready = false;
	let revealing = false;

	onMount(() => {
		// 1. Wait a bit, then start sliding the shutter bars
		setTimeout(() => {
			revealing = true;
		}, 500);

		// 2. Wait for the entire animation to finish and then remove the overlay
		setTimeout(() => {
			ready = true;
		}, 1500);
	});
</script>

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

<style>
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
