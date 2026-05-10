<script lang="ts">
	import { onMount } from 'svelte';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ExperienceSidebar from '$lib/components/experience/ExperienceSidebar.svelte';
	import ExperienceSectionHeader from '$lib/components/experience/ExperienceSectionHeader.svelte';
	import ExperienceWorkCard from '$lib/components/experience/ExperienceWorkCard.svelte';
	import ExperiencePubCard from '$lib/components/experience/ExperiencePubCard.svelte';
	import ExperienceProjectCard from '$lib/components/experience/ExperienceProjectCard.svelte';

	const workItems = [
		{
			period: '11/2024 ‐ Present',
			company: 'Tradition',
			role: 'ML Engineer, Data Scientist',
			description:
				'Designed and deployed a real-time recommendation system for fixed-incomes & derivatives. Initiated a GitLab-integrated LLM bot for automated CI/CD code reviews and built LLM pipelines for data extraction.',
			tags: ['PyTorch', 'MLFlow', 'Airflow', 'LLM'],
			borderClass: 'border-b-2 md:border-r-2 border-black'
		},
		{
			period: '09/2023 ‐ 02/2024',
			company: 'AXA',
			role: 'Computer Vision Engineer, Data Scientist Intern',
			description:
				'Built a production-ready Computer Vision system leveraging satellite imagery for automated actuarial risk identification. Engineered a highly efficient scalable MLOps pipeline for imagery segmentation.',
			tags: ['PyTorch', 'TIMM', 'Python', 'JavaScript'],
			borderClass: 'border-b-2 border-black'
		},
		{
			period: '10/2022 ‐ 08/2023',
			company: 'EPFL',
			role: 'Research Assistant (3D Computer Vision)',
			description:
				'Developed a 6-DoF pose estimation and 3D object tracking system for carpentry tool heads. Integrated the project into Augmented Reality software employing real-time SLAM.',
			tags: ['C++', 'OpenCV', 'OpenGL', 'SLAM'],
			borderClass: 'border-b-2 md:border-r-2 border-black'
		},
		{
			period: '01/2020 ‐ 09/2021',
			company: 'Inside the Sandbox',
			role: 'Software Engineer / Co-Founder',
			description:
				'Developed interactive storytelling websites for digital marketing campaigns. Co-founded the company with a campaign attracting >1M organic users on launch day, trending #1 on Twitter in Thailand.',
			tags: ['React', 'Svelte', 'Firebase', 'Docker'],
			borderClass: 'border-b-2 border-black'
		},
		{
			period: '01/2021 ‐ 04/2021',
			company: 'Siam Commercial Bank',
			role: 'Data Scientist',
			description:
				'Built an ML platform accommodating >20 financial data sources and visualization requirements using Azure, Spark, and SQL. Currently used by the marketing team to find leads.',
			tags: ['Azure', 'Spark', 'SQL'],
			borderClass: 'border-b-2 md:border-r-2 border-black'
		},
		{
			period: '06/2020 ‐ 08/2020',
			company: 'Taskworld',
			role: 'Software Engineer Intern',
			description:
				'Implemented scroll virtualisation of the product application enabling >1,000 items to be rendered without lagging. Optimized page rendering by restructuring Redux store.',
			tags: ['ReactJS', 'TypeScript', 'Redux'],
			borderClass: 'border-b-2 border-black'
		},
		{
			period: '06/2019 ‐ 01/2020',
			company: 'WorldQuant',
			role: 'Software Engineer',
			description:
				'Built a data visualization dashboard helping quantitative analysts monitor >1K alphas and performance metrics. Automated excel report generation for office management.',
			tags: ['Python', 'Dash', 'Pandas'],
			borderClass: 'border-b-2 md:border-b-0 md:border-r-2 border-black'
		},
		{
			period: '06/2018 ‐ 08/2018',
			company: 'HOME dot TECH',
			role: 'Data Scientist Intern',
			description:
				'Analyzed unsupervised learning clustering algorithms with Scikit-Learn. Compared similarity algorithms within K-Means projects to assess impact on result variations.',
			tags: ['Scikit-Learn', 'K-Means'],
			borderClass: 'border-b-2 md:border-b-0 border-black'
		}
	];

	const eduItems = [
		{
			period: '03/2024 - 10/2024',
			company: 'MIT',
			role: "Master's Thesis (3D Computer Vision & Machine Learning)",
			description:
				'Conducted an extensive comparative study on 3D arterial plaque segmentation, benchmarking 3D Multimodal self-supervised learning against an optimized supervised baseline.',
			tags: [],
			borderClass: 'border-b-2 md:border-r-2 border-black'
		},
		{
			period: '09/2021 - 09/2024',
			company: 'EPFL',
			role: 'M.Sc Computer Science',
			description: 'GPA: 5.70 / 6.00',
			tags: [],
			borderClass: 'border-b-2 border-black'
		},
		{
			period: '08/2017 - 05/2021',
			company: 'Chulalongkorn University',
			role: 'B.Eng Computer Engineering',
			description: 'Valedictorian (First Class Honors with Gold Medal) - GPA: 3.99 / 4.00',
			tags: [],
			borderClass: 'md:border-b-0 md:border-r-2 border-black'
		}
	];

	const pubItems = [
		{
			title:
				'CardioComposer: Leveraging Differentiable Geometry for Compositional Control of Anatomical Diffusion Models',
			authors:
				'Karim Kadry, Shoaib A. Goraya, Ajay Manicka, Abdalla Abdelwahed, Naravich Chutisilp, Farhad R. Nezami, Elazer R Edelman',
			description: 'Published in ICLR 2026',
			link: 'https://openreview.net/forum?id=JyboUMeEUi'
		},
		{
			title:
				'TTool: A Supervised Artificial Intelligence-Assisted Visual Pose Detector for Tool Heads in Augmented Reality Woodworking',
			authors: 'Andrea Settimi, Naravich Chutisilp, Florian Aymanns, Julien Gamerro, Yves Weinand',
			description: 'Published in Applied Sciences 2024',
			link: 'https://www.mdpi.com/2076-3417/14/7/3011'
		},
		{
			title: 'A Unified Model for Gaze Following and Social Gaze Prediction',
			authors: 'Anshul Gupta, Samy Tafasca, Naravich Chutisilp, Jean-Marc Odobez',
			description:
				'Published in IEEE International Conference on Automatic Face and Gesture Recognition 2024',
			link: 'https://ieeexplore.ieee.org/document/10581955'
		}
	];

	const projectItems = [
		{
			title: 'Idiap Research Institute',
			description:
				'Built object detection models using YOLOv8 and Faster R-CNN architectures to localize the ADOS-2 toys used in autism spectrum disorder diagnosis in children.',
			tags: ['YOLOv8', 'Object Detection'],
			borderClass: 'border-b-2 md:border-b-0 md:border-r-2 border-black'
		},
		{
			title: "Bachelor's Capstone",
			description:
				'Deployed interpretable tuberculosis classification models of chest X-rays on edge-devices by TensorRT quantization, achieving 25x inference speedup for Maesot Hospital.',
			tags: ['PyTorch', 'TensorRT', 'Edge AI'],
			borderClass: 'border-b-2 md:border-b-0 border-black'
		}
	];

	let revealCurtain = false;
	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				revealCurtain = true;
			}, 50);
		});
	});
