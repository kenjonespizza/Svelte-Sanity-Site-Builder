import Link from "./Link.svelte";
import CodeBlock from "./CodeBlock.svelte";
import SanityImage from "./SanityImage.svelte";
import Buttons from "./Buttons.svelte";

export const serializers = {
	types: {
		code: (props) => ({
			component: CodeBlock,
			childNodes: props.children,
			props: {
				code: props.node.code,
				language: props.node.language,
			},
		}),
		basicImageWithCaption: (props) => ({
			component: SanityImage,
			childNodes: props.children,
			props: {
				image: props.node,
			},
		}),
		buttons: (props) => ({
			component: Buttons,
			childNodes: props.children,
			props: {
				buttons: props.node.buttons,
			},
		}),
	},
	marks: {
		link: (props) => ({
			component: Link,
			childNodes: props.children,
			props: {
				text: props.children,
				link: props.mark.link,
			},
		}),
	},
};
