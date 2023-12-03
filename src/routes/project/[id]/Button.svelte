<script lang="ts">
	let buttonProps = {
		class: $$restProps.class
	};

	export let disabled: boolean = false;
</script>

<button on:click {...buttonProps} {disabled}>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply rounded-2xl bg-zinc-800 px-4 py-1 font-mono text-white transition hover:bg-zinc-600 disabled:bg-zinc-200 disabled:text-zinc-400;
	}
</style>
