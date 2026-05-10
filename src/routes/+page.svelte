<script lang="ts">
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Naravich Chutisilp | Icekang</title>
	<meta
		name="description"
		content="Naravich Chutisilp - ML Engineer & Researcher specializing in real-time ML/AI financial systems and Generative AI"
	/>
	<meta
		name="keywords"
		content="Naravich Chutisilp, ML Engineer, Computer Vision, Deep Learning, AI Researcher"
	/>
	<meta property="og:image" content="/logo.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/logo.png" />
</svelte:head>

<TopNavBar />
<main class="flex-grow flex flex-col">
	<Hero />
	<Resume />
</main>
<Footer />
