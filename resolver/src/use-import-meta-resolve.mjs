import * as path from "node:path";

// TODO: The resolve path looks wrong.
const pathOfTargetMjs = `file:///${new URL(path.resolve("../../target/src/target.mjs"), "file://").href}`;
console.log(pathOfTargetMjs);
console.log(import.meta.resolve('mute-stream', pathOfTargetMjs));
