// @ts-ignore
import { createServer } from "../dist/server/app.mjs";
import serverless from "serverless-http";

const app = createServer();

export default serverless(app);
