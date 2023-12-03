<script lang="ts">
	import { myStore } from '$lib/store';
	import { nanoid } from 'nanoid';
	import Button from './project/[id]/Button.svelte';

	const { application } = myStore;

	function newProject() {
		$application.projects = [...$application.projects, { id: nanoid(6), sessions: [] }];
	}
</script>

<Button on:click={newProject}>New Project</Button>

{#each $application.projects as project (project.id)}
	<a href={`project/${project.id}`}>{project.name || 'Unamed'}</a>
{:else}
	<div>No projects</div>
{/each}
