import type { PostModule } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post: PostModule = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
};
