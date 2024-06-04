<script lang="ts">
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={`/blog/${data.meta.image}`} />
</svelte:head>

<article class="pb-12 mb-12 border-b border-slate-200">
	<hgroup class="inline-block">
		<h1 class="font-black text-4xl mb-2">{data.meta.title}</h1>
		<p class="text-md text-slate-500 italic mb-2">Published on {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="mt-2 mb-8 flex items-center space-x-1">
		{#each data.meta.categories as category}
			<span class="bg-slate-900 text-slate-100 font-medium text-sm rounded-full py-2 px-3"
				>&num;{category}</span
			>
		{/each}
	</div>

	<div class="prose prose-p:text-xl prose-li:text-lg max-w-none">
		{#if data.meta.image}
			<img src={data.meta.image} alt="Banner" />
		{/if}
		<svelte:component this={data.content} />
	</div>
</article>
