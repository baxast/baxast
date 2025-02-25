import type Interface from "../Interface/File.js";

/**
 * @module File
 *
 */
export default (async (...[Path]) => {
	if (Path.split(".").pop() === "ts") {
		const { options: Option } = (
			await import("typescript")
		).default.convertCompilerOptionsFromJson(
			(
				await (
					await import("../Function/JSON.js")
				).default(
					"../../tsconfig.json",
					(await import("node:path")).dirname(
						(await import("url")).fileURLToPath(import.meta.url),
					),
				)
			)?.compilerOptions,
			".",
		);

		(await import("typescript")).default
			.createProgram(
				[Path],
				Option,
				(await import("typescript")).default.createCompilerHost(Option),
			)
			.emit();

		await (
			await import("node:fs/promises")
		).writeFile(
			Path.replace(".ts", ".js"),
			(await import("typescript")).default.transpile(
				(
					await (await import("node:fs/promises")).readFile(Path, "utf-8")
				).toString(),
				Option,
			),
		);
	}

	return (
		await import(
			(await import("url"))
				.pathToFileURL(Path)
				.toString()
				.replace(".ts", ".js")
		)
	).default;
}) satisfies Interface as Interface;
