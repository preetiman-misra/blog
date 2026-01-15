<script lang="ts">
	const ventures = [
		{
			name: 'Osuo Global',
			description: 'Healthcare and pharmaceutical consulting',
			url: 'https://osuoglobal.com',
			status: 'Active'
		},
		{
			name: 'Green Waves',
			description: 'Active Pharmaceutical Ingredients manufacturing',
			url: 'https://greenwaves.in',
			status: 'Active'
		},
		{
			name: 'Tiny Pocket',
			description: 'Consumer brand house for personal care and wellness',
			url: 'https://tinypocket.in',
			status: 'Active'
		},
		{
			name: 'Bloom Biolabs',
			description: 'Biotech company',
			url: 'https://bloombiolabs.com',
			status: 'Active'
		}
	];
</script>

<svelte:head>
	<title>Work — Preetiman Misra</title>
	<meta property="og:title" content="Work — Preetiman Misra" />
	<meta property="og:description" content="Current ventures and projects" />
</svelte:head>

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
		<h1 class="text-fluid-xl font-semibold tracking-tight text-slate-900">Work</h1>
		<p class="text-fluid-base text-slate-500 mt-fluid-s">
			Things I'm currently building and involved with.
		</p>
	</header>

	<div class="space-y-fluid-xs">
		{#each ventures as venture, i}
			{#if i > 0}
				<div class="border-t border-slate-100"></div>
			{/if}
			<article class="group py-fluid-m">
				<a href={venture.url} target="_blank" rel="noopener noreferrer" class="block">
					<div class="flex flex-col sm:flex-row sm:items-baseline gap-fluid-xs sm:gap-fluid-m">
						<span class="text-fluid-xs text-slate-400 shrink-0 sm:w-28">
							{venture.status}
						</span>

						<div class="space-y-fluid-2xs flex-1">
							<h2
								class="text-fluid-base font-medium text-slate-900 group-hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5"
							>
								{venture.name}
								<svg
									class="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</h2>

							<p class="text-fluid-xs text-slate-500 leading-relaxed">
								{venture.description}
							</p>
						</div>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
