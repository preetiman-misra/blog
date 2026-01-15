<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<!-- Hero Section -->
<section class="pb-fluid-3xl">
	<div class="max-w-2xl">
		<p class="text-fluid-xs font-medium text-emerald-600 mb-fluid-s tracking-wide uppercase">
			Welcome
		</p>
		<h1
			class="text-fluid-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 mb-fluid-m"
		>
			Hey, I'm Preetiman.
		</h1>
		<p class="text-fluid-base text-slate-600 leading-relaxed">
			A developer writing about technology, building products, and the occasional reflection on
			life. Thanks for stopping by.
		</p>
	</div>
</section>

<!-- Posts Section -->
<section>
	<header class="mb-fluid-xl">
		<h2 class="text-fluid-xs font-medium text-slate-400 tracking-wide uppercase">Latest Posts</h2>
	</header>

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
							<h3
								class="text-fluid-base font-medium text-slate-900 group-hover:text-emerald-600 transition-colors"
							>
								{post.metadata.title}
							</h3>

							<p class="text-fluid-xs text-slate-500 leading-relaxed line-clamp-2">
								{post.metadata.description}
							</p>

							<div class="flex flex-wrap gap-fluid-2xs pt-fluid-2xs">
								{#each post.metadata.categories as category}
									<span class="text-fluid-2xs text-slate-400">#{category}</span>
								{/each}
							</div>
						</div>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
