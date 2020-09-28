import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: process.env.SAPPER_APP_SANITY_STUDIO_API_PROJECT_ID,
	dataset: process.env.SAPPER_APP_SANITY_STUDIO_API_DATASET,
	// useCdn: true

	useCdn: process.env.SAPPER_APP_SANITY_USE_CDN,
	// withCredentials: true, // Add this line
});

export default client;
