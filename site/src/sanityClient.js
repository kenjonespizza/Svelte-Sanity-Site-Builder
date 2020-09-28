import sanityClient from "@sanity/client";
import * as siteConfig from "../../siteConfig";

// console.log("siteConfig:", siteConfig);

console.log("process.env.SANITY_PROJasdfECT_ID:", process.env.SANITY_STUDIO_API_PROJECT_ID);

const { sanityProjectId, sanityDataset } = siteConfig.default;

const client = sanityClient({
	projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_API_DATASET,
	// useCdn: true

	useCdn: false,
	// withCredentials: true, // Add this line
});

export default client;
