<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  
  import Image from "./Image";
  import Link from "./Link";

  export let content;
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
</script>

<div class="prose">
  <BlockContent blocks={content} serializers={customSerializers} />
</div>