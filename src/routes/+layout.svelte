<script lang="ts">
	import '../tailwind.css';

	import { title, description } from '$lib/config';
	import Footer from '$lib/components/footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
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
	<header class="py-fluid-l">
		<nav class="mx-auto container max-w-2xl flex justify-between items-center px-fluid-m">
			<!-- Logo -->
			<a
				href="/"
				class="font-semibold text-fluid-base tracking-tight text-slate-900 hover:text-emerald-600"
			>
				preetiman.
			</a>

			<!-- Navigation -->
			<ul class="flex items-center gap-fluid-m">
				<li>
					<a class="text-fluid-xs text-slate-500 hover:text-slate-900" href="/blog/categories">
						Writing
					</a>
				</li>
				<li>
					<a class="text-fluid-xs text-slate-500 hover:text-slate-900" href="/work"> Work </a>
				</li>
				<li>
					<a
						class="text-fluid-xs text-slate-500 hover:text-slate-900"
						href="mailto:preetiman.misra@gmail.com"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="mx-auto container max-w-2xl py-fluid-l px-fluid-m">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		min-height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
