<script>
  import BlockContent from "../BlockContent.svelte";
  import Button from "../Button.svelte";
  import Link from "../Link.svelte";
  import TagRenderer from "../TagRenderer.svelte";
  import { urlFor } from "../../utils/helpers";

  export let data;
  
  let formFields = [];
  let hasFromFields;
  
  if (data.formFields && typeof data.formFields === "object" && data.formFields.length > 0) {
  	hasFromFields = true;
  	formFields = data.formFields;
  }
  
</script>

<div class="relative bg-white overflow-hidden">
  <div class="hidden sm:block sm:absolute sm:inset-0">
    <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-200 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
      <defs>
        <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
    </svg>
  </div>
  <div class="relative pt-6 pb-12 sm:pb-32">

    <main class="mt-8 sm:mt-16 md:mt-20 lg:mt-24">
      <div class="mx-auto max-w-screen-xl">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="px-4 text-center sm:px-6 md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>

              {#if data.headingBlock && data.headingBlock.subHeading}
                <div class="text-sm mb-2 font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  {data.headingBlock.subHeading}
                </div>
              {/if}
              
              {#if data.headingBlock && data.headingBlock.heading}
                <TagRenderer tag={data.headingType || "h2"} classes="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  {data.headingBlock.heading}
                </TagRenderer>
              {/if}

              <BlockContent content={data.content} classes="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl prose" />

            </div>
          </div>
          {#if hasFromFields}
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
            <div class="bg-white border mx-6 rounded-lg shadow-xl overflow-hidden sm:max-w-md sm:mx-auto">
              <div class="px-4 py-8 sm:px-10">
                {#if data.showSocialMedia !== false}
                <div>
                  <p class="text-sm uppercase  leading-5 font-medium text-gray-700">
                    Find Us On:
                  </p>

                  <div class="mt-2 grid grid-cols-3 gap-3">
                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Facebook">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    </div>

                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Twitter">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </button>
                      </span>
                    </div>

                    <div>
                      <span class="w-full inline-flex rounded-md shadow-sm">
                        <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with GitHub">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="my-6 relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm leading-5">
                    <span class="px-2 bg-white text-gray-500">
                      Or
                    </span>
                  </div>
                </div>
                {/if}
                
                <p class="text-sm uppercase  leading-5 font-medium text-gray-700">
                    Send us a message:
                  </p>

                <div class="mt-2">
                  <form action="/" method="POST" class="space-y-6">

                    <div>
                      <label for="name" class="sr-only">
                        Full name
                      </label>
                      <div class="rounded-md shadow-sm">
                        <input type="text" id="name" placeholder="Full name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>
                    </div>

                    {#if formFields.includes("email")}
                    <div>
                      <label for="email" class="sr-only">
                        Email Address
                      </label>
                      <div class="rounded-md shadow-sm">
                        <input id="email" type="email" placeholder="Email Address" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>
                    </div>
                    {/if}

                    {#if formFields.includes("phone")}
                    <div>
                      <label for="mobile-or-email" class="sr-only">
                        Mobile number
                      </label>
                      <div class="rounded-md shadow-sm">
                        <input type="tel" id="mobile-or-email" placeholder="Mobile number" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>
                    </div>
                    {/if}

                    <div>
                      <label for="mobile-or-email" class="sr-only">
                        Message
                      </label>
                      <div class="rounded-md shadow-sm">
                        <textarea rows=3 id="mobile-or-email" placeholder="Enter Message Here" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                      </div>
                    </div>

                    <div>
                      <span class="block w-full rounded-md shadow-sm">
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-textOnPrimary bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                          {data.submitButtonText || "Submit"}
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <!-- https://www.pandadoc.com/website-standard-terms-and-conditions-template/ -->
              <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-100 sm:px-10">
                <p class="text-xs leading-5 text-gray-500">By submitting this form, you agree to our 
                  {#if data && data.termsPage && data.termsPage.link && data.termsPage.link._ref}
                    <Link ref={data.termsPage.link._ref} classes="font-medium text-gray-900 underline hover:text-primary">Terms & Services</Link>.
                  {:else}
                    <span class="font-medium text-gray-900">Terms & Services</span>.
                  {/if}
                </p>
              </div>
            </div>
          </div>
          {/if}
        </div>
      </div>
    </main>
  </div>
</div>
