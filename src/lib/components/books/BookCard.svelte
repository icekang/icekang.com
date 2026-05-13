<script lang="ts">
	export let id: string;
	export let title: string;
	export let description: string;
	export let status: 'Reviewed' | 'Draft' | 'Pending Index' | 'Read' | 'Reading';
	export let category: string = '';
	export let collection: string | null = null;
	export let coverClass: string = 'bg-surface-accent';
	export let isLast: boolean = false;
	export let viewMode: 'grid' | 'list' = 'list';
	export let isbn: string = '';
	export let rating: number = 0;
	export let dateRead: string = '';

	let coverUrl = isbn
		? `https://books.google.com/books/content?vid=ISBN${isbn}&printsec=frontcover&img=1&zoom=2`
		: '';
	let coverSource = 'Google Books';

	function handleImageLoad(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		// Google Books placeholder signatures:
		// Small: 128x192 or 128x170
		// High-res (zoom=2/3): 575x750
		if (
			(img.naturalWidth === 128 && (img.naturalHeight === 192 || img.naturalHeight === 170)) ||
			(img.naturalWidth === 575 && img.naturalHeight === 750)
		) {
			handleImageError();
		}
	}

	function handleImageError() {
		if (isbn) {
			coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
			coverSource = 'Open Library';
		} else {
			coverUrl = '';
		}
	}

	$: statusColorClass =
		status === 'Reviewed'
			? 'bg-mac-green border-black text-black'
			: status === 'Draft' || status === 'Read'
				? 'bg-mac-yellow border-black text-black'
				: status === 'Reading'
					? 'bg-surface-accent border-black text-white'
					: 'border-gray-400 text-gray-400 bg-transparent';

	$: statusStyle =
		status === 'Reviewed'
			? 'background-color: rgb(163, 217, 165);'
			: status === 'Draft' || status === 'Read'
				? 'background-color: rgb(254, 240, 138);'
				: status === 'Reading'
					? 'background-color: #3b82f6;'
					: '';

	$: titleClass =
		status === 'Pending Index' || status === 'Read'
			? 'text-gray-400'
			: 'group-hover:text-surface-accent';

	$: descClass = status === 'Pending Index' || status === 'Read' ? 'text-gray-400' : 'text-black';

	$: isClickable = status === 'Reviewed' || status === 'Draft';
</script>

