var r={color:!0,format:"esm",metafile:!0,minify:!0,outdir:"Target",platform:"node",target:"esnext",write:!0,logLevel:"debug",plugins:[{name:"Target",setup({onStart:t,initialOptions:{outdir:e}}){t(async()=>{try{e&&await(await import("node:fs/promises")).rm(e,{recursive:!0})}catch(o){console.log(o)}})}},(await import("esbuild-plugin-copy")).copy({resolveFrom:"out",assets:[{from:"./Source/Notation/TypeScript.json",to:"./Notation/"},{from:"./Source/Stylesheet/Theme.css",to:"./Stylesheet/"}]})],define:{"process.env.VERSION_PACKAGE":`'${(await(await import("../Function/JSON.js")).default("package.json"))?.version}'`}};export{r as default};
