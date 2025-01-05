#!/usr/bin/env node

/**
 * @module Build
 *
 */
export default new (await import("commander")).Command()
	.name("Build")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("🌀 Build —")
	.argument("<File...>", "📝 File —")
	.option("-E, --ESBuild <File>", "📜 ESBuild —")
	.option("-T, --TypeScript <File>", "📜 TypeScript —", "tsconfig.json")
	.option("-W --Watch", "👁️ Watch —")
	.action((await import("../Function/Build.js")).default)
	.parse();
