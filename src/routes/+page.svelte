<script lang="ts">
	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';
	let list: { start: Date; stop: Date }[] = [];

	let currentTime = 0;
	$: exisitingTime = list.reduce(
		(total, { start, stop }) => total + Math.round(stop.getTime() - start.getTime()),
		0
	);
	$: totalTime = exisitingTime + Math.round(currentTime);
</script>

<div class="flex flex-col justify-center gap-8">
	<StopWatch
		onStop={(start, stop) => {
			list = [...list, { start, stop }];
		}}
		onUpdate={(time) => {
			currentTime = time;
		}}
	/>
	<div class="text-center font-mono text-6xl">{getTimeDisplay(totalTime)}</div>
	<div class="flex flex-col gap-2">
		{#each list as item}
			<div class="flex flex-row gap-4">
				<div>{getTimeDisplay(Math.round(item.stop.getTime() - item.start.getTime()))}</div>
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
