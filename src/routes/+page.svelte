<script lang="ts">
	import dayjs from 'dayjs';
	import localizedFormat from 'dayjs/plugin/localizedFormat';
	import { myStore } from '$lib/store';
	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';

	const { project } = myStore;

	dayjs.extend(localizedFormat);

	function date(d: string) {
		return dayjs(d).format('L LT');
	}

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
	<input id="project_name" bind:value={$project.name} class="bg-zinc-100 text-4xl" />
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
	<div class="flex flex-col items-center gap-2">
		<label for="has_time_limit">
			<input id="has_time_limit" type="checkbox" bind:checked={$project.isTimeLimited} />
			Time Limit
		</label>

		<input
			id="time_limit"
			disabled={!$project.isTimeLimited}
			bind:value={$project.timeLimitDuration}
		/>
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
				<div>{date(item.start)}</div>
				<div>{date(item.stop)}</div>
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
