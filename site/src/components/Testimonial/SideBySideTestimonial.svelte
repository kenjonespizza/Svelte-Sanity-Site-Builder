<script>
  import Carousel from '../Carousel.svelte'
  import BlockContent from '../BlockContent.svelte'

  export let data

  let wrapperClass
  let bgColorClass
  let textClass
  let primaryTextClass
  let arrowClass

  if (data.backgroundColor === 'inverted') {
    wrapperClass = 'inverted'
    bgColorClass = 'bg-white'
    textClass = 'text-gray-900'
    primaryTextClass = 'text-indigo-600'
    arrowClass = 'bg-indigo-600 text-textOnPrimary'
  } else if (data.backgroundColor === 'primary') {
    bgColorClass = 'bg-indigo-600'
    textClass = 'text-textOnPrimary'
    primaryTextClass = 'text-textOnPrimary'
    arrowClass = 'bg-textOnPrimary text-textOnPrimaryOpposite'
  } else {
    bgColorClass = 'bg-white'
    textClass = 'text-gray-900'
    primaryTextClass = 'text-indigo-600'
    arrowClass = 'bg-indigo-600 text-textOnPrimary'
  }

  let carouselOptions = {
    perPage: {768: 2},
    dots: false,
  }

  let breh = [1,2,3,4,5]
  let bluh = [1]
  
</script>

<section class={`${wrapperClass}`}>
  <div class={bgColorClass}>
    <div class="max-w-screen-xl mx-auto slides-wrap">
      <Carousel backgroundColor={data.backgroundColor} {carouselOptions} >

        <!-- <div class={`${arrowClass} control rounded-full p-2`} slot="left-control">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div> -->

        {#each data.testimonialArray as testimonial, i}
        <div class={`slide-content slide-${i} mx-auto`}>

          <div class="py-12 px-6 md:flex md:flex-col md:justify-center md:py-16">
            <blockquote class="mt-8 md:flex md:flex-col">
              <div class={`${textClass} relative text-lg leading-7 font-medium md:flex-grow`}>
                <svg class={`${primaryTextClass} absolute top-0 left-0 transform -translate-x-1 -translate-y-2 h-8 w-8 text-indigo-600`} fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <BlockContent content={testimonial.quote} classes={`relative pl-10 prose`} />

              </div>
              <footer class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-4">
                    <div class={`${textClass} text-base leading-6 font-medium`}>Judith Black</div>
                    <div class={`${primaryTextClass} text-base leading-6 font-medium`}>CEO, Tuple</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

        </div>
        {/each}

        <!-- <div class={`${arrowClass} control rounded-full p-2`} slot="right-control">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div> -->
        
      </Carousel>
    </div>
  </div>
</section>