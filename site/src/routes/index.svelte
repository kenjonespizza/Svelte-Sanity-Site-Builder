<script context="module">  
  export async function preload({ params }) {
    try {
      const res = await this.fetch(`api/pages/homepage`);
      const {homepage: page} = await res.json()
      return { page };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>


<script>
  import PageSections from "../components/PageSections.svelte";

  export let page
</script>

<svelte:head>
  <title>{page.pageInfo.name}</title>
</svelte:head>

{#if page && page.pageSections && page.pageSections.length > 0}
  <PageSections pageSections={page.pageSections}/>
{/if}
