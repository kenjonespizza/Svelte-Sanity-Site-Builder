import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanityClient";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
	return builder.image(source);
}

// Use the link _ref to return just the specific pageInfo
export function getPageInfoFromRef(ref, allPageData) {
	if (allPageData && allPageData.length > 0) {
		const page = allPageData.filter((p) => {
			if (p._id === ref) {
				return true;
			}
			return null;
		});

		if (page) {
			return page[0];
		}
	}
	return false;
}

// Return a subDirectory base on what the type of page is
export const resolveSubdirectory = (linkData) => {
	const type = linkData && linkData._type ? linkData._type : null;

	switch (type) {
	case "post":
		return "blog/";
	case "category":
		return "blog/category/";
	case "page":
		return "";
	case "blog":
		return "";
	default:
		return `${type}/`;
	}
};

export function toPlainText(blocks = []) {
	return blocks
	// loop through each block
		.map((block) => {
			// if it's not a text block with children,
			// return nothing
			if (block._type !== "block" || !block.children) {
				return "";
			}
			// loop through the children spans, and join the
			// text strings
			return block.children.map((child) => child.text).join("");
		})
	// join the paragraphs leaving split by two linebreaks
		.join("\n\n");
}

export function truncate(str, length, ending) {
	if (length == null) {
		length = 255;
	}
	if (ending == null) {
		ending = "...";
	}
	if (str.length > length) {
		return str.substring(0, length - ending.length) + ending;
	}
	return str;
}

export function slugify(string) {
	const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
	const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
	const p = new RegExp(a.split("").join("|"), "g");

	return string.toString().toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\-]+/g, "") // Remove all non-word characters
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
}

export function unSlugify(string) {
	if (typeof string !== "string") {
		return "";
	}
	return string.replace(/([_-])/g, " ");
}

export function mergeArrays(filterFunction = (x) => { x; }, ...arrays) {
	// const arrays = arraysParam.shift()
	let preFilterJointArray = [];

	arrays.forEach((array) => {
		preFilterJointArray = [...preFilterJointArray, ...array];
	});

	const jointArray = [];
	preFilterJointArray.forEach((each) => {
		jointArray.push(filterFunction(each));
	});

	const uniqueArray = jointArray.reduce((newArray, item) => {
		if (newArray.includes(item)) {
			return newArray;
		}
		return [...newArray, item];
	}, []);
	return uniqueArray;
}

export function massageTopics(unmassagedTopics) {
	let topics = [];
	unmassagedTopics.forEach((eachTopics) => {
		topics = mergeArrays(slugify, topics, eachTopics.topics);
	});
	topics.sort();

	return topics;
}

export const capitalize = (s) => {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
};
