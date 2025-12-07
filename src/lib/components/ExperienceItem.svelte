<script lang="ts" context="module">
	export interface ExperienceData {
		title: string;
		company: string;
		location: string;
		duration: string;
		achievements: string[];
	}
</script>

<script lang="ts">
	export let experience: ExperienceData;
</script>

<div class="experience-item">
	<div class="experience-header">
		<h3>{experience.title}</h3>
		<span class="company">{experience.company}</span>
	</div>
	<p class="duration">{experience.location} • {experience.duration}</p>
	<ul class="experience-list">
		{#each experience.achievements as achievement}
			<li>{@html achievement}</li>
		{/each}
	</ul>
</div>

<style>
	.experience-item {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgb(31, 41, 55);
	}

	.experience-item:last-child {
		border-bottom: none;
	}

	.experience-header {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.experience-header h3 {
		font-size: 1.125rem;
		font-weight: bold;
		color: rgb(245, 245, 245);
	}

	.company {
		color: rgb(96, 165, 250);
		font-weight: 600;
	}

	.duration {
		font-size: 0.875rem;
		color: rgb(156, 163, 175);
		margin-bottom: 0.75rem;
		margin-top: 0;
	}

	.experience-list {
		list-style: disc;
		list-style-position: inside;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: rgb(229, 231, 235);
		margin: 0;
		padding: 0;
	}

	.experience-list li {
		margin-left: 0.5rem;
	}
</style>
