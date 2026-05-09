<script lang="ts">
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Naravich Chutisilp | Icekang</title>
</svelte:head>

<TopNavBar />
<main class="flex-grow flex flex-col">
	<Hero />
	<Resume />
</main>
<Footer />
