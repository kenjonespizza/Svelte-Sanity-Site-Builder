import sanityClient from "@sanity/client";
import * as siteConfig from "../../siteConfig";

console.log("siteConfig:", siteConfig);

const { sanityProjectId, sanityDataset } = siteConfig.default;

const client = sanityClient({
	projectId: sanityProjectId,
	dataset: sanityDataset,
	// useCdn: true

	useCdn: false,
	// withCredentials: true, // Add this line
});

export default client;
