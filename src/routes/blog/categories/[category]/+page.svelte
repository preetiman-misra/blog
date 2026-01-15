<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<!-- Header -->
	<header class="mb-fluid-xl">
		<a
			href="/blog/categories"
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
			All topics
		</a>
		<h1 class="text-fluid-xl font-semibold tracking-tight text-slate-900">
			#{data.category}
		</h1>
	</header>

	<!-- Posts List -->
	<div class="space-y-fluid-xs">
		{#each data.posts as post, i}
			{#if i > 0}
				<div class="border-t border-slate-100"></div>
			{/if}
			<article class="group py-fluid-m">
				<a href={`/blog/${post.metadata.slug}`} class="block">
					<div class="flex flex-col sm:flex-row sm:items-baseline gap-fluid-xs sm:gap-fluid-m">
						<time
							datetime={post.metadata.date}
							class="text-fluid-xs text-slate-400 tabular-nums shrink-0 sm:w-28"
						>
							{formatDate(post.metadata.date)}
						</time>

						<div class="space-y-fluid-2xs flex-1">
							<h2
								class="text-fluid-base font-medium text-slate-900 group-hover:text-emerald-600 transition-colors"
							>
								{post.metadata.title}
							</h2>

							<p class="text-fluid-xs text-slate-500 leading-relaxed line-clamp-2">
								{post.metadata.description}
							</p>
						</div>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
