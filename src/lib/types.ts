import type { Component } from 'svelte';

export type Category =
	| 'sveltekit'
	| 'svelte'
	| 'musings'
	| 'technology'
	| 'business'
	| 'web'
	| 'life'
	| 'svg';

export type PostMetadata = {
	title: string;
	description: string;
	slug: string;
	date: string;
	categories: Category[];
	published: boolean;
	image?: string;
};

export type Post = {
	metadata: PostMetadata;
};

export type PostModule = {
	default: Component;
	metadata: PostMetadata;
};
