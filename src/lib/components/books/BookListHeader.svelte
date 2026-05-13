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
	class="sticky top-[72px] z-40 border-b-2 border-black px-margin-desktop py-4 flex justify-between items-center -mt-[2px] relative"
	style="background-color: #005baa;"
>
	<h3 class="font-nav-lg text-nav-lg uppercase tracking-widest text-white">Library</h3>
	<div class="flex gap-4">
		<button
			class="w-8 h-8 border-2 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-cartoon-sm {viewMode ===
			'grid'
				? 'bg-black text-white border-black'
				: 'bg-white text-black border-black'}"
			on:click={() => setView('grid')}
			aria-label="Grid View"
		>
			<span class="material-symbols-outlined text-sm">grid_view</span>
		</button>
		<button
			class="w-8 h-8 border-2 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-cartoon-sm {viewMode ===
			'list'
				? 'bg-black text-white border-black'
				: 'bg-white text-black border-black'}"
			on:click={() => setView('list')}
			aria-label="List View"
		>
			<span class="material-symbols-outlined text-sm">view_list</span>
		</button>
	</div>
</div>
