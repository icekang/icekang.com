<script lang="ts" context="module">
	export interface Publication {
		title: string;
		venue: string;
		authors: string;
	}
</script>

<script lang="ts">
	export let publications: Publication[] = [];
</script>

<section class="section">
	<h2>Publications</h2>
	{#each publications as pub}
		<div class="publication-item">
			<h3>{pub.title}</h3>
			<p class="publication-meta"><em>{pub.venue}</em></p>
			<p class="publication-authors">{@html pub.authors}</p>
		</div>
	{/each}
</section>

<style>
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

	.publication-item {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgb(31, 41, 55);
	}

	.publication-item:last-child {
		border-bottom: none;
	}

	.publication-item h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: rgb(245, 245, 245);
		margin-bottom: 0.5rem;
		margin-top: 0;
	}

	.publication-meta {
		font-size: 0.875rem;
		color: rgb(96, 165, 250);
		margin-bottom: 0.5rem;
		margin-top: 0;
		font-style: italic;
	}

	.publication-authors {
		font-size: 0.875rem;
		color: rgb(209, 213, 219);
		margin: 0;
	}
</style>
