<script lang="ts">
	export let title: string = '';
	export let windowClass: string = '';
	export let headerClass: string = 'bg-surface border-b-2 border-black';
	export let contentClass: string = '';
	export let showControls: boolean = true;
</script>

<div class="bg-surface border-2 border-black shadow-cartoon relative overflow-hidden flex flex-col {windowClass}">
	<!-- Header is always at the top -->
	<div class="flex items-center justify-between px-4 py-2 gap-2 z-20 shrink-0 {headerClass}">
		<div class="flex gap-2">
			{#if showControls}
				<div class="w-3 h-3 rounded-full bg-[#FF5F57] border border-black"></div>
				<div class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black"></div>
				<div class="w-3 h-3 rounded-full bg-[#28C840] border border-black"></div>
			{:else}
				<div class="w-3 h-3"></div>
			{/if}
		</div>
		
		{#if title}
			<div class="font-nav-lg text-[10px] uppercase font-bold tracking-widest opacity-60">
				{title}
			</div>
		{/if}
	</div>
	
	<!-- Content area -->
	<div class="relative flex-grow {contentClass}">
		<slot />
	</div>
</div>
