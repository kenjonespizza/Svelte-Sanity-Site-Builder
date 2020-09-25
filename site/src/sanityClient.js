import sanityClient from "@sanity/client";
import { api } from "../../sanity/sanity.json";

const { projectId, dataset } = api;

const client = sanityClient({
	projectId,
	dataset,
	// useCdn: true

	useCdn: false,
	// withCredentials: true, // Add this line
});

export default client;
