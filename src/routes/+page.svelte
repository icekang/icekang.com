<script lang="ts">
	import logo from '$lib/images/logo.jpg';
	import IconSwiper from '$lib/components/IconSwiper.svelte';
	import List from '$lib/components/List.svelte';

	const images = [logo];
</script>

<svelte:head>
	<title>Naravich</title>
	<meta name="description" content="Naravich Chutisilp official website" />
	<meta name="keywords" content="Naravich Chutisilp, Naravich, Chutisilp, นราวิชญ์ ชุติศิลป์, นราวิชญ์, ชุติศิลป์, icekang, " />
</svelte:head>

<section class="container">
	<div class="title grid grid-cols-3 gap-4">
		<div class="col-span-2">
			<h1>Naravich Chutisilp</h1>
			<p>I like computer vision and anything deep learning related.Currently, I am completing my Master's thesis at MIT in the <span><a href="https://imes.mit.edu/">Institute for Medical Engineering and Science (IMES).</a></span> Oh! By the way, I am a gym rat and a casual chef.</p>
		</div>
		<IconSwiper images={images} />
	</div>
	<div class="my-4"/>
	<div>
		<h1>Experience & Research</h1>
		<List />
	</div>
</section>

<style>
	.container {
		@apply mx-auto;
		@apply p-12;
	}

	a {
		@apply text-blue-500;
	}
	a:hover {
		@apply text-blue-700;
	}

	a:active {
		@apply text-blue-900;
	}

	h1 {
		@apply text-4xl;
	}
</style>