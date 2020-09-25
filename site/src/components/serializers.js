import Link from './Link.svelte'
import CodeBlock from './CodeBlock.svelte'

export const serializers = {
  types: {
    // image: props => {
    //   return {
    //     component: Image,
    //     childNodes: props.children,
    //     props: {
    //       url: props.node.url
    //     }
    //   };
    // }
    code: props => {
      console.log('props:', props)
      return {
        component: CodeBlock,
        childNodes: props.children,
        props: {
          code: props.node.code,
          language: props.node.language,
        }
      };
    }
  },
    marks: {
    link: props => {
      return {
        component: Link,
        childNodes: props.children,
        props: {
          text: props.children,
          link: props.mark.link
        }
      };
    },
  }
};