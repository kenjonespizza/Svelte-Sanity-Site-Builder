<script>
  import Carousel from '@beyonk/svelte-carousel'

  export let carouselOptions
  export let backgroundColor = ""

  let defaultCarouselOptions = {
    perPage: "1",
    dots: false,
  }

  let options = carouselOptions ? carouselOptions : defaultCarouselOptions

  let arrowClass

  if (backgroundColor === 'primary') {
    arrowClass = 'bg-textOnPrimary text-textOnPrimaryOpposite'
  } else {
    arrowClass = 'bg-indigo-600 text-textOnPrimary'
  }
</script>

<Carousel {...options} >
  <div slot="left-control">
    <slot name="previous">
      <div class={`${arrowClass} control rounded-full p-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </slot>
  </div>

  <slot>

  </slot>

  <div slot="right-control">
    <slot name="next">
      <div class={`${arrowClass} control rounded-full p-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </slot>
  </div>

</Carousel>