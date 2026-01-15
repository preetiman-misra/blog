<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
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
		<h1 class="text-fluid-xl font-semibold tracking-tight text-slate-900">Browse by topic</h1>
	</header>

	{#if data}
		<ul class="flex flex-wrap gap-fluid-xs">
			{#each data.categories as category}
				<li>
					<a
						href={`/blog/categories/${category}`}
						class="inline-block text-fluid-xs text-slate-500 hover:text-emerald-600"
					>
						#{category}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
