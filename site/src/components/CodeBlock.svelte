<script>
  import { Highlight } from "svelte-highlight";
  import { javascript } from "svelte-highlight/languages";
  console.log('javascript:', javascript)
  import { anOldHope } from "svelte-highlight/styles";

  export let code
  export let language
</script>

<svelte:head>
  {@html anOldHope}
</svelte:head>

<Highlight language={javascript} {code} />