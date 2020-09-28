<script context="module">
  import { disableScrolling } from '../../stores'
  import BlockContent from '../BlockContent.svelte'
  import Button from '../Button.svelte'
  import TagRenderer from '../TagRenderer.svelte'
  import {urlFor} from '../../utils/helpers'
  import YouTube from 'svelte-youtube';
  import getYouTubeID from 'get-youtube-id'
</script>  
<script>
  export let data;

  let isVideoOpen = false;
  const videoId = getYouTubeID(data.video.url);

  function toggleVideo() {
  	isVideoOpen = !isVideoOpen;

  	disableScrolling.update(() => isVideoOpen);
  }

  function closeVideo({ key }) {
  	if (isVideoOpen && key === "Escape") {
  		toggleVideo();
  	}
  }

  const options = {
  	// see https://developers.google.com/youtube/player_parameters
  	playerVars: {
  		autoplay: 1,
  	},
  };
</script>

<svelte:window on:keydown={closeVideo}/>

<div class="relative bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-0">
    <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
      <defs>
        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
      <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
    </svg>
  </div>
  <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">

    <main class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">

          {#if data.headingBlock && data.headingBlock.subHeading}
            <div class="text-sm mb-2 font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              {data.headingBlock.subHeading}
            </div>
          {/if}

          {#if data.headingBlock && data.headingBlock.heading}
            <TagRenderer tag={data.headingBlock.headingType || "h2"} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              {data.headingBlock.heading}
            </TagRenderer>
          {/if}

          <BlockContent content={data.content} classes="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 prose" />

          <div class="mt-5 sm:mt-8 flex-row space-y-3 sm:flex sm:space-x-3 sm:space-y-0 sm:justify-center lg:justify-start">
            {#if data.buttons && data.buttons.length > 0}
              {#each data.buttons as button}
                <Button {button} />
              {/each}
            {/if}
          </div>

        </div>
        <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <svg class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
            <defs>
              <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
            <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
          </svg>
          <div on:click={toggleVideo} class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <button type="button" class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
              {#if data.image && data.image.asset}
                <img loading=lazy class="w-full" src={urlFor(data.image).quality(80).width(450)} alt={data.image.alt}>
              {/if}
              <div class="absolute inset-0 w-full h-full flex items-center justify-center">
                <span class="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-white opacity-75"></span>
                <svg class="relative h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                  <circle class="text-white" opacity="0.9" cx="42" cy="42" r="42" fill="currentColor" />
                  <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>


<div class={`${isVideoOpen ? "pointer-events-auto" : "pointer-events-none"} fixed z-20 inset-0 overflow-y-auto`}>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div on:click={toggleVideo} class={`${isVideoOpen ? "opacity-100" : "opacity-0"} ease-in-out duration-300 fixed inset-0 transition-opacity`}>
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

    <div class={`${isVideoOpen ? "opacity-100 translate-y-0 sm:scale-100" : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"} ease-in-out duration-300 inline-block align-bottom rounded-lg text-left overflow-hidden relative shadow-xl transform transition-all sm:align-middle sm:max-w-screen-xl sm:w-10/12`} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      
      {#if isVideoOpen}
        <YouTube {videoId} class="w-full video-responsive" {options} />
      {/if}

      <!-- <button on:click={toggleVideo} class="absolute -top-3 -right-3 bg-gray-200 p-3 rounded-full text-gray-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:bg-indigo-600 focus:text-white transition ease-in-out duration-150">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button> -->
    </div>
  </div>
</div>

<style>


</style>