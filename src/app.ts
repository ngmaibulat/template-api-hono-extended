import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import mwFavicon from "@/middleware/favicon";
import favicon from "@/const/favicon";

import getVersion from "@/handlers/version";
import getDependencies from "@/handlers/depenedency";
import getPage from "@/handlers/page";
import getText from "@/handlers/text";

import notFound from "@/handlers/notfound";
import sendError from "@/handlers/error";

const honoOptions = {
  strict: false,
};

const corsOptions = {
  origin: "*",
  allowMethods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
  maxAge: 600,
  credentials: true,
};

const app = new Hono(honoOptions);

app.use("/*", cors(corsOptions));
app.use(logger());
app.use(mwFavicon(favicon));

app.get("/", getText);
app.get("/page", getPage);
app.get("/version", getVersion);
app.get("/deps", getDependencies);

app.get("/error", (c) => {
  throw new Error("Error");
});

app.notFound(notFound); // 404
app.onError(sendError); // 500

export default app;
