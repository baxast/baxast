var a=async(...[e,t])=>JSON.parse((await(await import("fs/promises")).readFile(`${t??"."}/${e}`,"utf-8")).toString());export{a as default};
