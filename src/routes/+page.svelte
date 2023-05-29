<script lang="ts">
	import { myStore } from '$lib/store';
	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';

	const { project } = myStore;

	let currentTime = 0;
	$: exisitingTime = $project.sessions
		? $project.sessions.reduce(
				(total, { start, stop }) =>
					total + Math.round(new Date(stop).getTime() - new Date(start).getTime()),
				0
		  )
		: 0;
	$: totalTime = $project.isTimeLimited
		? parseInt($project.timeLimitDuration || '0') - (exisitingTime + Math.round(currentTime))
		: exisitingTime + Math.round(currentTime);
</script>

<div class="flex flex-col justify-center gap-8">
	<StopWatch
		onStop={(start, stop) => {
			$project.sessions = [
				...$project.sessions,
				{ start: start.toISOString(), stop: stop.toISOString() }
			];
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
			<input id="project_name" bind:value={$project.name} />
		</label>
		<h3>Time Limit</h3>
		<div class="flex flex-col gap-2 pl-4">
			<label for="has_time_limit">
				Enable
				<input id="has_time_limit" type="checkbox" bind:checked={$project.isTimeLimited} />
			</label>
			<label for="time_limit">
				Duration
				<input
					id="time_limit"
					disabled={!$project.isTimeLimited}
					bind:value={$project.timeLimitDuration}
				/>
			</label>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<h2>Past Sessions</h2>
		{#each $project.sessions as item}
			<div class="flex flex-row gap-4">
				<div>
					{getTimeDisplay(
						Math.round(new Date(item.stop).getTime() - new Date(item.start).getTime())
					)}
				</div>
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
