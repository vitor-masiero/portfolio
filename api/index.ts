// @ts-ignore
import { createServer } from "../server-dist/app.mjs";
import serverless from "serverless-http";

const app = createServer();

export default serverless(app);
