<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={`/blog/${data.meta.image}`} />
</svelte:head>

<article>
	<!-- Header -->
	<header class="mb-fluid-xl">
		<a
			href="/"
			class="inline-flex items-center gap-1.5 text-fluid-2xs text-slate-400 hover:text-slate-600 mb-fluid-l"
		>
			<svg
				class="w-3.5 h-3.5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			Back
		</a>

		<h1 class="text-fluid-xl font-semibold tracking-tight text-slate-900 mb-fluid-s">
			{data.meta.title}
		</h1>

		<div class="flex items-center gap-fluid-2xs text-fluid-xs text-slate-400">
			<time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
			{#each data.meta.categories as category}
				<span>·</span>
				<span>#{category}</span>
			{/each}
		</div>
	</header>

	<!-- Content -->
	<div class="prose-custom">
		{#if data.meta.image}
			<img src={data.meta.image} alt="" class="w-full rounded-lg mb-fluid-l" />
		{/if}
		{#if data.content}
			{@const Content = data.content}
			<Content />
		{/if}
	</div>
</article>

<style>
	.prose-custom :global(h2) {
		font-size: var(--step-1);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: theme('colors.slate.900');
		margin-top: var(--space-xl);
		margin-bottom: var(--space-s);
	}

	.prose-custom :global(h3) {
		font-size: var(--step-0);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: theme('colors.slate.900');
		margin-top: var(--space-l);
		margin-bottom: var(--space-xs);
	}

	.prose-custom :global(p) {
		color: theme('colors.slate.600');
		line-height: 1.75;
		margin-bottom: var(--space-s);
	}

	.prose-custom :global(a) {
		color: theme('colors.emerald.600');
		text-decoration: none;
	}

	.prose-custom :global(a:hover) {
		text-decoration: underline;
	}

	.prose-custom :global(ul),
	.prose-custom :global(ol) {
		color: theme('colors.slate.600');
		margin-bottom: var(--space-s);
		padding-left: var(--space-m);
	}

	.prose-custom :global(li) {
		margin-bottom: var(--space-2xs);
	}

	.prose-custom :global(blockquote) {
		border-left: 2px solid theme('colors.slate.200');
		padding-left: var(--space-m);
		color: theme('colors.slate.500');
		font-style: italic;
		margin: var(--space-m) 0;
	}

	.prose-custom :global(pre) {
		background-color: theme('colors.slate.900');
		border-radius: 0.5rem;
		padding: var(--space-m);
		overflow-x: auto;
		margin: var(--space-m) 0;
	}

	.prose-custom :global(code) {
		font-size: 0.9em;
	}

	.prose-custom :global(img) {
		border-radius: 0.5rem;
	}

	.prose-custom :global(hr) {
		border: none;
		border-top: 1px solid theme('colors.slate.100');
		margin: var(--space-xl) 0;
	}
</style>
