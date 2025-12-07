<script lang="ts">
	import logo from '$lib/images/logo.jpg';
</script>

<svelte:head>
	<title>Naravich Chutisilp - ML Engineer & Researcher</title>
	<meta name="description" content="Naravich Chutisilp - ML Engineer & Researcher specializing in real-time ML/AI financial systems and Generative AI" />
	<meta name="keywords" content="Naravich Chutisilp, ML Engineer, Computer Vision, Deep Learning, AI Researcher" />
</svelte:head>

<div class="container">
	<!-- Header -->
	<header class="header-section">
		<div class="header-content">
			<img src={logo} alt="Naravich Chutisilp" class="profile-image" />
			<div class="header-text">
				<h1>Naravich Chutisilp</h1>
				<p class="subtitle">ML Engineer & Researcher</p>
				<p class="description">Specializing in real-time ML/AI financial systems and Generative AI tools. Building scalable MLOps pipelines with expertise in Computer Vision and Multimodal Learning.</p>
			</div>
		</div>
	</header>

	<!-- Contact -->
	<section class="section">
		<h2>Contact</h2>
		<div class="contact-grid">
			<div class="contact-item">
				<span class="label">Phone:</span>
				<a href="tel:+41762162608">+41 762162608</a>
			</div>
			<div class="contact-item">
				<span class="label">Email:</span>
				<a href="mailto:naravich.chutisilp@gmail.com">naravich.chutisilp@gmail.com</a>
			</div>
			<div class="contact-item">
				<span class="label">LinkedIn:</span>
				<a href="https://linkedin.com/in/icekang" target="_blank">in/icekang</a>
			</div>
			<div class="contact-item">
				<span class="label">GitHub:</span>
				<a href="https://github.com/icekang" target="_blank">github.com/icekang</a>
			</div>
		</div>
	</section>

	<!-- Work Experience -->
	<section class="section">
		<h2>Work Experience</h2>

		<div class="experience-item">
			<div class="experience-header">
				<h3>ML Engineer, Data Scientist</h3>
				<span class="company">Tradition</span>
			</div>
			<p class="duration">Switzerland • 11/2024 - Present</p>
			<ul class="experience-list">
				<li>Designed, developed, and deployed a robust, real-time recommendation system for fixed-income derivatives using PyTorch, MLFlow, Optuna, and Airflow</li>
				<li>Achieved end-to-end latency of <strong>&lt;1 minute</strong> to support rapid broker decision-making, generating <strong>&gt;USD 655K in revenue</strong></li>
				<li>Initiated and delivered a full-stack GitLab-integrated LLM bot for the CI/CD pipeline providing automated merge request summaries and code reviews</li>
				<li>The LLM bot enhanced development productivity across <strong>50% of the data science team's projects</strong></li>
			</ul>
		</div>

		<div class="experience-item">
			<div class="experience-header">
				<h3>Computer Vision Engineer, Data Scientist Intern</h3>
				<span class="company">AXA</span>
			</div>
			<p class="duration">Switzerland • 09/2023 - 02/2024</p>
			<ul class="experience-list">
				<li>Built a production-ready Computer Vision system using satellite imagery for automated actuarial risk identification with JavaScript and Python</li>
				<li>Achieved <strong>&gt;80% mIoU</strong> for critical solar panel segmentation, directly leading to securing an <strong>R&D budget &gt;CHF 500k</strong></li>
				<li>Engineered a highly efficient and scalable MLOps pipeline for satellite imagery segmentation using PyTorch, TIMM, and Lightning</li>
				<li>Enabled rapid processing of over <strong>700 model architecture experiments</strong> from a single configuration, significantly accelerating R&D velocity</li>
			</ul>
		</div>

		<div class="experience-item">
			<div class="experience-header">
				<h3>Research Assistant - 3D Computer Vision</h3>
				<span class="company">EPFL</span>
			</div>
			<p class="duration">Switzerland • 10/2022 - 08/2023</p>
			<ul class="experience-list">
				<li>Developed a 6-DoF pose estimation and 3D object tracking system for carpentry tool heads</li>
				<li>Released an open-source C++ project using OpenCV and OpenGL. <em>Manuscript accepted by MDPI's Applied Science Journal 2024</em></li>
				<li>Integrated the project into Augmented Reality (AR) software employing real-time SLAM</li>
				<li>Achieved high-precision performance with mean position and rotation errors of <strong>3.9 mm and 1.19°</strong>, respectively</li>
			</ul>
		</div>
	</section>

	<!-- Education -->
	<section class="section">
		<h2>Education</h2>

		<div class="education-item">
			<div class="education-header">
				<h3>Master's Thesis (3D CV & ML)</h3>
				<span class="school">MIT with Profs. Elazer Edelman (MIT) and Maria Brbic (EPFL)</span>
			</div>
			<p class="duration">United States • 03/2024 - 10/2024</p>
			<p class="education-desc">Comparative study on 3D arterial plaque segmentation, benchmarking 3D Multimodal self-supervised learning (contrastive and generative SSL) against a supervised baseline. <em>In Preparation for Publication</em></p>
		</div>

		<div class="education-item">
			<div class="education-header">
				<h3>MSc Computer Science</h3>
				<span class="school">EPFL</span>
			</div>
			<p class="duration">Switzerland • 09/2021 - 09/2024</p>
			<p class="education-desc"><strong>GPA 5.70/6.00</strong></p>
		</div>

		<div class="education-item">
			<div class="education-header">
				<h3>BEng Computer Engineering</h3>
				<span class="school">Chulalongkorn University</span>
			</div>
			<p class="duration">Thailand • 08/2017 - 05/2021</p>
			<p class="education-desc"><strong>Valedictorian</strong> (graduated top of class: First Class Honors with Gold Medal) - <strong>GPA 3.99/4.00</strong></p>
		</div>
	</section>

	<!-- Skills -->
	<section class="section">
		<h2>Key Skills</h2>
		<div class="skills-grid">
			<div class="skill-category">
				<h4>Languages & Frameworks</h4>
				<p>Python, C++, JavaScript</p>
			</div>
			<div class="skill-category">
				<h4>Machine Learning</h4>
				<p>Generative AI (LLMs), PyTorch, Computer Vision, Multimodal ML</p>
			</div>
			<div class="skill-category">
				<h4>Infrastructure</h4>
				<p>MLOps Pipelines</p>
			</div>
		</div>
	</section>

	<!-- Publications -->
	<section class="section">
		<h2>Publications</h2>

		<div class="publication-item">
			<h3>TTool: A Supervised Artificial Intelligence-Assisted Visual Pose Detector for Tool Heads in Augmented Reality Woodworking</h3>
			<p class="publication-meta"><em>Applied Sciences 2024</em></p>
			<p class="publication-authors">Andrea Settimi, <strong>Naravich Chutisilp</strong>, Florian Aymanns, Julien Gamerro, Yves Weinand</p>
		</div>

		<div class="publication-item">
			<h3>A Unified Model for Gaze Following and Social Gaze Prediction</h3>
			<p class="publication-meta"><em>IEEE International Conference on Automatic Face and Gesture Recognition 2024</em></p>
			<p class="publication-authors">Anshul Gupta, Samy Tafasca, <strong>Naravich Chutisilp</strong>, Jean-Marc Odobez</p>
		</div>
	</section>
