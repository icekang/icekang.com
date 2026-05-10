<script>
	import newspaperAnim from '$lib/images/newspaper_anim.webp';
</script>

<section class="flex flex-col md:flex-row min-h-[40vh] border-b-2 border-black bg-surface-main">
	<!-- Left Column: Branding and Text -->
	<div
		class="w-full md:w-3/4 flex flex-col relative border-r-2 border-black h-full min-h-[40vh] bg-[#f9f9f9] p-margin-desktop"
	>
		<!-- Icon stays absolute to this container -->
		<div
			class="absolute top-10 right-8 w-12 h-12 border-2 border-black shadow-cartoon transform rotate-12 flex items-center justify-center text-white bg-[#005baa]"
		>
			<span class="material-symbols-outlined text-2xl">book</span>
		</div>

		<div class="mt-auto flex flex-col gap-4">
			<h1 class="font-headline-xl text-[88px] italic tracking-tighter leading-none text-[#005baa]">
				Book Reviews
			</h1>
			<p class="font-body-lg text-body-lg max-w-sm mb-6 text-black">
				A technical directory of literature. Structural analysis of narrative forms.
			</p>
		</div>
	</div>
	<!-- Right Column: Mascot Illustration -->
	<div
		class="w-full md:w-1/4 bg-surface-main p-margin-desktop flex items-center justify-center relative blueprint-pattern bg-blueprint"
	>
		<img
			alt="Anthropomorphic newspaper reading itself illustration"
			class="max-w-full max-h-[30vh] object-contain h-auto opacity-90 relative z-10"
			src={newspaperAnim}
		/>
	</div>
</section>
