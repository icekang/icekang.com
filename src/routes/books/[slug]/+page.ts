import { error } from '@sveltejs/kit';
import { books } from '$lib/data/books';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const book = books.find((b) => b.id === params.slug);

	if (!book) {
		throw error(404, 'Book not found');
	}

	return {
		book
	};
};
