import { writable } from 'svelte-local-storage-store'

// First param `preferences` is the local storage key.
// Second param is the initial value.
// export const theme = writable('theme','dark')
// export const themeTest = writable('themeTest','light')
export const sitePreferences = writable('sitePreferences', {
  theme: 'dark',
  contrast: 'normal'
})