<script lang="ts">
	import { CATEGORY } from '$lib/components/List.ts';
	let items = [
		{
			name: 'Multi-Modal Self-Supervised Learning For 3D Medical Image Segmentation Of Cardio Calcified Plaques',
			categories: [CATEGORY.COMPUTER_VISION, CATEGORY.DEEP_LEARNING]
		},
		{
			name: 'TTool: A Supervised Artificial Intelligence-Assisted Visual Pose Detector for Tool Heads in Augmented Reality Woodworking',
			categories: [CATEGORY.SOFTWARE_ENGINEERING, CATEGORY.COMPUTER_VISION]
		},
		{
			name: 'AI4TB: An Efficient Edge-Device Interpretable Chest X-Ray Tuberculosis Detection',
			categories: [
				CATEGORY.COMPUTER_VISION,
				CATEGORY.DEEP_LEARNING,
				CATEGORY.MACHINE_LEARNING_ENGINEER,
				CATEGORY.SOFTWARE_ENGINEERING
			]
		},
	];

	let tags = items
		.flatMap((item) => item.categories)
		.reduce((acc: { name: string; selected: boolean }[], category) => {
			if (!acc.find((tag) => tag.name === category)) {
				acc.push({ name: category, selected: true });
			}
			return acc;
		}, []);

	$: filteredItems = items.filter((item) => {
		return tags.find((tag) => tag.selected && item.categories.includes(tag.name));
	});
</script>

<div>
	<div class="flex flex-row gap-4 my-2">
		{#each tags as tag}
			<button
				class:bg-gray-500={!tag.selected}
				class:hover:bg-gray-700={!tag.selected}
				class:bg-blue-500={tag.selected}
				class:hover:bg-blue-700={tag.selected}
				class="text-sm text-white font-bold py-2 px-4 rounded-full"
				on:click={() => {
					tag.selected = !tag.selected;
				}}>{tag.name}</button
			>
		{/each}
	</div>
	<ul>
		{#each filteredItems as item}
			<li>{item.name}</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		@apply bg-red-200;
		@apply text-gray-800;
		@apply p-2;
		@apply m-2;
		@apply rounded-lg;
	}

	li:hover {
		background-color: #f0f0f0;
	}
</style>
