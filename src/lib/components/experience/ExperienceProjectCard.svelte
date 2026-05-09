<script lang="ts">
	export let title: string;
	export let description: string;
	export let tags: string[] = [];
	export let borderClass: string = "border-b-2 md:border-b-0 md:border-r-2 border-black";
</script>

<article class="p-10 {borderClass} bg-surface hover:shadow-cartoon transition-shadow">
	<h3 class="font-headline-lg text-[32px] mb-4 uppercase">{title}</h3>
	<p class="font-body-md text-on-surface-variant mb-6">
		{description}
	</p>
	{#if tags.length > 0}
		<div class="flex gap-2">
			{#each tags as tag}
				<span class="border border-black px-2 py-1 text-[10px] font-bold bg-surface-variant uppercase">{tag}</span>
			{/each}
		</div>
	{/if}
</article>
