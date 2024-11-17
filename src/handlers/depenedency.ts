import { Context } from "hono";
import packageJson from "$/package.json";

export default async function getDependencies(c: Context) {
  return c.json({ deps: packageJson.dependencies });
}
