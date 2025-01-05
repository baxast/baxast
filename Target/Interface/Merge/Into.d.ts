import type { DeepMergeBuiltInMetaData, DeepMergeFunctionsDefaultURIs, DeepMergeHKT } from "deepmerge-ts";
export default interface Interface {
    <Target extends object, Ts extends ReadonlyArray<object>>(target: Target, ...objects: Ts): asserts target is Target & DeepMergeHKT<[
        Target,
        ...Ts
    ], {
        DeepMergeArraysURI: DeepMergeFunctionsDefaultURIs["DeepMergeArraysURI"];
        DeepMergeFilterValuesURI: DeepMergeFunctionsDefaultURIs["DeepMergeFilterValuesURI"];
        DeepMergeMapsURI: DeepMergeFunctionsDefaultURIs["DeepMergeMapsURI"];
        DeepMergeOthersURI: DeepMergeFunctionsDefaultURIs["DeepMergeOthersURI"];
        DeepMergeRecordsURI: DeepMergeFunctionsDefaultURIs["DeepMergeRecordsURI"];
        DeepMergeSetsURI: DeepMergeFunctionsDefaultURIs["DeepMergeSetsURI"];
    }, DeepMergeBuiltInMetaData>;
}
