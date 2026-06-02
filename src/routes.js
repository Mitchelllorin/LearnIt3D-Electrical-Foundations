import { writable } from 'svelte/store';

export const currentPage = writable({ name: 'modules' });

export function route(name, params = {}) {
    currentPage.set({ name, ...params });
}
