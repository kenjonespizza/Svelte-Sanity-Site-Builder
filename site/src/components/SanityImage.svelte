<script>
  import { urlFor } from '../utils/helpers'

  export let image
  export let figureClass = undefined
  export let imageClass = undefined
</script>

{#if image && image.asset}
  <figure class={figureClass}>
    <img loading=lazy class:rounded-lg={image.roundedCorners} class:shadow-xl={image.shadow} class={imageClass} src={urlFor(image).quality(80).width(1200)} alt={image.alt || ""}>
    {#if image.caption}
      <figcaption>{image.caption}</figcaption>
    {/if}
  </figure>
{/if}