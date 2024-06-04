<script lang="ts">
	import '../tailwind.css';

	import { title, description } from '$lib/config';
	import Footer from '$lib/components/footer.svelte';
</script>

<!-- SEO -->
<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>

<div class="layout">
	<!-- Header -->
	<nav class="border-b border-slate-200">
		<div class="mx-auto container max-w-3xl flex justify-between items-center py-8 px-4">
			<!-- Logo -->
			<a href="/" class="font-black text-3xl hover:text-blue-600">PM.</a>
			<div>
				<ul class="flex items-center space-x-4 font-medium text-slate-400">
          <a class="transition-all text-slate-500 hover:text-slate-900" href="/blog/categories">Blog</a>
					<a
						class="transition-all bg-slate-900 hover:bg-slate-700 text-slate-100 rounded-full py-3 px-5 text-sm font-bold"
						href="mailto:preetiman.misra@gmail.com"
					>
						Contact</a
					>
				</ul>
			</div>
		</div>
	</nav>

	<!-- main -->
	<main class="mx-auto container max-w-3xl mt-12 px-4 lg:px-0">
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
