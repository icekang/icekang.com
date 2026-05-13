<script lang="ts">
	export let period: string;
	export let company: string;
	export let role: string;
	export let description: string;
	export let tags: string[] = [];
	export let borderClass: string = 'border-b-2 md:border-b-0 md:border-r-2 border-black';
	export let index: number | undefined = undefined;
</script>

<article
	class="p-6 md:p-10 {borderClass} bg-surface hover:shadow-cartoon transition-shadow relative overflow-hidden"
>
	{#if index !== undefined}
		<span
			class="absolute top-4 left-4 font-headline-lg font-black text-on-surface/30 text-xl leading-none"
			>{index + 1}.</span
		>
	{/if}
	<div class="flex flex-col h-full pt-6 md:pt-0">
		<div class="mb-6">
			<p class="font-nav-lg text-primary uppercase text-[12px] font-bold mb-2">{period}</p>
			<h3
				class="font-headline-lg text-[24px] md:text-[32px] leading-tight uppercase break-words hyphens-auto"
			>
				{company}
			</h3>
			<p class="italic uppercase font-bold text-sm">{role}</p>
		</div>
		<p class="font-body-md text-on-surface-variant flex-grow">
			{description}
		</p>
		{#if tags.length > 0}
			<div class="mt-6 flex gap-2 flex-wrap">
				{#each tags as tag}
					<span
						class="border border-black px-2 py-1 text-[10px] font-bold uppercase bg-surface-variant"
						>{tag}</span
					>
				{/each}
			</div>
		{/if}
	</div>
</article>
