<script>
  import { Highlight } from "svelte-highlight";
  import { javascript } from "svelte-highlight/languages";
  // import { atomOneDark } from "svelte-highlight/styles";

  export let code
  // export let language
</script>

<svelte:head>
  <!-- {@html atomOneDark} -->
</svelte:head>

<Highlight language={javascript} {code} />