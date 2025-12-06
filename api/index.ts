// @ts-ignore
import { createServer } from "../dist/server/app.mjs";
import serverless from "serverless-http";

const app = createServer();

import fs from "fs";
import path from "path";

console.log("Files in /var/task/dist/server:");
console.log(fs.readdirSync(path.resolve("./dist/server")));

export default serverless(app);
