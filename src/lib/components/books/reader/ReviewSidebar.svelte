<script lang="ts">
	export let author: string;
	export let rating: number;
	export let dateRead: string;
	export let category: string;
	export let isbn: string;
	export let coverSource: string;
</script>

<aside
	class="w-full md:w-[300px] flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-black p-margin-mobile md:p-margin-desktop flex flex-col gap-8 bg-surface-main"
>
	<div class="flex flex-col gap-2">
		<h3
			class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start"
		>
			Author
		</h3>
		<p class="font-body-lg text-body-lg font-bold">{author}</p>
	</div>

	<div class="flex flex-col gap-2">
		<h3
			class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start"
		>
			Rating
		</h3>
		<div class="flex gap-1">
			{#each Array(5) as _, i}
				<span
					class="material-symbols-outlined text-black"
					style="font-variation-settings: 'FILL' {i < rating ? 1 : 0};"
				>
					star
				</span>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<h3
			class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start"
		>
			Date Read
		</h3>
		<p class="font-body-md text-body-md">{dateRead}</p>
	</div>

	<div class="flex flex-col gap-2">
		<h3
			class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start"
		>
			Category
		</h3>
		<div class="flex flex-wrap gap-2 mt-2">
			<span
				class="border-2 border-black px-2 py-1 bg-white font-label-md text-label-md shadow-cartoon-sm"
			>
				{category.toUpperCase()}
			</span>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<h3
			class="font-label-caps text-label-caps text-surface-accent border-b-2 border-black pb-1 uppercase inline-block self-start"
		>
			Cover Source
		</h3>
		<p class="font-body-md text-body-md italic opacity-70">{coverSource}</p>
	</div>
</aside>
