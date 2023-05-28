<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { getTimeDisplay } from '$lib/time';

	export let onStop: (start: Date, stop: Date) => void;
	let start: Date | undefined;
	let stop: Date | undefined;

	let display: string = getTimeDisplay(start, stop);

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
		display = getTimeDisplay(start, stop);
		interval = setInterval(() => {
			display = getTimeDisplay(start, stop);
		}, 1000);
	}
	function stopTimer() {
		clear();
		stop = new Date();
		display = getTimeDisplay(start, stop);
		if (start) {
			onStop(start, stop);
			start = undefined;
			stop = undefined;
			display = getTimeDisplay(start, stop);
		}
	}
</script>

<div class="flex flex-col justify-center gap-2">
	<div class="text-center font-mono text-6xl">{display}</div>
	<div class="flex flex-row justify-center gap-2">
		<Button on:click={startTimer} disabled={!!start}>Start</Button>
		<Button on:click={stopTimer} disabled={!!stop}>Stop</Button>
	</div>
</div>
