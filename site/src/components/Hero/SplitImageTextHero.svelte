<script context="module">
  import BlockContent from '../BlockContent.svelte'
  import Button from '../Button.svelte'
</script>  
<script>
  export let data
</script>

<div class="relative bg-gray-50">
  <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <div class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          <BlockContent content={data.heading} />
        </div>
        <div class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl prose">
          <BlockContent content={data.content} />
        </div>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <Button url="/contact" type="primary" additionalClasses="">
              Get started
            </Button>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Woman on her phone">
    </div>
  </main>
</div>

<style>
  .heroBlockText .prose p {
    font-size: 1.25rem;
    color: var(--gray-500);
  }
</style>