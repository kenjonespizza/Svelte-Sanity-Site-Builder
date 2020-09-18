<script>
  import BlockContentPkg from "@movingbrands/svelte-portable-text";
  import {serializers} from './serializers'
  import Link from "./Link.svelte";

  export let content = undefined;
  export let classes;
</script>

{#if content}
  <div class={classes}>
    <BlockContentPkg blocks={content} {serializers} />
  </div>
{/if}