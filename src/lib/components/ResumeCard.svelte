<script lang="ts">
	export let period: string;
	export let location: string;
	export let title: string;
	export let tags: string[];
	export let description: string;
	export let accentColor: string = '#eeeeee';
</script>

<div
	class="bg-surface border-2 border-black shadow-cartoon flex flex-col md:flex-row rounded-none relative"
>
	<div
		class="w-full md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-black p-6 bg-secondary-container flex flex-col justify-between"
	>
		<span class="font-label-md text-label-md text-on-surface uppercase tracking-widest"
			>{period}</span
		>
		<div class="mt-4 flex items-center gap-2">
			<span
				class="material-symbols-outlined text-on-surface-variant text-sm"
				data-icon="location_on">location_on</span
			>
			<span class="font-label-md text-label-md text-on-surface-variant uppercase">{location}</span>
		</div>
	</div>
	<div
		class="w-full md:w-3/4 p-8 flex flex-col justify-center"
		style="--accent-color: {accentColor};"
	>
		<h3 class="font-headline-lg-mobile text-headline-lg-mobile mb-4">
			{title}
		</h3>
		<div class="flex gap-2 mb-4">
			{#each tags as tag}
				<span
					class="border border-black px-2 py-1 font-label-md text-[10px] uppercase bg-surface-variant"
					>{tag}</span
				>
			{/each}
		</div>
		<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
			{description}
		</p>
	</div>
</div>

