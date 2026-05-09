<script lang="ts">
	import logo from '$lib/images/logo.jpg';
	import Header from '$lib/components/Header.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import ExperienceItem from '$lib/components/ExperienceItem.svelte';
	import EducationItem from '$lib/components/EducationItem.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Publications from '$lib/components/Publications.svelte';

	interface ContactItem {
		label: string;
		value: string;
		href: string;
		external?: boolean;
	}

	interface ExperienceData {
		title: string;
		company: string;
		location: string;
		duration: string;
		achievements: string[];
	}

	interface EducationData {
		title: string;
		school: string;
		location: string;
		duration: string;
		description: string;
	}

	interface SkillCategory {
		title: string;
		items: string;
	}

	interface Publication {
		title: string;
		venue: string;
		authors: string;
	}

	const contactInfo: ContactItem[] = [
		{ label: 'Phone', value: '+41 762162608', href: 'tel:+41762162608' },
		{ label: 'Email', value: 'naravich.chutisilp@gmail.com', href: 'mailto:naravich.chutisilp@gmail.com' },
		{ label: 'LinkedIn', value: 'in/icekang', href: 'https://linkedin.com/in/icekang', external: true },
		{ label: 'GitHub', value: 'github.com/icekang', href: 'https://github.com/icekang', external: true }
	];

	const experiences: ExperienceData[] = [
		{
			title: 'ML Engineer, Data Scientist',
			company: 'Tradition',
			location: 'Switzerland',
			duration: '11/2024 - Present',
			achievements: [
				'Designed, developed, and deployed a robust, real-time recommendation system for fixed-income derivatives using PyTorch, MLFlow, Optuna, and Airflow',
				'Achieved end-to-end latency of <strong>&lt;1 minute</strong> to support rapid broker decision-making, generating <strong>&gt;USD 655K in revenue</strong>',
				'Initiated and delivered a full-stack GitLab-integrated LLM bot for the CI/CD pipeline providing automated merge request summaries and code reviews',
				'The LLM bot enhanced development productivity across <strong>50% of the data science team\'s projects</strong>'
			]
		},
		{
			title: 'Computer Vision Engineer, Data Scientist Intern',
			company: 'AXA',
			location: 'Switzerland',
			duration: '09/2023 - 02/2024',
			achievements: [
				'Built a production-ready Computer Vision system using satellite imagery for automated actuarial risk identification with JavaScript and Python',
				'Achieved <strong>&gt;80% mIoU</strong> for critical solar panel segmentation, directly leading to securing an <strong>R&D budget &gt;CHF 500k</strong>',
				'Engineered a highly efficient and scalable MLOps pipeline for satellite imagery segmentation using PyTorch, TIMM, and Lightning',
				'Enabled rapid processing of over <strong>700 model architecture experiments</strong> from a single configuration, significantly accelerating R&D velocity'
			]
		},
		{
			title: 'Research Assistant - 3D Computer Vision',
			company: 'EPFL',
			location: 'Switzerland',
			duration: '10/2022 - 08/2023',
			achievements: [
				'Developed a 6-DoF pose estimation and 3D object tracking system for carpentry tool heads',
				'Released an open-source C++ project using OpenCV and OpenGL. <em>Manuscript accepted by MDPI\'s Applied Science Journal 2024</em>',
				'Integrated the project into Augmented Reality (AR) software employing real-time SLAM',
				'Achieved high-precision performance with mean position and rotation errors of <strong>3.9 mm and 1.19°</strong>, respectively'
			]
		},
		{
			title: 'Software Engineer / Co-Founder',
			company: 'Inside the Sandbox',
			location: 'Thailand',
			duration: '01/2020 - 09/2021',
			achievements: [
				'Developed interactive storytelling websites for digital marketing campaigns via different tech stacks including ReactJS, JavaScript, Svelte, Express, Flask, Firebase, Docker, Kubernetes, etc.',
				'One campaign attracted <strong>&gt;1M organic users</strong> within the first day after launch and was <strong>#1 Twitter trending in Thailand</strong>, leading to the first 2 commercial contracts for the company',
				'Co-founded the company with a registered capital of <strong>THB 1M</strong>, which was earned from the commercial contracts'
			]
		},
		{
			title: 'Data Scientist',
			company: 'Siam Commercial Bank (SCB)',
			location: 'Thailand',
			duration: '01/2021 - 04/2021',
			achievements: [
				'Built an ML platform that accommodated financial data needs (&gt;20 sources) and &gt;5 data visualization requirements, using Azure, Spark and SQL',
				'The platform is now used by the marketing team to find leads for loans, contributing to <strong>THB 2.4MM of their revenue</strong>'
			]
		},
		{
			title: 'Software Engineer Intern',
			company: 'Taskworld',
			location: 'Thailand',
			duration: '06/2020 - 08/2020',
			achievements: [
				'Implemented scroll virtualization of the product application, enabling &gt;1,000 items to be rendered without lagging, using ReactJS and TypeScript',
				'Optimized page rendering by re-structuring state in Redux store and React state, increasing rendering time by <strong>50%</strong>'
			]
		},
		{
			title: 'Software Engineer',
			company: 'WorldQuant',
			location: 'Thailand',
			duration: '06/2019 - 01/2020',
			achievements: [
				'Built a dashboard for data visualization, helping Quantitative analysts to monitor their &gt;1K alphas along with their &gt;10 quantitative performance metrics using Python, Dash, and SQL',
				'Solved &gt;20 GB of data syncing with multi-threading. Received a part-time offer after the internship',
				'Automated excel report generation for the Office Manager summarizing the performance of &gt;10 employees and &gt;10 specific key metrics, using Python, Pandas, and Numpy'
			]
		},
		{
			title: 'Data Scientist Intern',
			company: 'HOME dot TECH',
			location: 'Thailand',
			duration: '06/2018 - 08/2018',
			achievements: [
				'Analyzed the unsupervised learning clustering algorithm to understand the meaning of each cluster with Scikit-Learn',
				'Compared similarity algorithms within the K-Means clustering project, assessing their impact on result variations'
			]
		}
	];

	const educationList: EducationData[] = [
		{
			title: 'Master\'s Thesis (3D CV & ML)',
			school: 'MIT with Profs. Elazer Edelman (MIT) and Maria Brbic (EPFL)',
			location: 'United States',
			duration: '03/2024 - 10/2024',
			description: 'Comparative study on 3D arterial plaque segmentation, benchmarking 3D Multimodal self-supervised learning (contrastive and generative SSL) against a supervised baseline. <em>In Preparation for Publication</em>'
		},
		{
			title: 'MSc Computer Science',
			school: 'EPFL',
			location: 'Switzerland',
			duration: '09/2021 - 09/2024',
			description: '<strong>GPA 5.70/6.00</strong>'
		},
		{
			title: 'BEng Computer Engineering',
			school: 'Chulalongkorn University',
			location: 'Thailand',
			duration: '08/2017 - 05/2021',
			description: '<strong>Valedictorian</strong> (graduated top of class: First Class Honors with Gold Medal) - <strong>GPA 3.99/4.00</strong>'
		}
	];

	const skillsList: SkillCategory[] = [
		{ title: 'Languages & Frameworks', items: 'Python, C++, JavaScript' },
		{ title: 'Machine Learning', items: 'Generative AI (LLMs), PyTorch, Computer Vision, Multimodal ML' },
		{ title: 'Infrastructure', items: 'MLOps Pipelines' }
	];

	const publicationsList: Publication[] = [
		{
			title: 'TTool: A Supervised Artificial Intelligence-Assisted Visual Pose Detector for Tool Heads in Augmented Reality Woodworking',
			venue: 'Applied Sciences 2024',
			authors: 'Andrea Settimi, <strong>Naravich Chutisilp</strong>, Florian Aymanns, Julien Gamerro, Yves Weinand'
		},
		{
			title: 'A Unified Model for Gaze Following and Social Gaze Prediction',
			venue: 'IEEE International Conference on Automatic Face and Gesture Recognition 2024',
			authors: 'Anshul Gupta, Samy Tafasca, <strong>Naravich Chutisilp</strong>, Jean-Marc Odobez'
		}
	];
