<script lang="ts">
	import { myStore } from '$lib/store';
	import { nanoid } from 'nanoid';
	import Button from './project/[id]/Button.svelte';
	import InvertedButton from './project/[id]/InvertedButton.svelte';

	const { application } = myStore;

	function newProject() {
		$application.projects = [...$application.projects, { id: nanoid(6), sessions: [] }];
	}

	function onDelete(id: string) {
		$application.projects = [...$application.projects.filter((p) => p.id !== id)];
	}
</script>

<Button on:click={newProject}>New Project</Button>

<div class="mt-4 w-full max-w-md">
	<h1 class="mb-4 px-2 text-2xl">Projects</h1>
	<div class="flex w-full flex-col gap-2 px-8">
		{#each $application.projects as project (project.id)}
			<div class="flex w-full flex-row gap-2">
				<a class="grow" href={`project/${project.id}`}>{project.name || 'Unamed'}</a>
				<InvertedButton on:click={() => onDelete(project.id)}>🞪</InvertedButton>
			</div>
		{:else}
			<div>No projects</div>
		{/each}
	</div>
</div>
