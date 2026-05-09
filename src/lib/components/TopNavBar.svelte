<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="bg-surface docked full-width top-0 border-b-2 border-black flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-full z-50 sticky"
>
	<div
		class="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight text-on-surface uppercase flex items-center leading-none mt-2"
	>
		icekang
	</div>
	<div class="hidden md:flex gap-4 items-center">
		<a
			class="{$page.url.pathname === '/'
				? 'bg-primary text-on-primary'
				: 'text-on-surface hover:border-b-2 hover:border-black'} px-4 py-1 font-nav-lg text-nav-lg uppercase tracking-widest transition-all"
			href="/">HOME</a
		>
		<a
			class="{$page.url.pathname.startsWith('/experience')
				? 'bg-primary text-on-primary'
				: 'text-on-surface hover:border-b-2 hover:border-black'} px-4 py-1 font-nav-lg text-nav-lg uppercase tracking-widest transition-all"
			href="/experience">EXPERIENCE</a
		>
		<span
			class="text-on-surface/50 px-4 py-1 font-nav-lg text-nav-lg uppercase tracking-widest cursor-not-allowed"
			>BLOG</span
		>
	</div>
	<div>
		<a
			href="https://www.linkedin.com/in/icekang/"
			target="_blank"
			rel="noopener noreferrer"
			class="bg-primary-container text-on-primary font-nav-lg text-nav-lg uppercase tracking-widest px-6 py-3 shadow-cartoon hover:scale-95 transition-transform duration-75 border-2 border-black rounded-none inline-block"
			>CONTACT</a
		>
	</div>
</nav>
