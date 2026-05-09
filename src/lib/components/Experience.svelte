<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';

	const experiences = [
		{
			period: '2022 — Present',
			location: 'Zürich, CH',
			title: 'Alpha Wrap Algorithm',
			tags: ['WebAssembly', 'Rust'],
			description:
				'Engineered a high-performance quantitative wrapper utilizing WebAssembly to isolate predictive models, ensuring strict memory safety while maintaining low latency across distributed node environments.'
		},
		{
			period: '2020 — 2022',
			location: 'Geneva, CH',
			title: 'Project EPIC',
			tags: ['Polars', 'Python'],
			description:
				'Led the migration of legacy Pandas pipelines to Polars, achieving a 40x speedup in daily ingestion of macroeconomic datasets for algorithmic trading models. Designed the foundational schema for real-time validation.'
		},
		{
			period: '2018 — 2020',
			location: 'Lausanne, CH',
			title: 'Tooling Architecture',
			tags: ['uv', 'Ruff'],
			description:
				'Advocated and implemented a modernized Python development ecosystem relying on uv and Ruff. Reduced CI/CD times by 60% and established a unified linter standard across 40+ micro-repositories.'
		}
	];
</script>

<section
	class="bg-surface-container-low min-h-screen relative border-b-2 border-black pb-20"
	id="experience"
>
	<!-- Blueprint Grid Background -->
	<div class="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none"></div>
	<div class="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-20">
		<div class="mb-12 border-b-2 border-black inline-block pb-2">
			<h2 class="font-headline-lg text-headline-lg text-on-background">Experience Engine</h2>
		</div>
		<div class="flex flex-col gap-8">
			{#each experiences as exp}
				<ExperienceCard {...exp} />
			{/each}
		</div>
	</div>
</section>
