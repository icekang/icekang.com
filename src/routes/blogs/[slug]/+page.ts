import { blogItems } from '$lib/data/blogs';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const blog = blogItems.find((item) => item.slug === params.slug);

	if (!blog) {
		throw error(404, 'Blog post not found');
	}

	return {
		blog
	};
};