</script>

<svelte:head>
	<title>Experience | Naravich Chutisilp</title>
</svelte:head>

<TopNavBar />

<div class="fixed inset-0 z-[200] pointer-events-none flex items-start h-[120vh] -top-[20vh] overflow-hidden">
	<!-- 4 staggered panels with rounded tops -->
	<div 
		class="w-1/4 h-full bg-primary rounded-t-[100px] transition-transform duration-[1000ms] ease-in-out delay-[0ms]"
		style="transform: {revealCurtain ? 'translateY(120vh)' : 'translateY(0)'};"
	></div>
	<div 
		class="w-1/4 h-full bg-primary rounded-t-[150px] transition-transform duration-[1100ms] ease-in-out delay-[150ms]"
		style="transform: {revealCurtain ? 'translateY(120vh)' : 'translateY(0)'};"
	></div>
	<div 
		class="w-1/4 h-full bg-primary rounded-t-[80px] transition-transform duration-[950ms] ease-in-out delay-[50ms]"
		style="transform: {revealCurtain ? 'translateY(120vh)' : 'translateY(0)'};"
	></div>
	<div 
		class="w-1/4 h-full bg-primary rounded-t-[120px] transition-transform duration-[1050ms] ease-in-out delay-[200ms]"
		style="transform: {revealCurtain ? 'translateY(120vh)' : 'translateY(0)'};"
	></div>
</div>

<main class="flex-grow flex flex-col lg:flex-row border-b-2 border-black bg-surface">
	<ExperienceSidebar />

	<!-- Grid Col 2: Massive Headers & Content (75%) -->
	<div class="w-full lg:w-3/4 flex flex-col bg-grid-blueprint relative">
		<ExperienceSectionHeader title="WORK" />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-0 border-b-2 border-black relative z-10">
			{#each workItems as item, index}
				<ExperienceWorkCard {...item} {index} />
			{/each}
		</div>

		<ExperienceSectionHeader title="EDUCATION" />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-0 border-b-2 border-black relative z-10">
			{#each eduItems as item, index}
				<ExperienceWorkCard {...item} {index} />
			{/each}
		</div>

		<ExperienceSectionHeader title="PUBLICATIONS" />
		{#each pubItems as item, index}
			<ExperiencePubCard {...item} {index} />
		{/each}

		<ExperienceSectionHeader title="PROJECTS" />
		<div class="grid grid-cols-1 md:grid-cols-2 relative z-10">
			{#each projectItems as item, index}
				<ExperienceProjectCard {...item} {index} />
			{/each}
		</div>
	</div>
</main>

<Footer />

<style>
	.bg-grid-blueprint {
		background-size: 64px 64px;
		background-image: linear-gradient(to right, #e3e2e2 1px, transparent 1px),
			linear-gradient(to bottom, #e3e2e2 1px, transparent 1px);
	}
</style>
