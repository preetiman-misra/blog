<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- Posts -->
<section>
	<p class="text-5xl mb-24 leading-tight">
		👋 Hey, I&apos;m <span class="text-indigo-600 underline underline-offset-4 italic"
			>Preetiman</span
		>. This is my tiny corner on the internet.
	</p>

  <p class="font-semibold text-xl mb-4">Blog <span class="-ml-1.5 text-4xl">&rarr;</span></p>
	<ul class="space-y-4">
		{#each data.posts as post}
			<li class="border-b pb-6">
				<a
					href={`/blog/${post.metadata.slug}`}
					class="transition-all font-black text-2xl hover:text-indigo-600"
					>{post.metadata.title}</a
				>
				<p class="text-slate-400 italic text-sm my-2">{formatDate(post.metadata.date)}</p>
				<div class="mt-2 mb-4 flex items-center space-x-2">
					{#each post.metadata.categories as category}
						<span class="text-indigo-600 font-semibold text-sm">&num;{category}</span>
					{/each}
				</div>
				<p class="text-slate-800">{post.metadata.description}</p>
			</li>
		{/each}
	</ul>
</section>
