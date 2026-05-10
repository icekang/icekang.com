<script lang="ts">
	export let scrollProgress: number = 0;
</script>

<div class="sticky full-width top-[73px] z-[60] pointer-events-none">
	<div class="h-1.5 bg-gray-100/50 relative overflow-hidden pointer-events-auto">
		<div
			class="absolute top-0 left-0 h-full bg-surface-accent transition-all duration-150 ease-out"
			style="width: {scrollProgress}%"
		></div>
	</div>
</div>
