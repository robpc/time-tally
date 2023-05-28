<script lang="ts">
	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';
	let list: { start: Date; stop: Date }[] = [];
</script>

<div class="flex flex-col justify-center gap-2">
	<StopWatch
		onStop={(start, stop) => {
			list = [...list, { start, stop }];
		}}
	/>
	<div class="flex flex-col gap-2">
		{#each list as item}
			<div class="flex flex-row gap-4">
				<div>{getTimeDisplay(item.start, item.stop)}</div>
				<div>{item.start.toLocaleString()}</div>
				<div>{item.stop.toLocaleString()}</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
