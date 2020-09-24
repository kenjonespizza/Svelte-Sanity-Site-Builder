<script>
  import Carousel from '../Carousel.svelte'
  import BlockContent from '../BlockContent.svelte'
  import TagRenderer from '../TagRenderer.svelte'
  import { urlFor } from '../../utils/helpers'

  export let data

  let wrapperClass
  let bgColorClass
  let textClass
  let primaryTextClass

  if (data.backgroundColor === 'inverted') {
    wrapperClass = 'inverted'
    bgColorClass = 'bg-white'
    textClass = 'text-gray-900'
    primaryTextClass = 'text-indigo-600'
  } else if (data.backgroundColor === 'primary') {
    bgColorClass = 'bg-indigo-600'
    textClass = 'text-textOnPrimary border-textOnPrimary'
    primaryTextClass = 'text-textOnPrimary'
  } else {
    bgColorClass = 'bg-white'
    textClass = 'text-gray-900'
    primaryTextClass = 'text-indigo-600'
  }

  let carouselOptions = {
    perPage: {768: 2},
    dots: false,
  }
  
</script>

<section class={`${wrapperClass || ''}`}>
  <div class={bgColorClass}>
    <div class="max-w-screen-xl mx-auto slides-wrap">
      <svelte:component this={data.testimonials.length > 2 ? Carousel : TagRenderer} tag="div" classes="md:grid md:grid-cols-2 md:px-6 lg:px-8" backgroundColor={data.backgroundColor} {carouselOptions}>

        {#each data.testimonials as testimonial, i}
          <blockquote class="flex flex-col justify-center h-full py-12 px-6 md:py-16">
              <div class={`${textClass} relative text-lg leading-7 font-medium md:flex-grow`}>
                <svg class={`${primaryTextClass} absolute top-0 left-0 transform -translate-x-1 -translate-y-2 h-8 w-8 text-indigo-600`} fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <BlockContent content={testimonial.quote} classes={`${textClass} relative pl-10 prose`} />

              </div>
              <footer class="mt-8">
                <div class="flex">

                    <img loading=lazy class="rounded-full border-2 border-textOnPrimary h-10 w-10 object-cover object-center" src={testimonial.authorImage ? urlFor(testimonial.authorImage).quality(80).width(80) : '/images/userImageNotFound.png'} alt={testimonial.authorName}>

                  <div class="ml-4 flex flex-col justify-center">
                    <div class={`${textClass} text-base leading-6 font-medium`}>{testimonial.authorName}</div>
                    {#if testimonial.authorRol || testimonial.authorCompany}
                    <div class={`${primaryTextClass} text-base leading-6 font-medium`}>{testimonial.authorRol}{testimonial.authorRol && testimonial.authorCompany ? ', ' : ' '}{testimonial.authorCompany}</div>
                    {/if}
                  </div>
                </div>
              </footer>
          </blockquote>
        {/each}
        
        </svelte:component>
    </div>
  </div>
</section>