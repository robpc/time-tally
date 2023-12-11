<script lang="ts">
	import { getTimeDisplay } from '$lib/time';
	import StartStopTime from './StartStopTime.svelte';
	import type { Session } from '$lib/store';
	import InvertedButton from './InvertedButton.svelte';

	export var item: Session;
	export var onDelete: () => void;
</script>

<div class="flex w-full flex-row items-center gap-2">
	<div class="font-mono text-lg">
		{getTimeDisplay(Math.round(new Date(item.stop).getTime() - new Date(item.start).getTime()))}
	</div>
	<div class="gap-0.75 flex w-full flex-col">
		<div class="ml-2 w-full text-right text-xs text-zinc-500">
			<StartStopTime start={item.start} stop={item.stop} />
		</div>
		<input id="session_name_{item.id}" placeholder="Session name" bind:value={item.name} />
	</div>
	<InvertedButton on:click={onDelete}>🞪</InvertedButton>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}

	input {
		@apply border-b-2 border-zinc-100 bg-zinc-100 px-2 py-0.5;
		@apply grow;
	}

	input:hover {
		@apply bg-zinc-50;
	}
	input:focus {
		@apply border-zinc-400 bg-zinc-50 outline-none;
	}
</style>
