import Link from './Link.svelte'

export const serializers = {
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
    marks: {
    link: props => {
      // console.log('props:', props)
      console.log('props.mark.link.link[0].link._ref:', props.mark.link.link[0].link._ref)
      return {
        component: Link,
        childNodes: props.children,
        props: {
          text: props.children,
          portableText: props,
          // link: props.mark.link
          link: props.mark.link
        }
      };
    }
  }
};