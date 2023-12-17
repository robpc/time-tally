<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../app.css';

	$: showBack = $page.route.id != '/';
</script>

<svelte:head>
	<title>Time Tally</title>
</svelte:head>

<div class="border-b border-zinc-500 bg-zinc-300 p-4 flex flex-row items-center gap-2">
	<img src={`${base}/timer.png`} class="h-4" alt="app logo" />
	<div class="font-mono text-xs font-bold text-zinc-600">time-tally</div>
</div>
<div class="mx-2 h-8 w-full">
	{#if showBack}<a href="/" class="font-mono text-xs text-zinc-500">⋘ projects</a>{/if}
</div>
<div class="flex flex-col items-center justify-center px-4 py-1">
	<slot />
</div>
