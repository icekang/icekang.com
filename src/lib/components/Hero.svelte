<script lang="ts">
	import portrait from '$lib/images/naravich-portrait.png';

	function scrollToResume(e: MouseEvent) {
		e.preventDefault();
		const resumeSection = document.getElementById('resume');
		if (resumeSection) {
			resumeSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section class="flex flex-col md:flex-row min-h-[80vh] border-b-2 border-black relative">
	<!-- Left 50% -->
	<div
		class="w-full md:w-1/2 bg-primary-container flex flex-col justify-center items-start px-margin-mobile md:px-margin-desktop py-20 border-b-2 md:border-b-0 md:border-r-2 border-black relative z-10 overflow-visible"
	>
		<h1
			class="font-headline-xl text-headline-lg md:font-headline-xl md:text-headline-xl text-on-surface uppercase bg-surface-container-lowest border-2 border-black p-4 md:p-8 shadow-cartoon mb-8 inline-block -rotate-3"
		>
			NARAVICH CHUTISILP
		</h1>
		<div
			class="bg-surface-container-lowest border-2 border-black p-4 mb-6 max-w-sm shadow-cartoon rotate-1"
		>
			<p class="font-body-md text-body-md text-on-surface">
				Machine Learning Engineer & Researcher specializing in real-time ML/AI financial systems,
				Computer Vision, and Generative AI.
			</p>
		</div>
		<a
			href="#resume"
			on:click={scrollToResume}
			class="bg-primary-container text-on-primary px-8 py-4 font-nav-lg text-nav-lg uppercase tracking-widest border-2 border-black shadow-cartoon hover:scale-95 transition-transform duration-75 rounded-none inline-block"
			>VIEW WORK ↓</a
		>
		<!-- Floating Nameplate -->
		<div
			class="absolute top-1/4 -right-8 w-16 h-16 bg-surface border-2 border-black shadow-cartoon-sm hidden md:flex items-center justify-center rotate-6 z-20"
		>
			<span class="material-symbols-outlined text-3xl">ads_click</span>
		</div>
		<div
			class="absolute bottom-1/4 -left-4 w-20 h-20 bg-surface border-2 border-black shadow-cartoon hidden md:flex items-center justify-center -rotate-12 z-20"
		>
			<span class="material-symbols-outlined text-4xl">science</span>
		</div>
		<div
			class="absolute top-1/2 -right-4 w-12 h-12 bg-surface border-2 border-black shadow-cartoon-sm hidden md:flex items-center justify-center rotate-12 z-20"
		>
			<span class="material-symbols-outlined text-2xl">architecture</span>
		</div>
	</div>
	<!-- Right 50% -->
	<div
		class="w-full md:w-1/2 bg-surface flex justify-center items-center p-8 relative overflow-hidden"
	>
		<!-- Blueprint subtle grid on right side -->
		<div class="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
		<div
			class="relative w-full max-w-lg aspect-square border-2 border-black shadow-cartoon bg-surface-container flex items-center justify-center overflow-hidden"
		>
			<div
				class="absolute top-0 left-0 w-full h-8 bg-surface border-b-2 border-black flex items-center px-4 gap-2 z-20"
			>
				<div class="w-3 h-3 rounded-full bg-[#FF5F57] border border-black"></div>
				<div class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black"></div>
				<div class="w-3 h-3 rounded-full bg-[#28C840] border border-black"></div>
			</div>
			<img
				alt="Naravich Chutisilp"
				class="w-full h-full object-cover object-center"
				src={portrait}
			/>
			<!-- Decorative rubber hose accent -->
		</div>
	</div>
</section>
