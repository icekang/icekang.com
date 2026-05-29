<script lang="ts">
	import type { BlogContentBlock } from '$lib/data/blogs';
	import RetroWindow from '../RetroWindow.svelte';

	export let content: BlogContentBlock[];
</script>

<div class="flex flex-col gap-24 max-w-6xl mx-auto py-24 px-6 md:px-12">
	{#each content as block}
		{#if block.type === 'paragraph'}
			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
				<div class="md:col-span-4">
					{#if block.heading}
						<h2 class="font-headline-lg text-4xl md:text-5xl uppercase leading-[0.9] tracking-tighter border-b-2 border-black pb-4">
							{block.heading}
						</h2>
					{/if}
				</div>
				<div class="md:col-span-8">
					<p class="font-body-md text-2xl leading-relaxed text-black/90 antialiased">
						{block.text}
					</p>
				</div>
			</div>

		{:else if block.type === 'quote'}
			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-y-2 border-black/10">
				<div class="md:col-start-4 md:col-span-9">
					<blockquote class="relative">
						<p class="font-headline-lg mb-8 {block.size === 'sm' ? 'text-xl md:text-2xl' : block.size === 'md' ? 'text-2xl md:text-3.5xl' : 'text-3.5xl md:text-5xl'} {block.weight === 'light' ? 'font-light' : block.weight === 'normal' ? 'font-normal' : block.weight === 'medium' ? 'font-medium' : block.weight === 'bold' ? 'font-bold' : 'font-light'} {block.uppercase ? 'uppercase' : ''} {block.leading === 'ultra-tight' ? 'leading-[0.85]' : block.leading === 'tight' ? 'leading-[1.1]' : block.leading === 'relaxed' ? 'leading-relaxed' : 'leading-[1.3]'} {block.tracking === 'ultra-tight' ? 'tracking-[-0.05em]' : block.tracking === 'tight' ? 'tracking-tight' : 'tracking-normal'}">
							"{block.text}"
						</p>
						{#if block.author}
							<cite class="font-nav-lg uppercase text-lg font-black tracking-widest not-italic flex items-center gap-4">
								<span class="w-12 h-1 bg-primary"></span>
								{block.author}
							</cite>
						{/if}
					</blockquote>
				</div>
			</div>

		{:else if block.type === 'code'}
			<div class="md:col-span-12 my-12">
				<RetroWindow title="{block.language || 'SOURCE_CODE'} v1.0.0" headerClass="bg-black text-white px-4 py-2 border-b-2 border-black" contentClass="p-8 bg-white overflow-x-auto">
					<pre class="relative font-mono text-lg text-black selection:bg-primary selection:text-white leading-relaxed"><code>{block.code}</code></pre>
				</RetroWindow>
			</div>

		{:else if block.type === 'image'}
			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 my-12">
				<div class={block.layout === 'inset' ? 'md:col-start-3 md:col-span-8' : 'md:col-span-12'}>
					<figure class="flex flex-col gap-4">
						<div class="bg-surface-variant overflow-hidden">
							<img src={block.url} alt={block.caption || 'Archive Image'} class="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
						</div>
						{#if block.caption}
							<figcaption class="font-nav-lg text-sm uppercase font-bold tracking-[0.2em] opacity-40 text-right">
								// {block.caption}
							</figcaption>
						{/if}
					</figure>
				</div>
			</div>

		{:else if block.type === 'youtube'}
			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 my-12">
				<div class="md:col-start-2 md:col-span-10">
					<figure class="flex flex-col gap-4">
						<div class="aspect-video w-full border-2 border-black overflow-hidden bg-black relative">
							<iframe
								class="absolute inset-0 w-full h-full"
								src="https://www.youtube.com/embed/{block.videoId}{block.start ? `?start=${block.start}` : ''}"
								title={block.caption || "YouTube video player"}
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						{#if block.caption}
							<figcaption class="font-nav-lg text-sm uppercase font-bold tracking-[0.2em] opacity-40 text-right">
								// {block.caption}
							</figcaption>
						{/if}
					</figure>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.blueprint-pattern {
		background-color: #f9f9f9;
	}
</style>
