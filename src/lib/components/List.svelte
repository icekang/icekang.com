<script lang="ts">
	// Filterable list

	let items = [
		{ id: 1, name: 'apple', category: 'fruit' },
		{ id: 2, name: 'banana', category: 'fruit' },
		{ id: 3, name: 'carrot', category: 'vegetable' },
		{ id: 4, name: 'date', category: 'fruit' },
		{ id: 5, name: 'eggplant', category: 'vegetable' },
		{ id: 6, name: 'fig', category: 'fruit' },
		{ id: 7, name: 'grape', category: 'fruit' },
		{ id: 8, name: 'honeydew', category: 'fruit' },
		{ id: 9, name: 'iceberg lettuce', category: 'vegetable' },
		{ id: 10, name: 'jackfruit', category: 'fruit' },
		{ id: 11, name: 'kiwi', category: 'fruit' },
		{ id: 12, name: 'lemon', category: 'fruit' },
		{ id: 13, name: 'mango', category: 'fruit' },
		{ id: 14, name: 'nectarine', category: 'fruit' },
		{ id: 15, name: 'orange', category: 'fruit' },
		{ id: 16, name: 'pear', category: 'fruit' },
		{ id: 17, name: 'quince', category: 'fruit' },
		{ id: 18, name: 'raspberry', category: 'fruit' },
		{ id: 19, name: 'strawberry', category: 'fruit' },
		{ id: 20, name: 'tomato', category: 'fruit' },
		{ id: 21, name: 'ugli fruit', category: 'fruit' },
		{ id: 22, name: 'vanilla bean', category: 'fruit' },
		{ id: 23, name: 'watermelon', category: 'fruit' },
		{ id: 24, name: 'xigua', category: 'fruit' },
		{ id: 25, name: 'yellow squash', category: 'vegetable' },
		{ id: 26, name: 'zucchini', category: 'vegetable' }
	];

	let tags = items.reduce((accumulator: { name: string; selected: boolean }[], item) => {
		let category = item.category.toLowerCase();
		if (!accumulator.some((tag) => tag.name === category)) {
			accumulator.push({ name: category, selected: true });
		}
		return accumulator;
	}, []);

	$: filteredItems = items.filter((item) => {
		return tags.find((tag) => tag.selected && tag.name === item.category);
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
