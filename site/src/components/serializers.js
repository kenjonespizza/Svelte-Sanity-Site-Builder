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
      return {
        component: Link,
        childNodes: props.children,
        props: {
          text: props.children,
          link: props.mark.link
        }
      };
    }
  }
};