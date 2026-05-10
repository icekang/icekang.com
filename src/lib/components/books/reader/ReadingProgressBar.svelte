<script lang="ts">
	export let scrollProgress: number = 0;
</script>

<div class="fixed top-[72px] left-0 w-full z-[60] pointer-events-none">
	<div class="mx-auto px-margin-mobile md:px-margin-desktop">
		<div
			class="h-1.5 bg-gray-100/50 border-x border-b border-black relative overflow-hidden pointer-events-auto"
		>
			<div
				class="absolute top-0 left-0 h-full bg-surface-accent transition-all duration-150 ease-out"
				style="width: {scrollProgress}%"
			></div>
		</div>
	</div>
</div>
