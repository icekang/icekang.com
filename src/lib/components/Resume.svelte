<script lang="ts">
	import ResumeCard from './ResumeCard.svelte';
	import { goto } from '$app/navigation';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	const experiences = [
		{
			period: '11/2024 — Present',
			location: 'Switzerland',
			title: 'ML Engineer, Data Scientist @ Tradition',
			tags: ['PyTorch', 'Airflow', 'LLMs'],
			description:
				'Designed and deployed a real-time recommendation system for fixed-income derivatives, generating >USD 873K in revenue. Built a GitLab-integrated LLM bot for automated CI/CD code reviews.',
			accentColor: '#d5e3ff'
		},
		{
			period: '09/2023 — 02/2024',
			location: 'Switzerland',
			title: 'Computer Vision Engineer @ AXA',
			tags: ['PyTorch', 'Computer Vision', 'MLOps'],
			description:
				'Built a production-ready Computer Vision system for automated actuarial risk identification using satellite imagery. Engineered a highly efficient MLOps pipeline accelerating R&D velocity.',
			accentColor: '#ffdad6'
		},
		{
			period: '01/2020 — 09/2021',
			location: 'Thailand',
			title: 'Software Engineer & Co-Founder @ Inside the Sandbox',
			tags: ['Svelte', 'React', 'Firebase'],
			description:
				'Co-founded and developed interactive storytelling websites for digital marketing campaigns, with one campaign attracting >1M organic users on launch day and trending #1 on Twitter in Thailand.',
			accentColor: '#e3e3de'
		}
	];

	let buttonRect = { top: 0, left: 0, width: 0, height: 0 };
	let isExpanding = false;
	const scale = tweened(1, { duration: 1000, easing: cubicInOut });

	function gotoCV(e: MouseEvent) {
		const target = e.currentTarget as HTMLElement;
		buttonRect = target.getBoundingClientRect();
		isExpanding = true;
		
		scale.set(300); // Expanding scale factor
		
		setTimeout(() => {
			goto('/experience');
			// Reset the state so the home page returns to normal if they navigate back
			setTimeout(() => {
				isExpanding = false;
				scale.set(1, { duration: 0 });
			}, 500);
		}, 1000);
	}
</script>

<section
	class="bg-surface-container-low min-h-screen relative border-b-2 border-black pb-20"
	id="resume"
>
	<!-- Blueprint Grid Background -->
	<div class="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none"></div>
	<div class="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-20">
		<div class="mb-12 border-b-2 border-black inline-block pb-2">
			<h2 class="font-headline-lg text-headline-lg text-on-background">Resume</h2>
		</div>
		<div class="flex flex-col gap-8">
			{#each experiences as exp}
				<ResumeCard {...exp} />
			{/each}
		</div>

		<div class="mt-16 flex justify-center relative">
			<button 
				on:click={gotoCV}
				class="bg-primary text-on-primary font-nav-lg text-[20px] uppercase tracking-widest px-8 py-4 shadow-cartoon hover:scale-95 transition-transform duration-75 border-2 border-black rounded-none relative overflow-hidden"
			>
				FULL CV
			</button>
		</div>
	</div>

	{#if isExpanding}
		<div 
			class="fixed z-[100] bg-primary rounded-full pointer-events-none"
			style="
				top: {buttonRect.top + buttonRect.height/2}px; 
				left: {buttonRect.left + buttonRect.width/2}px; 
				width: 10px; 
				height: 10px; 
				transform: translate(-50%, -50%) scale({$scale});
			"
		></div>
	{/if}
</section>
