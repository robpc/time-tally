<script lang="ts">
	import { nanoid } from 'nanoid';

	import { myStore } from '$lib/store';
	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';
	import Session from './Session.svelte';

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
	<input id="project_name" bind:value={$project.name} placeholder="Project Name" class="text-4xl" />
	<StopWatch
		onStop={(start, stop) => {
			$project.sessions = [
				...$project.sessions,
				{ id: nanoid(6), start: start.toISOString(), stop: stop.toISOString() }
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
		<div class="flex flex-col-reverse gap-1">
			{#each $project.sessions as item (item.id)}
				<Session bind:item />
			{:else}
				<div>No sessions logged so far</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}

	input {
		@apply border-b-2 border-zinc-100 bg-zinc-100 px-2 py-0.5;
	}

	input:hover {
		@apply bg-zinc-50;
	}
	input:focus {
		@apply border-zinc-400 bg-zinc-50 outline-none;
	}
</style>
