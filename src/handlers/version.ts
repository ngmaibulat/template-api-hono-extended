import { Context } from "hono";
import packageJson from "$/package.json";

export default async function getVersion(c: Context) {
  return c.json({ version: packageJson.version });
}
