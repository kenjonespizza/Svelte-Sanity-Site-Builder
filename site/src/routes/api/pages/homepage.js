import client from "../../../sanityClient";

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get(req, res) {
	try {
		const page = await client.fetch(`*[_type == "siteSettings"][0] {
      homepage->{...}
    }`);
		const { homepage } = page;
		res.end(JSON.stringify({ homepage }));
	} catch (err) {
		console.log("err:", err.message);
		res.writeHead(500, {
			"Content-Type": "application/json",
		});

		res.end(JSON.stringify({
			message: err.message,
		}));
	}
}
