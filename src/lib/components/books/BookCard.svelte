<script lang="ts">
	export let title: string;
	export let description: string;
	export let status: 'Reviewed' | 'Draft' | 'Pending Index';
	export let category: string = '';
	export let collection: string | null = null;
	export let coverClass: string = 'bg-surface-accent';
	export let isLast: boolean = false;
	export let viewMode: 'grid' | 'list' = 'list';

	$: statusColorClass = status === 'Reviewed' 
		? 'bg-mac-green border-black text-black' 
		: status === 'Draft' 
		? 'bg-mac-yellow border-black text-black' 
		: 'border-gray-400 text-gray-400 bg-transparent';
	
	$: statusStyle = status === 'Reviewed' 
		? 'background-color: rgb(163, 217, 165);' 
		: status === 'Draft' 
		? 'background-color: rgb(254, 240, 138);' 
		: '';

	$: titleClass = status === 'Pending Index'
		? 'text-gray-400 group-hover:text-black'
		: 'group-hover:text-surface-accent';

	$: descClass = status === 'Pending Index'
		? 'text-gray-400 group-hover:text-black'
		: 'text-black';
</script>

{#if viewMode === 'list'}
	<article class="flex flex-col md:flex-row {isLast ? '' : 'border-b-2 border-black'} group hover:bg-white transition-colors relative cursor-pointer bg-[#f9f9f9]" style="background-color: #f9f9f9;">
		<div class="w-full md:w-[200px] border-b-2 md:border-b-0 md:border-r-2 border-black p-6 flex items-center justify-center bg-surface-main group-hover:bg-white transition-colors relative">
			<div class="w-24 h-32 border-2 border-black {coverClass} transform group-hover:-translate-y-1 transition-transform shadow-cartoon"></div>
			{#if collection}
				<div class="absolute top-4 left-4 bg-mac-red border-2 border-black px-1 py-0.5 transform -rotate-12 shadow-sm font-label-md text-[10px] uppercase text-white z-10">{collection}</div>
			{/if}
		</div>
		<div class="flex-grow p-6 flex flex-col justify-center">
			<h4 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 {titleClass} transition-colors">{title}</h4>
			<div class="flex flex-wrap gap-2 mb-4">
				<span class="px-2 py-0.5 font-label-md text-label-md uppercase bg-opacity-50 border {statusColorClass}" style={statusStyle}>{status}</span>
				{#if category}
					<span class="border border-black px-2 py-0.5 font-label-md text-label-md uppercase bg-surface-main text-black">{category}</span>
				{/if}
			</div>
			<p class="font-body-md text-body-md max-w-2xl {descClass} transition-colors line-clamp-3">{description}</p>
		</div>
		<div class="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center w-12 h-12 bg-black text-white border-2 border-black rounded-full shadow-cartoon-sm">
			<span class="material-symbols-outlined">arrow_forward</span>
		</div>
	</article>
{:else}
	<article class="flex flex-col border-2 border-black group hover:bg-white transition-colors relative cursor-pointer bg-[#f9f9f9] h-full shadow-cartoon" style="background-color: #f9f9f9;">
		<div class="h-48 border-b-2 border-black flex items-center justify-center bg-surface-main group-hover:bg-white transition-colors relative">
			<div class="w-20 h-28 border-2 border-black {coverClass} transform group-hover:-translate-y-1 transition-transform shadow-cartoon-sm"></div>
			{#if collection}
				<div class="absolute top-3 left-3 bg-mac-red border-2 border-black px-1 py-0.5 transform -rotate-12 shadow-sm font-label-md text-[9px] uppercase text-white z-10">{collection}</div>
			{/if}
		</div>
		<div class="p-4 flex flex-col flex-grow">
			<h4 class="font-headline-lg text-xl md:text-2xl mb-2 {titleClass} transition-colors line-clamp-2">{title}</h4>
			<div class="flex flex-wrap gap-2 mb-3">
				<span class="px-1.5 py-0.5 text-[10px] font-label-md uppercase bg-opacity-50 border {statusColorClass}" style={statusStyle}>{status}</span>
				{#if category}
					<span class="border border-black px-1.5 py-0.5 text-[10px] font-label-md uppercase bg-surface-main text-black">{category}</span>
				{/if}
			</div>
			<p class="font-body-md text-sm {descClass} transition-colors line-clamp-4">{description}</p>
		</div>
		<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 bg-black text-white border-2 border-black rounded-full flex items-center justify-center">
			<span class="material-symbols-outlined text-sm">arrow_forward</span>
		</div>
	</article>
{/if}