{#if viewMode === 'list'}
	<svelte:element
		this={isClickable ? 'a' : 'div'}
		href={isClickable ? `/books/${id}` : undefined}
		class="block h-full {isClickable ? '' : 'cursor-default'}"
	>
		<article
			class="flex flex-row {isLast
				? ''
				: 'border-b-2 border-black'} {isClickable ? 'group hover:bg-white cursor-pointer' : 'cursor-default'} transition-colors relative bg-[#f9f9f9]"
			style="background-color: #f9f9f9;"
		>
			<div
				class="w-1/3 md:w-[200px] border-r-2 border-black p-4 md:p-6 flex-shrink-0 flex flex-col items-center justify-center bg-surface-main {isClickable ? 'group-hover:bg-white' : ''} transition-colors relative"
			>
				<div class="relative transform {isClickable ? 'group-hover:-translate-y-1' : ''} transition-transform mb-2">
					<div
						class="w-24 h-32 border-2 border-black {coverClass} shadow-cartoon overflow-hidden relative"
					>
						{#if coverUrl}
							<img
								src={coverUrl}
								on:load={handleImageLoad}
								on:error={handleImageError}
								alt={title}
								class="w-full h-full object-cover"
							/>
						{/if}
					</div>
					{#if collection}
						<div
							class="absolute -top-2 -left-2 bg-mac-red border-2 border-black px-1 py-0.5 transform -rotate-12 shadow-sm font-label-md text-[10px] uppercase text-white z-20 whitespace-nowrap"
						>
							{collection}
						</div>
					{/if}
				</div>
				<span class="text-[9px] italic opacity-30 uppercase tracking-tighter"
					>Source: {coverSource}</span
				>
			</div>
			<div class="flex-grow p-6 flex flex-col justify-center">
				<h4
					class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 {titleClass} transition-colors"
				>
					{title}
				</h4>
				<div class="flex flex-wrap gap-2 mb-4 items-center">
					<span
						class="px-2 py-0.5 font-label-md text-label-md uppercase bg-opacity-50 border {statusColorClass}"
						style={statusStyle}>{status}</span
					>
					{#if category}
						<span
							class="border border-black px-2 py-1 font-label-md text-label-md uppercase bg-surface-main text-black"
							>{category}</span
						>
					{/if}

					{#if rating > 0}
						<div class="flex items-center gap-0.5 ml-2 border-l border-black/10 pl-2">
							{#each Array(5) as _, i}
								{#if i + 1 <= rating}
									<span
										class="material-symbols-outlined text-[14px] text-black"
										style="font-variation-settings: 'FILL' 1;">star</span
									>
								{:else if i < rating}
									<span
										class="material-symbols-outlined text-[14px] text-black"
										style="font-variation-settings: 'FILL' 1;">star_half</span
									>
								{:else}
									<span
										class="material-symbols-outlined text-[14px] text-black"
										style="font-variation-settings: 'FILL' 0;">star</span
									>
								{/if}
							{/each}
						</div>
					{/if}

					{#if dateRead}
						<span class="text-[10px] font-label-md uppercase opacity-40 md:ml-auto">
							Read: {dateRead}
						</span>
					{/if}
				</div>
				<p class="font-body-md text-body-md max-w-2xl {descClass} transition-colors line-clamp-3">
					{description}
				</p>
			</div>
			{#if isClickable}
				<div
					class="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center w-12 h-12 bg-surface-accent text-white border-2 border-black rounded-full shadow-cartoon-sm"
				>
					<span class="material-symbols-outlined">arrow_forward</span>
				</div>
			{/if}
		</article>
	</svelte:element>
{:else}
	<svelte:element
		this={isClickable ? 'a' : 'div'}
		href={isClickable ? `/books/${id}` : undefined}
		class="block h-full {isClickable ? '' : 'cursor-default'}"
	>
		<article
			class="flex flex-col border-2 border-black transition-colors relative {isClickable
				? 'group hover:bg-white cursor-pointer'
				: 'cursor-default'} bg-[#f9f9f9] h-full shadow-cartoon"
			style="background-color: #f9f9f9;"
		>
			<div
				class="h-72 border-b-2 border-black flex items-center justify-center bg-surface-main {isClickable ? 'group-hover:bg-white' : ''} transition-colors relative overflow-hidden"
			>
				{#if coverUrl}
					<img
						src={coverUrl}
						on:load={handleImageLoad}
						on:error={handleImageError}
						alt={title}
						class="w-full h-full object-cover transition-transform duration-500 {isClickable
							? 'group-hover:scale-110'
							: ''} opacity-90 group-hover:opacity-100"
					/>
				{/if}
				{#if collection}
					<div
						class="absolute top-3 left-3 bg-mac-red border-2 border-black px-1 py-0.5 transform -rotate-12 shadow-sm font-label-md text-[9px] uppercase text-white z-10"
					>
						{collection}
					</div>
				{/if}
				<div
					class="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm border border-black px-1.5 py-0.5 text-[8px] italic opacity-60"
				>
					Source: {coverSource}
				</div>
			</div>
			<div class="p-4 flex flex-col flex-grow">
				<h4
					class="font-headline-lg text-xl md:text-2xl mb-2 {titleClass} transition-colors line-clamp-2"
				>
					{title}
				</h4>
				<div class="flex flex-wrap gap-2 mb-3">
					<span
						class="px-1.5 py-0.5 text-[10px] font-label-md uppercase bg-opacity-50 border {statusColorClass}"
						style={statusStyle}>{status}</span
					>
					{#if category}
						<span
							class="border border-black px-1.5 py-0.5 text-[10px] font-label-md uppercase bg-surface-main text-black"
							>{category}</span
						>
					{/if}
				</div>
				<p class="font-body-md text-sm {descClass} transition-colors line-clamp-4">{description}</p>
			</div>
			{#if isClickable}
				<div
					class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 bg-surface-accent text-white border-2 border-black rounded-full flex items-center justify-center shadow-cartoon-sm"
				>
					<span class="material-symbols-outlined text-sm">arrow_forward</span>
				</div>
			{/if}
		</article>
	</svelte:element>
{/if}
