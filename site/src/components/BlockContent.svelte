<script context="module">
  import BlockContentPkg from "@movingbrands/svelte-portable-text";

  export const customSerializers = {
    // types: {
    //   image: props => {
    //     return {
    //       component: Image,
    //       childNodes: props.children,
    //       props: {
    //         url: props.node.url
    //       }
    //     };
    //   }
    // },
    // marks: {
    //   link: props => {
    //     return {
    //       component: Link,
    //       childNodes: props.children,
    //       props: props.mark
    //     };
    //   }
    // }
  };
  
  // import Image from "./Image";
  // import Link from "./Link";
</script>
<script>
  export let content;
  
</script>

<div class="prose">
  <BlockContentPkg blocks={content} serializers={customSerializers} />
</div>