var n=(await import("deepmerge-ts")).deepmergeIntoCustom({mergeArrays(...[e,t,r,a]){return a?.key!=="entryPoints"&&(e.value=t.flatMap(f=>f)),r.actions.defaultMerge}});export{n as default};
