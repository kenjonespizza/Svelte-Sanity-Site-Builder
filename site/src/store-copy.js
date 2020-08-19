import { writable } from 'svelte/store';

let localTheme = 'light';
	try {
    localTheme = localStorage.theme;
	} catch (e) {
		// ignore — could be SSR, or e.g. Firefox with restrictive permissions
  }


let theme = writable('light');

// theme.subscribe(t => {
// 	console.log('Theme is: ', t);
// 	// console.log('localStorage.theme:', localStorage.theme)
// }); // logs '0'



export {theme};