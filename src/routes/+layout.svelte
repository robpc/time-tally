<script>
	import { page } from '$app/stores';
	import '../app.css';

	$: showBack = $page.route.id != '/';
</script>

<div class="border-b border-zinc-500 bg-zinc-300 p-4">
	<div class="font-mono text-xs font-bold text-zinc-600">time-tally</div>
</div>
<div class="mx-2 h-8 w-full">
	{#if showBack}<a href="/" class="font-mono text-xs text-zinc-500">⋘ projects</a>{/if}
</div>
<div class="flex flex-col items-center justify-center px-4 py-1">
	<slot />
</div>
