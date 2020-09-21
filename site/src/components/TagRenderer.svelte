<script>
  export let tag
  export let classes
</script>

{#if tag === 'h1'}
  <h1 class={classes}>
    <slot />
  </h1>
{:else if tag === 'h2'}
  <h2 class={classes}>
    <slot />
  </h2>
{:else if tag === 'h3'}
  <h3 class={classes}>
    <slot />
  </h3>
{:else if tag === 'h4'}
  <h4 class={classes}>
    <slot />
  </h4>
{:else if tag === 'h5'}
  <h5 class={classes}>
    <slot />
  </h5>
{:else if tag === 'h6'}
  <h6 class={classes}>
    <slot />
  </h6>
{:else if tag === 'div'}
  <div class={classes}>
    <slot />
  </div>
{:else}
  <span class={classes}>
    <slot />
  </span>
{/if}