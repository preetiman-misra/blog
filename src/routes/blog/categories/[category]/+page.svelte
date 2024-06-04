<script lang="ts">
	import { formatDate } from "$lib/utils";
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<!-- Posts -->
<section>
  <p class="font-semibold text-xl mb-12">Category: {data.category}</p>
	<ul class="space-y-4">
		{#each data.posts as post}
			<li class="border-b pb-6">
				<a
					href={`/blog/${post.metadata.slug}`}
					class="transition-all font-black text-2xl text-indigo-600 hover:underline"
					>{post.metadata.title}</a
				>
				<p class="text-slate-400 italic text-sm my-2">{formatDate(post.metadata.date)}</p>
				<p class="text-slate-800">{post.metadata.description}</p>
			</li>
		{/each}
	</ul>
</section>
