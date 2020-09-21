<script>
  import Carousel from '../Carousel.svelte'
  import BlockContent from '../BlockContent.svelte'
  import TagRenderer from '../TagRenderer.svelte'
  import { urlFor } from '../../utils/helpers'

  export let data

  let wrapperClass
  let bgColorClass = 'bg-white'
  let textClass = 'text-gray-900'
  let primaryTextClass = 'text-indigo-600'

  if (data.backgroundColor === 'inverted') {
    wrapperClass = 'inverted'
  } else if (data.backgroundColor === 'primary') {
    bgColorClass = 'bg-indigo-600'
    textClass = 'text-textOnPrimary'
    primaryTextClass = 'text-textOnPrimary'
  }
  
</script>

<section class={`${wrapperClass || ''} ${bgColorClass} overflow-hidden`}>
  <div class="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
    <svg class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
      <defs>
        <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
    </svg>

    <svg class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
    </svg>

    
      
        <svelte:component this={data.testimonials.length > 1 ? Carousel : TagRenderer} tag="div" backgroundColor={data.backgroundColor}>

          {#each data.testimonials as testimonial, i}

          <div class="relative lg:flex lg:items-center">
            <div class="hidden lg:block lg:flex-shrink-0">
              <img class="bg-white h-64 w-64 rounded-full xl:h-80 xl:w-80 object-cover object-center" src={testimonial.authorImage ? urlFor(testimonial.authorImage).quality(80).width(1400) : '/images/userImageNotFound.png'} alt={testimonial.authorName}>
            </div>
      
            <div class="relative lg:ml-10">
  
            <blockquote class="flex flex-col justify-center h-full px-6 md:px-0">

              <BlockContent content={testimonial.quote} classes={`${textClass} text-2xl leading-9 font-medium text-gray-900`} />

              <footer class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0 lg:hidden">
                    <img class="h-12 w-12 rounded-full object-cover object-center" src={testimonial.authorImage ? urlFor(testimonial.authorImage).quality(80).width(1400) : '/images/userImageNotFound.png'} alt={testimonial.authorName}>
                  </div>
                  <div class="ml-4 lg:ml-0">
                    <div class={`${textClass} text-base leading-6 font-medium`}>{testimonial.authorName}</div>
                    {#if testimonial.authorRol || testimonial.authorCompany}
                      <div class={`${primaryTextClass} text-base leading-6 font-medium opacity-75`}>{testimonial.authorRol}{testimonial.authorRol && testimonial.authorCompany ? ', ' : ' '}{testimonial.authorCompany}</div>
                    {/if}
                  </div>
                </div>
              </footer>
            </blockquote>

          </div>
        </div>

          {/each}
          
      </svelte:component>
  </div>
</section>
