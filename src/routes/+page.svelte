<script lang="ts">
	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';
	let list: { start: Date; stop: Date }[] = [];

	let currentTime = 0;
	$: exisitingTime = list.reduce(
		(total, { start, stop }) => total + Math.round(stop.getTime() - start.getTime()),
		0
	);
	$: totalTime = projectHasTimeLimit
		? parseInt(projectTimeLimitDuration) - (exisitingTime + Math.round(currentTime))
		: exisitingTime + Math.round(currentTime);

	let projectName = 'New Project';
	let projectHasTimeLimit = false;
	let projectTimeLimitDuration = '0';
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
		<h2>Project Settings</h2>
		<label for="project_name">
			Name
			<input id="project_name" bind:value={projectName} />
		</label>
		<h3>Time Limit</h3>
		<div class="flex flex-col gap-2 pl-4">
			<label for="has_time_limit">
				Enable
				<input id="has_time_limit" type="checkbox" bind:checked={projectHasTimeLimit} />
			</label>
			<label for="time_limit">
				Duration
				<input
					id="time_limit"
					disabled={!projectHasTimeLimit}
					bind:value={projectTimeLimitDuration}
				/>
			</label>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<h2>Past Sessions</h2>
		{#each list as item}
			<div class="flex flex-row gap-4">
				<div>{getTimeDisplay(Math.round(item.stop.getTime() - item.start.getTime()))}</div>
				<div>{item.start.toLocaleString()}</div>
				<div>{item.stop.toLocaleString()}</div>
			</div>
		{:else}
			<div>No sessions logged so far</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
