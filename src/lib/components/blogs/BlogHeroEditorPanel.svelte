<script lang="ts">
	import type { CollageImage } from '$lib/data/blogs';

	export let images: CollageImage[];
	export let activeId: string | 'ALL' | null;
	export let saveLayout: () => void;

	let panelCollapsed: boolean = true;
	let draggedLayerId: string | null = null;

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
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
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
				<span class="font-bold py-1 bg-gray-100 border-l-4 border-primary px-2 flex-grow truncate"
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

<style>
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
</style>