</div>

<style>
	.container {
		@apply max-w-4xl mx-auto px-6 py-12;
		@apply font-sans leading-relaxed;
	}

	/* Header */
	.header-section {
		@apply mb-16 pb-8 border-b border-gray-700;
	}

	.header-content {
		@apply flex gap-8 items-start;
	}

	.profile-image {
		@apply w-32 h-32 rounded-lg object-cover flex-shrink-0;
	}

	.header-text h1 {
		@apply text-5xl font-bold mb-2 text-gray-50;
	}

	.subtitle {
		@apply text-xl text-blue-400 font-semibold mb-4;
	}

	.description {
		@apply text-gray-300 max-w-2xl;
	}

	/* Sections */
	.section {
		@apply mb-12;
	}

	.section h2 {
		@apply text-3xl font-bold mb-6 text-gray-50 border-b border-gray-700 pb-3;
	}

	/* Contact */
	.contact-grid {
		@apply grid grid-cols-1 md:grid-cols-2 gap-4;
	}

	.contact-item {
		@apply flex items-center gap-3;
	}

	.contact-item .label {
		@apply font-semibold text-gray-400 min-w-16;
	}

	.contact-item a {
		@apply text-blue-400 hover:text-blue-300 transition;
	}

	/* Experience */
	.experience-item {
		@apply mb-8 pb-6 border-b border-gray-800 last:border-b-0;
	}

	.experience-header {
		@apply flex items-baseline gap-3 mb-2;
	}

	.experience-header h3 {
		@apply text-xl font-bold text-gray-50;
	}

	.company {
		@apply text-blue-400 font-semibold;
	}

	.duration {
		@apply text-sm text-gray-400 mb-3;
	}

	.experience-list {
		@apply list-disc list-inside space-y-2 text-gray-200;
	}

	.experience-list li {
		@apply ml-2;
	}

	/* Education */
	.education-item {
		@apply mb-8 pb-6 border-b border-gray-800 last:border-b-0;
	}

	.education-header {
		@apply flex items-baseline gap-3 mb-2;
	}

	.education-header h3 {
		@apply text-lg font-bold text-gray-50;
	}

	.school {
		@apply text-blue-400 font-semibold text-sm;
	}

	.education-desc {
		@apply text-gray-300;
	}

	/* Skills */
	.skills-grid {
		@apply grid grid-cols-1 md:grid-cols-3 gap-6;
	}

	.skill-category {
		@apply bg-gray-800 rounded-lg p-4;
	}

	.skill-category h4 {
		@apply font-bold text-blue-400 mb-2;
	}

	.skill-category p {
		@apply text-gray-300;
	}

	/* Publications */
	.publication-item {
		@apply mb-8 pb-6 border-b border-gray-800 last:border-b-0;
	}

	.publication-item h3 {
		@apply text-lg font-semibold text-gray-50 mb-2;
	}

	.publication-meta {
		@apply text-sm text-blue-400 mb-2;
	}

	.publication-authors {
		@apply text-sm text-gray-300;
	}

	/* Links */
	a {
		@apply text-blue-400 hover:text-blue-300 transition;
	}

	strong {
		@apply text-gray-100;
	}

	em {
		@apply text-gray-400;
	}

	@media (max-width: 768px) {
		.header-content {
			@apply flex-col;
		}

		.profile-image {
			@apply w-24 h-24;
		}

		.header-text h1 {
			@apply text-3xl;
		}
	}
</style>