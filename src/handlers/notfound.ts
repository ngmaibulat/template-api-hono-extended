import { Context } from "hono";

export default async function notFound(c: Context) {
  return c.json({ error: "Yuk" }, 404);
}
