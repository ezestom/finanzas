import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/", (c) => c.json("Hello, world!"));

export const GET = handle(app);
export const POST = handle(app);
