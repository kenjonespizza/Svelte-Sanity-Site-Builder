<script>
  import BlockContentPkg from "@movingbrands/svelte-portable-text";
  import {serializers} from './serializers'
  import Link from "./Link.svelte";

  export let content;
  export let classes;
</script>

<div class={classes}>
  <BlockContentPkg blocks={content} {serializers} />
</div>