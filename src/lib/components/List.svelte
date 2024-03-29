<script lang="ts">
	import { CATEGORY } from '$lib/components/List.ts';
	let items = [
		{
			name: 'Multi-Modal Self-Supervised Learning For 3D Medical Image Segmentation Of Cardio Calcified Plaques',
			categories: [CATEGORY.COMPUTER_VISION]
		},
		{
			name: 'AI4TB: An Efficient Edge-Device Interpretable Chest X-Ray Tuberculosis Detection',
			categories: [
				CATEGORY.COMPUTER_VISION,
				CATEGORY.MACHINE_LEARNING_ENGINEER,
				CATEGORY.SOFTWARE_ENGINEERING
			]
		},
        {
            name: 'Aerial Risk Detection: A Deep Learning Solution to Help Insurance Underwriters Assess Sites from Aerial/Satellite Images',
            categories: [CATEGORY.COMPUTER_VISION, CATEGORY.SOFTWARE_ENGINEERING]
        },
        {
			name: 'TTool: A Supervised Artificial Intelligence-Assisted Visual Pose Detector for Tool Heads in Augmented Reality Woodworking',
			categories: [CATEGORY.SOFTWARE_ENGINEERING, CATEGORY.COMPUTER_VISION]
		},
        {
            name: 'AI4Autism: An Object Detection for Autism Spectrum Disorder Diagnosis',
            categories: [CATEGORY.NLP, CATEGORY.COMPUTER_VISION, CATEGORY.MACHINE_LEARNING_ENGINEER]
        },
        {
            name: 'Data Scientist at SCB: MerlinDIY: An AutoML for non-technical users to build and utilize deep learning models',
            categories: [CATEGORY.MACHINE_LEARNING_ENGINEER, CATEGORY.SOFTWARE_ENGINEERING]
        },
        {
            name: 'Software Engineer at Taskworld: Maintaining and Developing Taskworld\'s Core Features',
            categories: [CATEGORY.SOFTWARE_ENGINEERING]
        },
        {
            name: 'Quantitative Developer at WorldQuant: A Data-Driven Dashboard for Quantitative Researchers',
            categories: [CATEGORY.SOFTWARE_ENGINEERING]
        },
        {
            name: 'Data Scientist at HOME dot TECH: An Unsupervised Learning for Real Estate Property Analysis',
            categories: [CATEGORY.MACHINE_LEARNING]
        }
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
		return tags.find((tag) => selectAll || tag.selected && item.categories.includes(tag.name));
	});
    let selectAll = true;
</script>

<div>
	<div class="flex flex-row gap-4 my-2">
        <button
				class:bg-gray-500={!selectAll}
				class:hover:bg-gray-700={!selectAll}
				class:bg-blue-500={selectAll}
				class:hover:bg-blue-700={selectAll}
				class="text-sm text-white font-bold py-2 px-4 rounded-full"
				on:click={() => {
					selectAll = !selectAll;
                    if (selectAll) {
                        tags.forEach((tag) => {
                            tag.selected = true;
                        });
                    } else {
                        tags.forEach((tag) => {
                            tag.selected = false;
                        });
                    }
				}}>ALL</button
			>
        {#key selectAll}
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
        {/key}
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
		@apply bg-sky-300;
		@apply text-gray-800;
		@apply p-2;
		@apply m-2;
		@apply rounded-lg;
	}

	li:hover {
		@apply bg-sky-400;
        @apply text-gray-900
	}
</style>
