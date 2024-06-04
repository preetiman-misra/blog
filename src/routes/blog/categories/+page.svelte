<script lang="ts">
	import type { PageData } from "./$types";
  import Category from "$lib/components/Category.svelte";

  export let data: PageData
</script>

<h1 class="font-bold text-2xl mb-4">Categories</h1>
<p class="text-lg">Filter posts by categories.</p>

{#if data}
  <ul class="flex space-x-2 mt-8">
    {#each data.categories as category}
      <li>
        <a href={`/blog/categories/${category}`}>
          <Category {category} />
        </a>
      </li> 
    {/each}
  </ul>
{/if}
