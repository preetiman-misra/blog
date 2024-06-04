import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const posts: Post[] = await res.json();

	const postCategories = posts.flatMap((post) => {
		const postCategories = post.metadata.categories;

		return postCategories;
	});

	const categories = new Set(postCategories);

	return {
		categories
	};
};
