import type Interface from "../Interface/JSON.js";

/**
 * @module JSON
 *
 */
export default (async (...[File, From]) =>
	JSON.parse(
		(
			await (
				await import("node:fs/promises")
			).readFile(`${From ?? "."}/${File}`, "utf-8")
		).toString(),
	)) satisfies Interface as Interface;
