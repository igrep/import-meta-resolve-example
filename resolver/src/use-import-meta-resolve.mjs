import * as path from "node:path";

const targetMjsPath = path.resolve("target/src/target.mjs");
console.log({ targetMjsPath });
const targetMjsUrl = `file:///${targetMjsPath}`;
console.log({ targetMjsUrl });
console.log(import.meta.resolve('mute-stream', targetMjsUrl));
