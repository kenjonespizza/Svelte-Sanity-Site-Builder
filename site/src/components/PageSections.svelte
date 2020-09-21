<script>
  import BlockRenderer from "../components/BlockRenderer.svelte";
  
  export let pageSections
</script>

{#each pageSections as pageSection}
  <BlockRenderer {pageSection}/>
{/each}