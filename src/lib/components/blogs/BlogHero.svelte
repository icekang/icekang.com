<script lang="ts">
	import { onMount } from 'svelte';
	import type { CollageImage } from '$lib/data/blogs';
	import BlogHeroEditorPanel from './BlogHeroEditorPanel.svelte';
	
	import cow from '$lib/images/blogs/cow.png';
	import cupid from '$lib/images/blogs/head band_cupid_hor.png';
	import horn from '$lib/images/blogs/horn.png';
	import statue from '$lib/images/blogs/statue.png';
	import wat from '$lib/images/blogs/wat.png';
	import weiss from '$lib/images/blogs/weiss.png';

	let images: CollageImage[] = [
		{
			id: 'horn',
			src: horn,
			x: -27.33,
			y: -12.59,
			scale: 0.306,
			mx: -27.47,
			my: -29.12,
			mScale: 0.306,
			rotate: 0,
			flipX: 1,
			z: 12
		},
		{
			id: 'cow',
			src: cow,
			x: 33.94,
			y: -26.08,
			scale: 0.336,
			mx: 26.5,
			my: -43.99,
			mScale: 0.336,
			rotate: 0,
			flipX: 1,
			z: 11
		},
		{
			id: 'cupidL',
			src: cupid,
			x: -14.49,
			y: 5.79,
			scale: 0.153,
			mx: -18.4,
			my: -10.4,
			mScale: 0.17,
			rotate: 2.64,
			flipX: -1,
			z: 15
		},
		{
			id: 'statue',
			src: statue,
			x: -0.13,
			y: -0.72,
			scale: 0.318,
			mx: 1.63,
			my: -4.45,
			mScale: 0.538,
			rotate: 0,
			flipX: 1,
			z: 18
		},
		{
			id: 'cupidR',
			src: cupid,
			x: 14.51,
			y: 5.68,
			scale: 0.151,
			mx: 21.81,
			my: -10.02,
			mScale: 0.181,
			rotate: -4.96,
			flipX: 1,
			z: 16
		},
		{
			id: 'wat',
			src: wat,
			x: 0.11,
			y: -15.2,
			scale: 0.523,
			mx: 0.66,
			my: -33.24,
			mScale: 0.523,
			rotate: 0,
			flipX: 1,
			z: 19
		},
		{
			id: 'weissL',
			src: weiss,
			x: -39.68,
			y: -23.11,
			scale: 0.269,
			mx: -39.82,
			my: -39.64,
			mScale: 0.269,
			rotate: 0.08,
			flipX: 1,
			z: 13
		},
		{
			id: 'weissR',
			src: weiss,
			x: 27.19,
			y: -21.31,
			scale: 0.303,
			mx: 27.05,
			my: -37.84,
			mScale: 0.303,
			rotate: 0.18,
			flipX: -1,
			z: 14
		}
	];

	let activeId: string | 'ALL' | null = null;
	let container: HTMLElement;
	let isMobile: boolean = false;
	
	let loadedCount = 0;
	let allLoaded = false;
	let minTimePassed = false;
	
	function handleImageLoad() {
		loadedCount++;
		if (loadedCount >= images.length && minTimePassed) {
			setTimeout(() => {
				allLoaded = true;
			}, 100);
		}
	}

	function trackLoad(node: HTMLImageElement) {
		if (node.complete) {
			handleImageLoad();
		} else {
			node.addEventListener('load', handleImageLoad);
			node.addEventListener('error', handleImageLoad);
		}
		return {
			destroy() {
				node.removeEventListener('load', handleImageLoad);
				node.removeEventListener('error', handleImageLoad);
			}
		};
	}

	onMount(() => {
		setTimeout(() => {
			minTimePassed = true;
			if (loadedCount >= images.length) {
				allLoaded = true;
			}
		}, 800);

		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	// Easter Egg Editor Mode
	let editorMode: boolean = false;
	let tapCount: number = 0;
	let tapTimeout: ReturnType<typeof setTimeout>;

	function handleHeroClick() {
		tapCount++;
		if (tapCount >= 5) {
			editorMode = !editorMode;
			if (!editorMode) activeId = null;
			tapCount = 0;
		}
		clearTimeout(tapTimeout);
		tapTimeout = setTimeout(() => {
			tapCount = 0;
		}, 400);
	}

	import { createEditorInteractions } from './editorInteractions';

	const { pointerDown, startResize, startRotate, pointerMove, pointerUp, pointerDownContainer } = createEditorInteractions(
		() => images,
		(newImages) => { images = newImages; },
		() => activeId,
		(newActiveId) => { activeId = newActiveId; },
		() => isMobile,
		() => container
	);

	function saveLayout() {
		const exportData = images.map((img) => ({
			id: img.id,
			x: Number(img.x.toFixed(2)),
			y: Number(img.y.toFixed(2)),
			scale: Number(img.scale.toFixed(3)),
			mx: img.mx !== undefined ? Number(img.mx.toFixed(2)) : Number(img.x.toFixed(2)),
			my: img.my !== undefined ? Number(img.my.toFixed(2)) : Number(img.y.toFixed(2)),
			mScale:
				img.mScale !== undefined ? Number(img.mScale.toFixed(3)) : Number(img.scale.toFixed(3)),
			rotate: Number(img.rotate.toFixed(2)),
			flipX: img.flipX,
			z: img.z
		}));

		const layout = JSON.stringify(exportData, null, 2);
		console.log('=== SAVED LAYOUT ===');
		console.log(layout);

		if (navigator.clipboard) {
			navigator.clipboard
				.writeText(layout)
				.then(() => {
					alert('Layout printed to console and copied to clipboard!');
				})
				.catch(() => {
					alert('Layout printed to console! (Clipboard permission denied)');
				});
		} else {
			alert('Layout printed to console!');
		}
	}
	$: watImg = images.find(i => i.id === 'wat') || images[0];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
	bind:this={container}
	class="relative w-full h-[60vh] md:h-[80vh] bg-[#0b55aa] overflow-hidden flex items-end justify-center border-b-2 border-black"
	on:pointermove={pointerMove}
	on:pointerup={pointerUp}
	on:pointerleave={pointerUp}
	on:pointerdown={(e) => pointerDownContainer(e, editorMode)}
	on:click={handleHeroClick}
>
	{#if editorMode}
		<!-- GENERAL GRID BACKGROUND -->
		<div
			class="absolute inset-0 pointer-events-none"
			style="
				background-image: 
					linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
					linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
				background-size: 50px 50px;
				background-position: center center;
			"
		></div>

		<!-- CENTER CROSSHAIRS -->
		<div
			class="absolute top-1/2 left-0 w-full h-[1px] bg-white/40 pointer-events-none z-0 shadow-[0_0_5px_rgba(255,255,255,0.5)]"
		></div>
		<div
			class="absolute top-0 left-1/2 w-[1px] h-full bg-white/40 pointer-events-none z-0 shadow-[0_0_5px_rgba(255,255,255,0.5)]"
		></div>
	{/if}

	<!-- TITLE OVERLAY -->
	<div
		class="absolute top-34 md:top-[18%] left-0 w-full -translate-y-1/2 z-[17] pointer-events-none flex flex-col items-center"
	>
		<h1
			class="font-headline-xl text-[18vw] leading-[0.8] md:text-[12vw] md:leading-none italic tracking-tighter text-white drop-shadow-lg text-center w-full relative"
		>
			<span class="block md:inline">THE</span>
			<span class="hidden md:inline">&nbsp;</span>
			<span class="block md:inline">ARCHIVES</span>
		</h1>

		{#if !allLoaded}
			<!-- LOADING PROGRESS -->
			<div class="absolute top-full mt-4 md:mt-6 w-48 md:w-64 flex flex-col items-center gap-2 drop-shadow-md">
				<div class="font-body-sm text-white/90 uppercase tracking-widest font-bold text-[10px] md:text-xs text-center">
					Loading Assets [{loadedCount}/{images.length}]
				</div>
				<div class="w-full h-[2px] bg-white/30 overflow-hidden">
					<div 
						class="h-full bg-white transition-all duration-300 ease-out"
						style="width: {(loadedCount / images.length) * 100}%"
					></div>
				</div>
			</div>
		{/if}
	</div>

	<!-- IMAGES LAYER -->
	{#each images as img, i (img.id)}
		<!-- Wrapper handles position and rotation -->
		<div
			id="wrapper-{img.id}"
			class="absolute origin-center transition-shadow duration-150 {editorMode &&
			(activeId === img.id || activeId === 'ALL')
				? 'ring-2 ring-primary ring-dashed bg-white/10'
				: ''}"
			style="
				left: calc(50% + {img.id === 'wat' || allLoaded || editorMode ? (isMobile && img.mx !== undefined ? img.mx : img.x) : (isMobile && watImg.mx !== undefined ? watImg.mx : watImg.x)}vmin); 
				bottom: calc(50% + {img.id === 'wat' || allLoaded || editorMode ? (isMobile && img.my !== undefined ? img.my : img.y) : (isMobile && watImg.my !== undefined ? watImg.my : watImg.y)}vmin); 
				height: {(isMobile && img.mScale !== undefined ? img.mScale : img.scale) * (img.id === 'wat' || allLoaded || editorMode ? 100 : 0)}vmin;
				width: max-content;
				z-index: {img.z};
				translate: -50% 50%;
				transform: rotate({img.id === 'wat' || allLoaded || editorMode ? img.rotate : 0}deg);
				{!editorMode && img.id !== 'wat' ? `transition: all 1200ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 80}ms;` : ''}
			"
		>
			<!-- Image handles flip and drag start -->
			<img
				src={img.src}
				alt={img.id}
				use:trackLoad
				on:pointerdown={(e) => editorMode && pointerDown(e, img)}
				class="h-full w-auto {editorMode ? 'cursor-grab active:cursor-grabbing' : ''} {editorMode &&
				(activeId === img.id || activeId === 'ALL')
					? 'drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]'
					: 'drop-shadow-xl'} {!editorMode && img.id === 'cupidL' && allLoaded ? 'fly-1' : ''} {!editorMode &&
				img.id === 'cupidR' && allLoaded
					? 'fly-2'
					: ''} {!editorMode && img.id === 'weissL' && allLoaded ? 'wave-1' : ''} {!editorMode && img.id === 'weissR' && allLoaded ? 'wave-2' : ''}"
				style="transform: scaleX({img.flipX}); {editorMode &&
				activeId &&
				activeId !== img.id &&
				activeId !== 'ALL'
					? 'pointer-events: none;'
					: ''}"
				draggable="false"
			/>

			{#if editorMode && activeId === img.id}
				<!-- Top Left Resize Handle -->
				<div
					class="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-black -mt-3 -ml-3 cursor-nwse-resize shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center z-50 hover:bg-primary"
					on:pointerdown|stopPropagation={(e) => startResize(e, img, 'nw')}
				>
					<span class="block w-2 h-2 bg-black rounded-full pointer-events-none"></span>
				</div>
				<!-- Top Right Resize Handle -->
				<div
					class="absolute top-0 right-0 w-6 h-6 bg-white border-2 border-black -mt-3 -mr-3 cursor-nesw-resize shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center z-50 hover:bg-primary"
					on:pointerdown|stopPropagation={(e) => startResize(e, img, 'ne')}
				>
					<span class="block w-2 h-2 bg-black rounded-full pointer-events-none"></span>
				</div>
				<!-- Bottom Left Resize Handle -->
				<div
					class="absolute bottom-0 left-0 w-6 h-6 bg-white border-2 border-black -mb-3 -ml-3 cursor-nesw-resize shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center z-50 hover:bg-primary"
					on:pointerdown|stopPropagation={(e) => startResize(e, img, 'sw')}
				>
					<span class="block w-2 h-2 bg-black rounded-full pointer-events-none"></span>
				</div>
				<!-- Bottom Right Resize Handle -->
				<div
					class="absolute bottom-0 right-0 w-6 h-6 bg-white border-2 border-black -mb-3 -mr-3 cursor-nwse-resize shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center z-50 hover:bg-primary"
					on:pointerdown|stopPropagation={(e) => startResize(e, img, 'se')}
				>
					<span class="block w-2 h-2 bg-black rounded-full pointer-events-none"></span>
				</div>

				<!-- Rotate Handle (Top Center) -->
				<div
					class="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-2 border-black -mt-8 cursor-ew-resize shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center z-50 rounded-full hover:bg-primary"
					on:pointerdown|stopPropagation={(e) => startRotate(e, img)}
				>
					<span class="block w-3 h-1 bg-black pointer-events-none"></span>
				</div>
				<!-- Connecting line for rotate handle -->
				<div
					class="absolute top-0 left-1/2 w-[2px] h-8 bg-black -mt-8 -translate-x-1/2 z-40 pointer-events-none"
				></div>
			{/if}
		</div>
	{/each}

	{#if editorMode}
		<BlogHeroEditorPanel bind:images bind:activeId {saveLayout} />
	{/if}
</section>

<style>
	/* Ensures images can be dragged smoothly without triggering browser selection */
	img {
		-webkit-user-drag: none;
		user-select: none;
	}

	@keyframes fly {
		0%, 100% {
			translate: 0 0;
		}
		50% {
			translate: 0 -8%;
		}
	}
	.fly-1 {
		animation: fly 4s ease-in-out infinite;
	}
	.fly-2 {
		animation: fly 5s ease-in-out infinite 1s;
	}

	@keyframes wave {
		0%, 100% {
			rotate: -1deg;
		}
		50% {
			rotate: 2deg;
		}
	}
	.wave-1 {
		transform-origin: bottom center;
		animation: wave 7s ease-in-out infinite;
	}
	.wave-2 {
		transform-origin: bottom center;
		animation: wave 8.5s ease-in-out infinite 1.5s;
	}
</style>
