import { browser } from '$app/environment';

import { writable } from 'svelte/store';

import type { Writable } from 'svelte/store';

export type Session = {
	name?: string;
	start: string;
	stop: string;
};

export type Project = {
	name?: string;
	isTimeLimited?: boolean;
	timeLimitDuration?: string;

	sessions: Session[];
};

class MyStore {
	public project: Writable<Project>;
	constructor() {
		this.project = writable(<Project>{ sessions: [] });

		if (browser) {
			const project = localStorage.getItem('project');
			this.project.set(project ? JSON.parse(project) : <Project>{ sessions: [] });
			this.project.subscribe((value) => localStorage.setItem('project', JSON.stringify(value)));
		}
	}
}

export const myStore = new MyStore();
