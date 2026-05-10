<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';

	let menuOpen = false;
	let pendingRoute: string | null = null;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function handleLinkClick(e: MouseEvent, path: string) {
		e.preventDefault();
		pendingRoute = path; // Temporarily force the active state highlight

		// Wait for the user to see the highlight, then navigate and close the menu
		setTimeout(() => {
			menuOpen = false;
			goto(path).then(() => {
				pendingRoute = null; // Clear pending state after navigation
			});
		}, 300);
	}

	$: isActive = (path: string) => {
		if (pendingRoute) return pendingRoute === path;
		if (path === '/') return $page.url.pathname === '/';
		return $page.url.pathname.startsWith(path);
	};
</script>

<nav
	class="bg-surface docked full-width top-0 border-b-2 border-black flex flex-col w-full z-50 sticky"
>
	<div
		class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 relative z-50 bg-surface"
	>
		<a
			href="/"
			class="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight text-on-surface uppercase flex items-center leading-none mt-2 hover:text-surface-accent transition-colors"
		>
			icekang
		</a>

		<!-- Desktop Menu -->
		<div class="hidden md:flex gap-4 items-center">
			<a
				class="{isActive('/')
					? 'bg-primary text-on-primary'
					: 'text-on-surface hover:border-b-2 hover:border-black'} px-4 py-1 font-nav-lg text-nav-lg uppercase tracking-widest transition-all"
				href="/">HOME</a
			>
			<a
				class="{isActive('/experience')
					? 'bg-primary text-on-primary'
					: 'text-on-surface hover:border-b-2 hover:border-black'} px-4 py-1 font-nav-lg text-nav-lg uppercase tracking-widest transition-all"
				href="/experience">EXPERIENCE</a
			>
			<a
				class="{isActive('/books')
					? 'bg-primary text-on-primary'
					: 'text-on-surface hover:border-b-2 hover:border-black'} px-4 py-1 font-nav-lg text-nav-lg uppercase tracking-widest transition-all"
				href="/books">BOOKS</a
			>
		</div>
		<div class="hidden md:block">
			<a
				href="https://www.linkedin.com/in/icekang/"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-primary-container text-on-primary font-nav-lg text-nav-lg uppercase tracking-widest px-6 py-3 shadow-cartoon hover:scale-95 transition-transform duration-75 border-2 border-black rounded-none inline-block"
				>CONTACT</a
			>
		</div>

		<!-- Mobile Hamburger Button -->
		<button
			class="md:hidden w-10 h-10 border-2 border-black bg-primary-container flex flex-col justify-center items-center gap-[4px] shadow-cartoon active:shadow-none active:translate-y-1 active:translate-x-1 transition-all"
			on:click={toggleMenu}
			aria-label="Toggle Menu"
		>
			<div
				class="w-5 h-[2px] bg-black transition-all duration-300 {menuOpen
					? 'rotate-45 translate-y-[6px]'
					: ''}"
			></div>
			<div
				class="w-5 h-[2px] bg-black transition-all duration-300 {menuOpen
					? 'opacity-0 scale-x-0'
					: 'opacity-100 scale-x-100'}"
			></div>
			<div
				class="w-5 h-[2px] bg-black transition-all duration-300 {menuOpen
					? '-rotate-45 -translate-y-[6px]'
					: ''}"
			></div>
		</button>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if menuOpen}
		<div
			transition:slide={{ duration: 300, axis: 'y' }}
			class="md:hidden border-t-2 border-black bg-surface w-full flex flex-col px-margin-mobile py-8 gap-6 absolute top-full left-0 border-b-2 shadow-[0_8px_0_rgba(0,0,0,1)] z-40"
		>
			<a
				class="{isActive('/')
					? 'bg-primary text-on-primary border-black shadow-cartoon'
					: 'text-on-surface border-transparent'} border-2 px-4 py-3 font-nav-lg text-nav-lg uppercase tracking-widest transition-all text-center"
				href="/"
				on:click={(e) => handleLinkClick(e, '/')}>HOME</a
			>
			<a
				class="{isActive('/experience')
					? 'bg-primary text-on-primary border-black shadow-cartoon'
					: 'text-on-surface border-transparent'} border-2 px-4 py-3 font-nav-lg text-nav-lg uppercase tracking-widest transition-all text-center"
				href="/experience"
				on:click={(e) => handleLinkClick(e, '/experience')}>EXPERIENCE</a
			>
			<a
				class="{isActive('/books')
					? 'bg-primary text-on-primary border-black shadow-cartoon'
					: 'text-on-surface border-transparent'} border-2 px-4 py-3 font-nav-lg text-nav-lg uppercase tracking-widest transition-all text-center"
				href="/books"
				on:click={(e) => handleLinkClick(e, '/books')}>BOOKS</a
			>

			<div class="w-full h-[2px] bg-black my-2 opacity-10"></div>

			<a
				href="https://www.linkedin.com/in/icekang/"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-primary-container text-on-primary font-nav-lg text-nav-lg uppercase tracking-widest px-6 py-4 shadow-cartoon border-2 border-black rounded-none inline-block text-center w-full"
				on:click={toggleMenu}>CONTACT</a
			>
		</div>
	{/if}
</nav>
