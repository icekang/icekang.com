<script lang="ts" context="module">
	export interface SkillCategory {
		title: string;
		items: string;
	}
</script>

<script lang="ts">
	export let skills: SkillCategory[] = [];
</script>

<section class="section">
	<h2>Key Skills</h2>
	<div class="skills-grid">
		{#each skills as skill}
			<div class="skill-category">
				<h4>{skill.title}</h4>
				<p>{skill.items}</p>
			</div>
		{/each}
	</div>
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

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.skill-category {
		background-color: rgb(31, 41, 55);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.skill-category h4 {
		font-weight: bold;
		color: rgb(96, 165, 250);
		margin-bottom: 0.5rem;
		margin-top: 0;
	}

	.skill-category p {
		color: rgb(209, 213, 219);
		margin: 0;
	}
</style>
