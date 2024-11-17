import { Context } from "hono";
import { HTTPResponseError } from "hono/types";

async function sendError(err: Error | HTTPResponseError, c: Context) {
  console.error(err);
  return c.json({ error: "App Error" }, 500);
}

export default sendError;
