import { writable } from 'svelte/store';

// export const theme = writable(typeof document !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem(theme) : 'light' );
export const theme = writable('light');