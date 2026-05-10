<script lang="ts">
	export let subtitle: string;
	export let paragraphs: string[];
	export let quote: string;
	export let motifs: Array<{ title: string; description: string }>;
	export let articleRef: HTMLElement;
</script>

<article bind:this={articleRef} class="w-full p-margin-mobile md:p-margin-desktop max-w-4xl bg-white relative">
	<h2 class="font-headline-lg text-headline-lg mb-8">{subtitle}</h2>
	<div class="space-y-6 font-body-lg text-body-lg leading-relaxed">
		{#each paragraphs as paragraph, i}
			<p class={i === 0 ? 'first-letter:text-7xl first-letter:font-bold first-letter:text-surface-accent first-letter:mr-3 first-letter:float-left' : ''}>
				{paragraph}
			</p>
		{/each}

		<div class="my-12 p-8 border-2 border-black bg-surface-main shadow-cartoon relative transform rotate-1 hover:rotate-0 transition-transform">
			<span aria-hidden="true" class="absolute -left-6 -top-6 text-6xl">👇</span>
			<blockquote class="font-headline-lg text-headline-lg italic text-center">
				"{quote}"
			</blockquote>
		</div>

		<h3 class="font-headline-md text-2xl font-bold mt-12 mb-6 border-b-2 border-black inline-block pb-2">
			Core Narrative Motifs
		</h3>
		<ul class="space-y-4 pl-4">
			{#each motifs as motif}
				<li class="flex items-start gap-4">
					<span class="text-2xl mt-1">👉</span>
					<div>
						<strong class="block mb-1">{motif.title}</strong>
						<span>{motif.description}</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</article>
