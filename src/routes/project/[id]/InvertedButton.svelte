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
		@apply rounded-2xl 
			border border-zinc-200 px-2 
			py-0.5 font-mono
			text-zinc-600 transition 
			hover:bg-zinc-200 
			disabled:bg-zinc-200 disabled:text-zinc-400;
	}
</style>
