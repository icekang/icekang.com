<script>
	import newspaperAnim from '$lib/images/newspaper_anim.webp';
</script>

<section
	class="flex flex-col md:flex-row min-h-[40vh] border-b-2 border-black bg-surface-main items-stretch"
>
	<!-- Left Column: Branding and Text -->
	<div
		class="w-full md:w-3/5 flex flex-col relative border-0 md:border-r-2 border-black bg-[#f9f9f9] p-margin-desktop"
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
		class="w-full md:w-2/5 bg-surface-main p-margin-desktop flex items-center justify-center relative blueprint-pattern bg-blueprint"
	>
		<img
			alt="Anthropomorphic newspaper reading itself illustration"
			class="w-full h-auto max-h-[35vh] scale-110 object-contain opacity-90 relative z-10 animate-float"
			src={newspaperAnim}
		/>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0) scale(1.1); }
		50% { transform: translateY(-10px) scale(1.12); }
	}
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
</style>
