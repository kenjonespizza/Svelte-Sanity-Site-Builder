<script>
  import { unSlugify } from '../utils/helpers'
  export let data
</script>

<div class="container my-16">
  <div class="bg-white overflow-hidden shadow-xl rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <p class="text-sm leading-5 text-gray-500 text-center">
        The component <span class="capitalize font-bold">{unSlugify(data._type)}</span> has not been created yet.  Contact <a class="underline" href="mailto:gang@allday.io">gang@allday.io</a> if you recieve this error.
      </p>
    </div>
  </div>
</div>