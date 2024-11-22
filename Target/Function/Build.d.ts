import type Interface from "../Interface/Build.js";

/**
 * @module Build
 *
 */
declare const _default: Interface;
export default _default;
export declare const Exec: import("../Interface/Exec.js").default;
export declare const Merge: <T extends object>(Target: T, Source: T) => T;
export declare const Pipe: string[];
export declare const extname: (path: string) => string,
	basename: (path: string, suffix?: string) => string,
	relative: (from: string, to: string) => string,
	dirname: (path: string) => string,
	normalize: (path: string) => string,
	sep: "\\" | "/";
export declare const Current: string;
