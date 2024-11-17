import { Context } from "hono";

const msg = `Hello Hono\n\n`;

export default async function getText(c: Context) {
  return c.text(msg);
}
