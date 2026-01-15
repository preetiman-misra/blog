import type { Post, Category } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const category = params.category as Category;
	const res = await fetch('/api/posts');
	const posts: Post[] = await res.json();

	const postWithCategories = posts.filter((p) => p.metadata.categories.includes(category));

	const sortedPosts = postWithCategories.sort(
		(first, second) =>
			new Date(second.metadata.date).getTime() - new Date(first.metadata.date).getTime()
	);

	return {
		category,
		posts: sortedPosts
	};
};
