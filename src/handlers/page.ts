import { Context } from "hono";
import page from "@/jsx/page";

export default async function getPage(c: Context) {
  return c.html(page);
}
