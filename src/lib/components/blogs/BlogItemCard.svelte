<script lang="ts">
	export let title: string;
	export let slug: string;
	export let description: string;
	export let date: string;
	export let imageUrl: string;
	export let imageAlt: string = title;
	export let borderClass: string = 'border-b-2 border-black';

	$: href = `/blogs/${slug}`;
</script>

<a {href} class="group block {borderClass} bg-surface hover:bg-surface-variant transition-colors relative overflow-hidden md:h-[300px]">
	<div class="grid grid-cols-1 md:grid-cols-[1fr_350px] md:group-hover:grid-cols-[1fr_450px] transition-[grid-template-columns] duration-500 ease-out gap-0 h-full">
		<!-- Left Column: Content -->
		<div class="p-6 md:p-10 flex flex-col justify-center md:border-r-2 border-black">
			<h3 class="font-headline-lg text-[24px] md:text-[32px] leading-tight uppercase break-words hyphens-auto mb-4 group-hover:underline decoration-2 underline-offset-4">
				{title.replace(/<br\s*\/?>/gi, ' ')}
			</h3>
			<p class="font-body-md text-on-surface-variant mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
				{description}
			</p>
			<p class="font-nav-lg text-on-surface-variant opacity-60 uppercase text-[12px] font-bold mt-auto">{date}</p>
		</div>
		
		<!-- Right Column: Image -->
		<div class="h-[300px] md:h-full relative overflow-hidden bg-surface-variant border-t-2 md:border-t-0 border-black md:border-none">
			<img 
				src={imageUrl} 
				alt={imageAlt} 
				class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
				loading="lazy"
			/>
		</div>
	</div>
</a>
