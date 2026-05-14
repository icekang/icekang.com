<script lang="ts">
	export let title: string;
	export let description: string;
	export let tags: string[] = [];
	export let borderClass: string = 'border-b-2 md:border-b-0 md:border-r-2 border-black';
	export let index: number | undefined = undefined;
</script>

<article class="p-6 md:p-10 {borderClass} bg-surface transition-shadow relative overflow-hidden">
	{#if index !== undefined}
		<span
			class="absolute top-4 left-4 font-headline-lg font-black text-on-surface/30 text-xl leading-none"
			>{index + 1}.</span
		>
	{/if}
	<h3
		class="font-headline-lg text-[24px] md:text-[32px] mb-4 pt-6 md:pt-0 uppercase break-words hyphens-auto"
	>
		{title}
	</h3>
	<p class="font-body-md text-on-surface-variant mb-6">
		{description}
	</p>
	{#if tags.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span
					class="border border-black px-2 py-1 text-[10px] font-bold bg-surface-variant uppercase"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}
</article>
