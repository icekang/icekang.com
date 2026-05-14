<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let viewMode: 'grid' | 'list' = 'list';

	function setView(mode: 'grid' | 'list') {
		viewMode = mode;
		dispatch('change', mode);
	}
</script>

<div
	class="sticky top-[72px] z-40 border-b-2 border-black px-margin-desktop py-3 flex justify-between items-center -mt-[2px] bg-[#fcf8f1] relative"
>
	<div class="flex items-center gap-4">
		<h3 class="font-nav-lg text-[11px] uppercase tracking-[0.3em] text-black font-bold">
			Library.Index
		</h3>
		<span class="text-[10px] text-[#005baa] font-bold font-mono">/ BKS_ROOM</span>
	</div>

	<div class="flex gap-2">
		<button
			class="px-4 py-1.5 border-2 flex items-center gap-2 transition-all active:scale-95 {viewMode ===
			'grid'
				? 'bg-[#005baa] text-white border-[#005baa]'
				: 'bg-white text-black border-black hover:bg-black/5'}"
			on:click={() => setView('grid')}
			aria-label="Grid View"
		>
			<span class="material-symbols-outlined text-[16px]">grid_view</span>
			<span class="font-nav-lg text-[10px] uppercase tracking-[0.2em] hidden md:block font-bold"
				>Grid</span
			>
		</button>
		<button
			class="px-4 py-1.5 border-2 flex items-center gap-2 transition-all active:scale-95 {viewMode ===
			'list'
				? 'bg-[#005baa] text-white border-[#005baa]'
				: 'bg-white text-black border-black hover:bg-black/5'}"
			on:click={() => setView('list')}
			aria-label="List View"
		>
			<span class="material-symbols-outlined text-[16px]">view_list</span>
			<span class="font-nav-lg text-[10px] uppercase tracking-[0.2em] hidden md:block font-bold"
				>List</span
			>
		</button>
	</div>
</div>
