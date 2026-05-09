<script lang="ts">
	export let title: string;
	export let authors: string;
	export let description: string;
	export let link: string = "#";

	$: formattedAuthors = authors.replace(
		'Naravich Chutisilp',
		'<mark class="bg-yellow-300 text-black font-bold px-1 rounded-sm">Naravich Chutisilp</mark>'
	);
</script>

<div class="p-10 bg-surface border-b-2 border-black relative z-10">
	<article class="border-2 border-black p-8 shadow-cartoon bg-surface-container-lowest">
		<div class="flex flex-col md:flex-row justify-between items-start gap-6">
			<div>
				<h3 class="font-headline-lg text-[40px] leading-tight mb-4 uppercase">{title}</h3>
				<p class="font-body-md mb-4 text-on-surface"><span class="font-bold">Authors:</span> {@html formattedAuthors}</p>
				<p class="font-body-md text-on-surface-variant italic">
					{description}
				</p>
			</div>
			<a class="border-2 border-black px-6 py-2 uppercase font-bold hover:bg-black hover:text-white transition-colors flex items-center gap-2" href={link} target="_blank" rel="noopener noreferrer">
				PDF <span class="material-symbols-outlined text-sm">open_in_new</span>
			</a>
		</div>
	</article>
</div>
