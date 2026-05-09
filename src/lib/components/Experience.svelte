<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';

	const experiences = [
		{
			period: '11/2024 — Present',
			location: 'Switzerland',
			title: 'ML Engineer, Data Scientist @ Tradition',
			tags: ['PyTorch', 'Airflow', 'LLMs'],
			description:
				'Designed and deployed a real-time recommendation system for fixed-income derivatives, generating >USD 655K in revenue. Built a GitLab-integrated LLM bot for automated CI/CD code reviews.'
		},
		{
			period: '09/2023 — 02/2024',
			location: 'Switzerland',
			title: 'Computer Vision Engineer @ AXA',
			tags: ['PyTorch', 'Computer Vision', 'MLOps'],
			description:
				'Built a production-ready Computer Vision system for automated actuarial risk identification using satellite imagery. Engineered a highly efficient MLOps pipeline accelerating R&D velocity.'
		},
		{
			period: '01/2020 — 09/2021',
			location: 'Thailand',
			title: 'Software Engineer & Co-Founder @ Inside the Sandbox',
			tags: ['Svelte', 'React', 'Firebase'],
			description:
				'Co-founded and developed interactive storytelling websites for digital marketing campaigns, with one campaign attracting >1M organic users on launch day and trending #1 on Twitter in Thailand.'
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
			<h2 class="font-headline-lg text-headline-lg text-on-background">Resume</h2>
		</div>
		<div class="flex flex-col gap-8">
			{#each experiences as exp}
				<ExperienceCard {...exp} />
			{/each}
		</div>
	</div>
</section>
