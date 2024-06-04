export type Category =
	| 'sveltekit'
	| 'svelte'
	| 'musings'
	| 'technology'
	| 'business'
	| 'web'
	| 'life'
	| 'svg';

export type Post = {
	metadata: {
		title: string;
		description: string;
		slug: string;
		date: string;
		categories: Category[];
		published: boolean;
		image?: string;
	};
};
