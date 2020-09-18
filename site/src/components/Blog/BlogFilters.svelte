<script>
  import CategorySelector from '../../components/Blog/CategorySelector.svelte'
  import TopicSelector from '../../components/Blog/TopicSelector.svelte'

  export let categories
  export let topics
  export let currentCategory
  export let currentTopic
</script>

<div class="my-8 flex space-x-4">
  <CategorySelector {categories} {currentCategory} />
  <TopicSelector {topics} {currentTopic} />
</div>