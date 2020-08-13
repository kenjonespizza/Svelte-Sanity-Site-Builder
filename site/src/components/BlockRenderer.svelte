<script>
  import getComponent from './BlockResolver'
  export let pageSection
  // console.log('pageSection:', pageSection)
</script>

<svelte:component
  data={pageSection}
  this={getComponent(pageSection._type)}
/>
