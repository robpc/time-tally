<script lang="ts">
	import { nanoid } from 'nanoid';

	import { getTimeDisplay } from '$lib/time';
	import StopWatch from './StopWatch.svelte';
	import Session from './Session.svelte';
	import type { Project } from '$lib/store';

	export var project: Project;

	function removeSessionById(id: string) {
		project.sessions = project.sessions.filter((s) => s.id != id);
	}

	let currentTime = 0;
	$: exisitingTime = project.sessions
		? project.sessions.reduce(
				(total, { start, stop }) =>
					total + Math.round(new Date(stop).getTime() - new Date(start).getTime()),
				0
			)
		: 0;
	$: totalTime = project.isTimeLimited
		? parseInt(project.timeLimitDuration || '0') - (exisitingTime + Math.round(currentTime))
		: exisitingTime + Math.round(currentTime);
</script>

<svelte:head>
	<title>{project.name} - Time Tally</title>
</svelte:head>

<div class="flex flex-col justify-center gap-8">
	<input id="project_name" bind:value={project.name} placeholder="Project Name" class="text-4xl" />
	<div class="text-center font-mono text-6xl">{getTimeDisplay(totalTime)}</div>
	
	<div class="flex flex-col items-center gap-2">
		<label for="has_time_limit">
			<input id="has_time_limit" type="checkbox" bind:checked={project.isTimeLimited} />
			Time Limit
		</label>

		<input
			id="time_limit"
			disabled={!project.isTimeLimited}
			bind:value={project.timeLimitDuration}
		/>
	</div>
	
	<StopWatch
		onStop={(start, stop) => {
			project.sessions = [
				...project.sessions,
				{ id: nanoid(6), start: start.toISOString(), stop: stop.toISOString() }
			];
		}}
		onUpdate={(time) => {
			currentTime = time;
		}}
	/>
	
	<div class="flex flex-col gap-4">
		<h2 class="mb-2 text-2xl">Past Sessions</h2>
		<div class="flex flex-col-reverse gap-4">
			{#each project.sessions as item (item.id)}
				<Session bind:item onDelete={() => removeSessionById(item.id)} />
			{:else}
				<div>No sessions logged so far</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
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
