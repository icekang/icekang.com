<script lang="ts">
	export let logo: string;
</script>

<header class="header-section">
	<div class="header-content">
		<img src={logo} alt="Naravich Chutisilp" class="profile-image" />
		<div class="header-text">
			<h1>Naravich Chutisilp</h1>
			<p class="subtitle">ML Engineer & Researcher</p>
			<p class="description">Specializing in real-time ML/AI financial systems and Generative AI tools. Building scalable MLOps pipelines with expertise in Computer Vision and Multimodal Learning.</p>
		</div>
	</div>
</header>

<style>
	.header-section {
		margin-bottom: 4rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgb(55, 65, 81);
	}

	.header-content {
		display: flex;
		gap: 2rem;
		align-items: flex-start;
	}

	.profile-image {
		width: 8rem;
		height: 8rem;
		border-radius: 0.5rem;
		object-fit: cover;
		flex-shrink: 0;
	}

	.header-text h1 {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: rgb(245, 245, 245);
	}

	.subtitle {
		font-size: 1.25rem;
		color: rgb(96, 165, 250);
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.description {
		color: rgb(209, 213, 219);
		max-width: 42rem;
	}

	@media (max-width: 768px) {
		.header-content {
			flex-direction: column;
		}

		.profile-image {
			width: 6rem;
			height: 6rem;
		}

		.header-text h1 {
			font-size: 2rem;
		}
	}
</style>
