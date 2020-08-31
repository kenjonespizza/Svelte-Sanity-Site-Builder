<script>
  import Carousel from '../Carousel.svelte'
  import BlockContent from '../BlockContent.svelte'
  import { urlFor } from '../../utils/helpers'

  export let data

  let wrapperClass
  let bgColorClass
  let textClass
  let primaryTextClass

  if (data.backgroundColor === 'inverted') {
    wrapperClass = 'inverted'
    bgColorClass = 'bg-gray-50'
    textClass = 'text-gray-900'
    primaryTextClass = 'text-indigo-600'
  } else if (data.backgroundColor === 'primary') {
    bgColorClass = 'bg-indigo-600'
    textClass = 'text-textOnPrimary'
    primaryTextClass = 'text-textOnPrimary'
  } else {
    bgColorClass = 'bg-gray-50'
    textClass = 'text-gray-900'
    primaryTextClass = 'text-indigo-600'
  }
  
</script>

<section class={`${wrapperClass} py-12 ${bgColorClass} overflow-hidden md:py-20 lg:py-24`}>
  <div class={`relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`}>
    <div class="relative">
      
      <Carousel backgroundColor={data.backgroundColor}>

        {#each data.testimonialArray as testimonial, i}
 
          <blockquote class="flex flex-col justify-center h-full px-6 md:px-0">

            <BlockContent content={testimonial.quote} classes={`max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900`} />

            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  {#if testimonial.authorImage && testimonial.authorImage.image}
                    <img class="mx-auto h-10 w-10 rounded-full object-cover object-center" src={urlFor(testimonial.authorImage.image).quality(80).width(1400)} alt={testimonial.authorName}>
                  {/if}
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div class={`${textClass} text-base leading-6 font-medium`}>{testimonial.authorName}</div>
    
                  <svg class={`${primaryTextClass} hidden md:block mx-1 h-5 w-5`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
    
                  <div class={`${textClass} text-base leading-6 font-medium opacity-75`}>{testimonial.authorRol}, {testimonial.authorCompany}</div>
                </div>
              </div>
            </footer>
          </blockquote>

        {/each}
        
      </Carousel>
    </div>
  </div>
</section>
