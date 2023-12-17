<script lang="ts">
	import { page } from '$app/stores';
	import { myStore } from '$lib/store';

	import Project from './Project.svelte';

	$: id = $page.params.id;

	const application = myStore.application;

	// use index so we can use the dot notation to reference the object
	// this lets svelte track updates
	$: idx = $application.projects.findIndex((p) => p.id == id);
</script>

{#if idx > -1}
	<Project bind:project={$application.projects[idx]} />
{:else if !$application.loading}
	<h1 class="text-2xl mb-4">Project Not found</h1>
	<div><a href="/" class="hover:underline text-blue-400">Return to project list</a></div>
{/if}
