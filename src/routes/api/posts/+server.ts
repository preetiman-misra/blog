import { json } from '@sveltejs/kit';
import type { Category, Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const postMetadata = file.metadata as {
				title: string;
				description: string;
				image: string;
				date: string;
				categories: Category[];
				published: boolean;
			};
			const post = {
				metadata: {
					...postMetadata,
					slug
				}
			} satisfies Post;
			if (post.metadata.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) =>
			new Date(second.metadata.date).getTime() - new Date(first.metadata.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
