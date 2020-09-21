<script>
  import CategorySelector from '../../components/Blog/CategorySelector.svelte'
  import TopicSelector from '../../components/Blog/TopicSelector.svelte'

  export let categories
  export let topics
  export let currentCategory
  export let currentTopic
</script>

<div class="my-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
  <CategorySelector {categories} {currentCategory} />
  <TopicSelector {topics} {currentTopic} />
</div>