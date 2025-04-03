import { writable } from 'svelte/store';
export const activeSection = writable("game");
export const nfts = writable([]);