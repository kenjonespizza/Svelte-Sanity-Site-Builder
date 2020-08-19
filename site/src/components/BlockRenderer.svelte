<script>
  import getComponent from './BlockResolver'
  
  export let pageSection
</script>

{#if pageSection && !pageSection.disabled}
  <svelte:component
    data={pageSection}
    this={getComponent(pageSection._type)}
  />
{/if}
