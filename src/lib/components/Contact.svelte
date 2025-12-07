<script lang="ts" context="module">
	export interface ContactItem {
		label: string;
		value: string;
		href: string;
		external?: boolean;
	}
</script>

<script lang="ts">
	export let contacts: ContactItem[] = [];
</script>

<section class="section">
	<h2>Contact</h2>
	<div class="contact-grid">
		{#each contacts as contact}
			<div class="contact-item">
				<span class="label">{contact.label}:</span>
				<a href={contact.href} target={contact.external ? '_blank' : undefined}>
					{contact.value}
				</a>
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

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.contact-item .label {
		font-weight: 600;
		color: rgb(156, 163, 175);
		min-width: 4rem;
	}

	.contact-item a {
		color: rgb(96, 165, 250);
		text-decoration: none;
		transition: color 0.2s;
	}

	.contact-item a:hover {
		color: rgb(147, 197, 253);
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
