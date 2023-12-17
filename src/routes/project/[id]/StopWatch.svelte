<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { getTimeDisplay } from '$lib/time';

	export let onUpdate: (time: number) => void;
	export let onStop: (start: Date, stop: Date) => void;
	let start: Date | undefined;
	let stop: Date | undefined;
	$: time = start && stop ? stop.getTime() - start.getTime() : 0;

	let display: string = getTimeDisplay(time);

	let interval: number | undefined;
	function clear() {
		if (interval) {
			clearInterval(interval);
			interval = undefined;
		}
	}
	onMount(() => clear);
	function startTimer() {
		clear();
		start = new Date();
		stop = undefined;
		display = getTimeDisplay(time);
		onUpdate(time);
		interval = setInterval(() => {
			const update = start ? Date.now() - start.getTime() : 0;
			display = getTimeDisplay(update);
			onUpdate(update);
		}, 1000);
	}
	function stopTimer() {
		clear();
		stop = new Date();
		display = getTimeDisplay(time);
		if (start) {
			onStop(start, stop);
			start = undefined;
			stop = undefined;
			display = getTimeDisplay(time);
			onUpdate(time);
		}
	}
</script>

<div class="flex flex-row justify-between gap-2 items-center rounded-2xl bg-zinc-200 p-4">
	<div class="text-center font-mono text-4xl">{display}</div>
	<div class="flex flex-row justify-center gap-2 h-8">
		<Button on:click={startTimer} disabled={!!start}>Start</Button>
		<Button on:click={stopTimer} disabled={!!stop}>Stop</Button>
	</div>
</div>
