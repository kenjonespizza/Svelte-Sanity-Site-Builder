<script>
  import Button from './Button.svelte'

  export let buttons
</script>

<div class="mt-10 flex-row space-y-3 sm:flex sm:space-x-3 sm:space-y-0 sm:justify-center lg:justify-start">
  {#if buttons && buttons.length > 0}
    {#each buttons as button}
      <Button {button} />
    {/each}
  {/if}
</div>