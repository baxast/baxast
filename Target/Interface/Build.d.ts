import type { Pattern } from "fast-glob";
/**
 * @module Build
 *
 */
export default interface Interface {
    /**
     * Represents a function that processes file patterns.
     *
     * @param File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
     *
     * @param Option - An optional object that can contain two properties.
     *
     * @param Option.ESBuild - A string representing the ESBuild option.
     *
     * @param Option.TypeScript - A string representing the TypeScript option.
     *
     */
    (File: Pattern[], Option?: {
        ESBuild?: string;
        TypeScript?: string;
        Watch?: boolean;
        Exclude?: Pattern[];
    }): Promise<void>;
}
