<script>
  import { urlFor } from '../utils/helpers'

  export let image
  export let figureClass = undefined
  export let imageClass = undefined
  export let width = 1200
  export let quality = 80
</script>

{#if image && image.asset}
  <figure class={figureClass}>
    <img loading=lazy class:rounded-lg={image.roundedCorners} class:shadow-xl={image.shadow} class={imageClass} src={urlFor(image).quality(quality).width(width)} alt={image.alt || ""}>
    {#if image.caption}
    <figcaption class="flex mt-3 text-sm text-gray-500">{image.caption}</figcaption>
    {/if}
  </figure>
{/if}