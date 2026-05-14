<script lang="ts">
	import { onMount } from 'svelte';
	import cow from '$lib/images/blogs/cow.png';
	import cupid from '$lib/images/blogs/head band_cupid_hor.png';
	import horn from '$lib/images/blogs/horn.png';
	import statue from '$lib/images/blogs/statue.png';
	import wat from '$lib/images/blogs/wat.png';
	import weiss from '$lib/images/blogs/weiss.png';

	type CollageImage = {
		id: string;
		src?: string;
		x: number;
		y: number;
		scale: number;
		mx?: number;
		my?: number;
		mScale?: number;
		rotate: number;
		flipX: number;
		z: number;
	};

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

	let dragMode: 'move' | 'resize' | 'rotate' | 'move_all' | null = null;
	let startMouse = { x: 0, y: 0 };

	// For Move
	let startImage = { x: 0, y: 0 };
	let startAllImages: {id: string, x: number, y: number}[] = [];
	// For Resize
	let resizeState: any = null;
	// For Rotate
	let initialRotate: number = 0;
	let centerPt = { x: 0, y: 0 };
	let startAngle: number = 0;

	function pointerDown(e: PointerEvent, img: CollageImage) {
		if (activeId === 'ALL') {
			dragMode = 'move_all';
			startMouse = { x: e.clientX, y: e.clientY };
			startAllImages = images.map((i) => ({
				id: i.id,
				x: isMobile && i.mx !== undefined ? i.mx : i.x,
				y: isMobile && i.my !== undefined ? i.my : i.y
			}));
			if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
			return;
		}

		activeId = img.id;
		dragMode = 'move';
		startMouse = { x: e.clientX, y: e.clientY };
		startImage = {
			x: isMobile && img.mx !== undefined ? img.mx : img.x,
			y: isMobile && img.my !== undefined ? img.my : img.y
		};
		if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
	}

	function startResize(e: PointerEvent, img: CollageImage, corner: string) {
		activeId = img.id;
		dragMode = 'resize';

		const wrapper = document.getElementById('wrapper-' + img.id);
		let cx, cy, w_px, h_px;
		if (wrapper) {
			const rect = wrapper.getBoundingClientRect();
			cx = rect.left + rect.width / 2;
			cy = rect.top + rect.height / 2;
			w_px = wrapper.offsetWidth;
			h_px = wrapper.offsetHeight;
		} else {
			cx = e.clientX;
			cy = e.clientY;
			w_px = 100;
			h_px = 100;
		}

		let anchorLocalX = 0;
		let anchorLocalY = 0;
		// Anchor is the opposite corner
		if (corner === 'nw') {
			anchorLocalX = w_px / 2;
			anchorLocalY = h_px / 2;
		}
		if (corner === 'ne') {
			anchorLocalX = -w_px / 2;
			anchorLocalY = h_px / 2;
		}
		if (corner === 'sw') {
			anchorLocalX = w_px / 2;
			anchorLocalY = -h_px / 2;
		}
		if (corner === 'se') {
			anchorLocalX = -w_px / 2;
			anchorLocalY = -h_px / 2;
		}

		const theta = (img.rotate * Math.PI) / 180;
		const anchorScreenOffsetX = anchorLocalX * Math.cos(theta) - anchorLocalY * Math.sin(theta);
		const anchorScreenOffsetY = anchorLocalX * Math.sin(theta) + anchorLocalY * Math.cos(theta);

		resizeState = {
			initialX: isMobile && img.mx !== undefined ? img.mx : img.x,
			initialY: isMobile && img.my !== undefined ? img.my : img.y,
			initialScale: isMobile && img.mScale !== undefined ? img.mScale : img.scale,
			cx,
			cy,
			anchorScreenOffsetX,
			anchorScreenOffsetY,
			w_px,
			h_px,
			initialDist: Math.hypot(e.clientX - cx, e.clientY - cy)
		};

		if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
	}

	function startRotate(e: PointerEvent, img: CollageImage) {
		activeId = img.id;
		dragMode = 'rotate';
		initialRotate = img.rotate;

		const wrapper = document.getElementById('wrapper-' + img.id);
		if (wrapper) {
			const rect = wrapper.getBoundingClientRect();
			centerPt = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
		} else {
			centerPt = { x: e.clientX, y: e.clientY + 50 }; // fallback
		}

		startAngle = Math.atan2(e.clientY - centerPt.y, e.clientX - centerPt.x);
		if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
	}

	function pointerMove(e: PointerEvent) {
		if (!dragMode || !activeId || !container) return;

		if (dragMode === 'move_all') {
			const vmin = Math.min(window.innerWidth, window.innerHeight);
			const dx = ((e.clientX - startMouse.x) / vmin) * 100;
			const dy = ((startMouse.y - e.clientY) / vmin) * 100; // Inverted for bottom anchor

			images = images.map((img) => {
				const startImg = startAllImages.find((i) => i.id === img.id);
				if (!startImg) return img;

				if (isMobile) {
					return { ...img, mx: startImg.x + dx, my: startImg.y + dy };
				} else {
					return { ...img, x: startImg.x + dx, y: startImg.y + dy };
				}
			});
		} else if (dragMode === 'move') {
			const vmin = Math.min(window.innerWidth, window.innerHeight);
			const dx = ((e.clientX - startMouse.x) / vmin) * 100;
			const dy = ((startMouse.y - e.clientY) / vmin) * 100; // Inverted for bottom anchor

			images = images.map((img) => {
				if (img.id === activeId) {
					if (isMobile) {
						return { ...img, mx: startImage.x + dx, my: startImage.y + dy };
					} else {
						return { ...img, x: startImage.x + dx, y: startImage.y + dy };
					}
				}
				return img;
			});
		} else if (dragMode === 'resize') {
			const currentDist = Math.hypot(e.clientX - resizeState.cx, e.clientY - resizeState.cy);
			let scaleFactor = currentDist / Math.max(resizeState.initialDist, 1);
			const minScaleFactor = 0.02 / resizeState.initialScale;
			scaleFactor = Math.max(minScaleFactor, scaleFactor);

			const delta_Cx = resizeState.anchorScreenOffsetX * (1 - scaleFactor);
			const delta_Cy = resizeState.anchorScreenOffsetY * (1 - scaleFactor);

			const vmin = Math.min(window.innerWidth, window.innerHeight);
			const delta_x_pct = (delta_Cx / vmin) * 100;
			const delta_y_pct = (-delta_Cy / vmin) * 100;

			images = images.map((img) => {
				if (img.id === activeId) {
					if (isMobile) {
						return {
							...img,
							mScale: resizeState.initialScale * scaleFactor,
							mx: resizeState.initialX + delta_x_pct,
							my: resizeState.initialY + delta_y_pct
						};
					} else {
						return {
							...img,
							scale: resizeState.initialScale * scaleFactor,
							x: resizeState.initialX + delta_x_pct,
							y: resizeState.initialY + delta_y_pct
						};
					}
				}
				return img;
			});
		} else if (dragMode === 'rotate') {
			const currentAngle = Math.atan2(e.clientY - centerPt.y, e.clientX - centerPt.x);
			const angleDelta = (currentAngle - startAngle) * (180 / Math.PI);

			images = images.map((img) => {
				if (img.id === activeId) {
					return { ...img, rotate: initialRotate + angleDelta };
				}
				return img;
			});
		}
	}

	function pointerUp() {
		dragMode = null;
	}

	// Editor Controls
	function flipActive() {
		if (!activeId) return;
		if (activeId === 'ALL') {
			images = images.map((img) => ({ ...img, flipX: img.flipX * -1 }));
		} else {
			images = images.map((img) => (img.id === activeId ? { ...img, flipX: img.flipX * -1 } : img));
		}
	}

	function moveLayerZ(id: string, delta: number) {
		images = images.map((img) => (img.id === id ? { ...img, z: img.z + delta } : img));
	}

	// Layer Reordering via Drag and Drop
	let draggedLayerId: string | null = null;
	let panelCollapsed: boolean = true;

	function handleDragStart(e: DragEvent, id: string) {
		draggedLayerId = id;
		if (e.dataTransfer) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text/plain', id);
		}
	}

	function handleDragOver(e: DragEvent) {
		e.preventDefault(); // Necessary to allow dropping
		if (e.dataTransfer) {
			e.dataTransfer.dropEffect = 'move';
		}
	}

	function handleDrop(e: DragEvent, targetId: string) {
		e.preventDefault();
		if (!draggedLayerId || draggedLayerId === targetId) return;

		const sortedLayers = [...images].sort((a, b) => b.z - a.z);
		const draggedIdx = sortedLayers.findIndex((img) => img.id === draggedLayerId);
		const targetIdx = sortedLayers.findIndex((img) => img.id === targetId);

		// Move item in the sorted array
		const [draggedItem] = sortedLayers.splice(draggedIdx, 1);
		sortedLayers.splice(targetIdx, 0, draggedItem);

		// Reassign Z-indices based on new order (Top = 19, Bottom = 19 - length)
		images = images.map((img) => {
			const indexInSorted = sortedLayers.findIndex((l) => l.id === img.id);
			return { ...img, z: 19 - indexInSorted };
		});

		draggedLayerId = null;
	}

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
	on:pointerdown={(e) => {
		if (editorMode && e.target === container) {
			if (activeId === 'ALL') {
				dragMode = 'move_all';
				startMouse = { x: e.clientX, y: e.clientY };
				startAllImages = images.map((i) => ({
					id: i.id,
					x: isMobile && i.mx !== undefined ? i.mx : i.x,
					y: isMobile && i.my !== undefined ? i.my : i.y
				}));
				if (container) container.setPointerCapture(e.pointerId);
			} else {
				activeId = null;
			}
		}
	}}
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
		<!-- EDITOR PANEL -->
		<div
			class="absolute top-10 right-10 z-[1000] bg-surface border-2 border-black flex flex-col shadow-[4px_4px_0_0_rgba(0,0,0,1)] w-64 font-body-sm text-black max-h-[80vh] overflow-hidden"
		>
			<!-- HEADER / TOGGLE -->
			<button
				class="flex justify-between items-center {panelCollapsed
					? ''
					: 'border-b-2'} border-black p-2 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer w-full text-left"
				on:click={() => (panelCollapsed = !panelCollapsed)}
			>
				<span class="font-bold font-headline-sm uppercase tracking-wider px-2">Collage Editor</span>
				<span class="font-bold text-lg px-2 leading-none">{panelCollapsed ? '+' : '−'}</span>
			</button>

			{#if !panelCollapsed}
				<div class="p-4 flex flex-col gap-2 overflow-y-auto flex-1">
					<div class="flex items-center gap-2 mb-1">
						<span
							class="font-bold py-1 bg-gray-100 border-l-4 border-primary px-2 flex-grow truncate"
							>Active: {activeId || 'None'}</span
						>
						<button
							class="px-3 py-1 bg-white border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none transition-all font-bold"
							on:click={() => (activeId = 'ALL')}>ALL</button
						>
						<button
							class="px-3 py-1 bg-white border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none transition-all font-bold"
							on:click={flipActive}>FLIP</button
						>
					</div>

					<!-- LAYERS PANEL -->
					<div class="mt-2 border-t-2 border-black pt-2">
						<p class="font-bold mb-2 text-xs uppercase tracking-widest text-gray-600">
							Layers (Z-Index)
						</p>
						<div class="flex flex-col gap-1 max-h-48 overflow-y-auto pr-1">
							{#each [...images].sort((a, b) => b.z - a.z) as layer (layer.id)}
								<div
									draggable="true"
									on:dragstart={(e) => handleDragStart(e, layer.id)}
									on:dragover={handleDragOver}
									on:drop={(e) => handleDrop(e, layer.id)}
									class="flex items-center justify-between pl-2 border border-black cursor-grab active:cursor-grabbing shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all {draggedLayerId ===
									layer.id
										? 'opacity-40'
										: ''} {activeId === layer.id
										? 'bg-[#005baa] text-white font-bold'
										: 'bg-white hover:bg-gray-100 text-black'}"
									on:click={() => (activeId = layer.id)}
								>
									<span class="text-xs uppercase truncate pr-2 pointer-events-none"
										>{layer.id} <span class="opacity-60 text-[10px]">({layer.z})</span></span
									>
									<div class="flex">
										<button
											class="w-7 h-7 flex items-center justify-center border-l border-black hover:bg-white/20 {activeId ===
											layer.id
												? 'text-white'
												: 'text-black'}"
											on:click|stopPropagation={() => moveLayerZ(layer.id, 1)}
											title="Bring Forward">▲</button
										>
										<button
											class="w-7 h-7 flex items-center justify-center border-l border-black hover:bg-white/20 {activeId ===
											layer.id
												? 'text-white'
												: 'text-black'}"
											on:click|stopPropagation={() => moveLayerZ(layer.id, -1)}
											title="Send Backward">▼</button
										>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<button
						class="mt-4 w-full py-2 bg-[#005baa] text-white border-2 border-black font-bold uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all"
						on:click={saveLayout}
					>
						SAVE LAYOUT
					</button>
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	/* Ensures images can be dragged smoothly without triggering browser selection */
	img {
		-webkit-user-drag: none;
		user-select: none;
	}

	/* Custom scrollbar for layers panel */
	.overflow-y-auto::-webkit-scrollbar {
		width: 6px;
	}
	.overflow-y-auto::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-left: 1px solid black;
	}
	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: #000;
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
