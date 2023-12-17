import { browser } from '$app/environment';

import { writable } from 'svelte/store';

import type { Writable } from 'svelte/store';

export type Session = {
	id: string;
	name?: string;
	start: string;
	stop: string;
};

export type Project = {
	id: string;
	name?: string;
	isTimeLimited?: boolean;
	timeLimitDuration?: string;

	sessions: Session[];
};

export type Application = {
	projects: Project[];
	loading?: boolean;
};

const STORE_NAME = 'time-tally';

class MyStore {
	public application: Writable<Application>;
	constructor() {
		this.application = writable(<Application>{ projects: [], loading: true });

		if (browser) {
			const project = localStorage.getItem(STORE_NAME);
			this.application.set(project ? JSON.parse(project) : <Application>{ projects: [] });
			this.application.subscribe((value) =>
				localStorage.setItem(STORE_NAME, JSON.stringify(value))
			);
		}
	}
}

export const myStore = new MyStore();