</script>

<svelte:head>
	<title>Naravich Chutisilp - ML Engineer & Researcher</title>
	<meta name="description" content="Naravich Chutisilp - ML Engineer & Researcher specializing in real-time ML/AI financial systems and Generative AI" />
	<meta name="keywords" content="Naravich Chutisilp, ML Engineer, Computer Vision, Deep Learning, AI Researcher" />
</svelte:head>

<div class="container">
	<Header {logo} />
	<Contact contacts={contactInfo} />

	<section class="section">
		<h2>Work Experience</h2>
		{#each experiences as exp}
			<ExperienceItem experience={exp} />
		{/each}
	</section>

	<section class="section">
		<h2>Education</h2>
		{#each educationList as edu}
			<EducationItem education={edu} />
		{/each}
	</section>

	<Skills skills={skillsList} />
	<Publications publications={publicationsList} />
</div>

<style>
	.container {
		max-width: 56rem;
		margin: 0 auto;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 3rem;
		padding-bottom: 3rem;
		font-family: system-ui, -apple-system, sans-serif;
		line-height: 1.625;
	}

	.section {
		margin-bottom: 3rem;
	}

	.section h2 {
		font-size: 1.875rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		color: rgb(245, 245, 245);
		border-bottom: 1px solid rgb(55, 65, 81);
		padding-bottom: 0.75rem;
	}

	@media (max-width: 768px) {
		.container {
			padding-left: 1rem;
			padding-right: 1rem;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}

		.section h2 {
			font-size: 1.5rem;
		}
	}
</style>