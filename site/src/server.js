import sirv from "sirv";
// import Express from "express";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
// import rewrite from "express-urlrewrite";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

// Express()
// 	.use(
// 		compression({ threshold: 0 }),
// 		sirv("static", { dev }),
// 		rewrite("/", "/author/henry-hollingsworth"),
// 		sapper.middleware(),
// 	)
// 	.listen(PORT, (err) => {
// 		if (err) console.log("error", err);
// 	});

export default polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv("static", { dev }),
		sapper.middleware(),
	)
	.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
