<script lang="ts" context="module">
	export interface EducationData {
		title: string;
		school: string;
		location: string;
		duration: string;
		description: string;
	}
</script>

<script lang="ts">
	export let education: EducationData;
</script>

<div class="education-item">
	<div class="education-header">
		<h3>{education.title}</h3>
		<span class="school">{education.school}</span>
	</div>
	<p class="duration">{education.location} • {education.duration}</p>
	<p class="education-desc">{@html education.description}</p>
</div>

<style>
	.education-item {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgb(31, 41, 55);
	}

	.education-item:last-child {
		border-bottom: none;
	}

	.education-header {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.education-header h3 {
		font-size: 1.125rem;
		font-weight: bold;
		color: rgb(245, 245, 245);
	}

	.school {
		color: rgb(96, 165, 250);
		font-weight: 600;
		font-size: 0.875rem;
	}

	.duration {
		font-size: 0.875rem;
		color: rgb(156, 163, 175);
		margin-bottom: 0.75rem;
		margin-top: 0;
	}

	.education-desc {
		color: rgb(209, 213, 219);
		margin: 0;
	}
</style>
