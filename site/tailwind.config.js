const tailwindUi = require("@tailwindcss/ui");
const tailwindTypography = require("@tailwindcss/typography");

module.exports = {
	purge: {
		content: ["./src/**/*.svelte", "./src/**/*.html"],
		options: {
			defaultExtractor: (content) => [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			keyframes: true,
			whitelist: ["h1", "h2", "h3", "p", "blockquote", "strong", "pre"],
		},
	},
	theme: {
		container: {
			center: true,
			padding: {
				default: "1rem",
				sm: "1rem",
				md: "1.5rem",
				lg: "2rem",
			},
		},
		extend: {
			animation: {
				ping: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
			},
			borderWidth: {
				3: "3px",
			},
			colors: {
				white: "var(--white)",
				black: "var(--black)",
				textOnPrimary: "var(--textOnPrimary)",
				textOnPrimaryOpposite: "var(--textOnPrimaryOpposite)",
				indigo: {
					900: "var(--primary-900)",
					800: "var(--primary-800)",
					700: "var(--primary-700)",
					600: "var(--primary-600)",
					500: "var(--primary-500)",
					400: "var(--primary-400)",
					300: "var(--primary-300)",
					200: "var(--primary-200)",
					100: "var(--primary-100)",
					50: "var(--primary-50)",
				},
				gray: {
					50: "var(--gray-50)",
					100: "var(--gray-100)",
					200: "var(--gray-200)",
					300: "var(--gray-300)",
					400: "var(--gray-400)",
					500: "var(--gray-500)",
					600: "var(--gray-600)",
					700: "var(--gray-700)",
					800: "var(--gray-800)",
					900: "var(--gray-900)",
					950: "var(--gray-950)",
				},
				code: {
					background: "#282c34",
					text: "#abb2bf",
				},
			},
			boxShadow: {
				xs: "var(--boxShadow-xs)",
				sm: "var(--boxShadow-sm)",
				default: "var(--boxShadow-default)",
				md: "var(--boxShadow-md)",
				lg: "var(--boxShadow-lg)",
				xl: "var(--boxShadow-xl)",
				"2xl": "var(--boxShadow-2xl)",
				inner: "var(--boxShadow-inner)",
				outline: "var(--boxShadow-outline)",
				none: "none",
			},
			screens: {
				xs: "480px",
			},
		},
		// typography: (theme) => ({
		// 	default: {
		// 		css: {
		// 			color: theme("colors.gray.500"),
		// 			"[class~=\"lead\"]": {
		// 				color: theme("colors.gray.700"),
		// 			},
		// 			a: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			strong: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			"ol > li::before": {
		// 				color: theme("colors.gray.600"),
		// 			},
		// 			"ul > li::before": {
		// 				backgroundColor: theme("colors.gray.400"),
		// 			},
		// 			hr: {
		// 				borderColor: theme("colors.gray.300"),
		// 			},
		// 			blockquote: {
		// 				color: theme("colors.gray.900"),
		// 				borderLeftColor: theme("colors.gray.300"),
		// 			},
		// 			h1: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			h2: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			h3: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			h4: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			"figure figcaption": {
		// 				color: theme("colors.gray.600"),
		// 			},
		// 			code: {
		// 				color: theme("colors.gray.900"),
		// 			},
		// 			pre: {
		// 				// color: "#282c34",
		// 				// backgroundColor: "#abb2bf",
		// 				// color: theme("colors.code.text"),
		// 				// backgroundColor: theme("colors.code.background"),
		// 			},
		// 			thead: {
		// 				color: theme("colors.gray.900"),
		// 				borderBottomColor: theme("colors.gray.400"),
		// 			},
		// 			"tbody tr": {
		// 				borderBottomColor: theme("colors.gray.300"),
		// 			},
		// 		// pre: {
		// 		// 	backgroundColor: theme("colors.code.background"),
		// 		// 	color: theme("colors.code.text"),
		// 		// },
		// 		},
		// 	},
		// }),
		typography: (theme) => ({
			default: {
				css: {
					".button": {
						color: "red",
					},
				},
			},
		}),
	},
	variants: {},
	plugins: [
		tailwindUi,
		tailwindTypography,
	],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
};
