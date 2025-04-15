import { OpenAPIHono } from "@hono/zod-openapi";
import { handle } from "hono/vercel";
import { fugaApi } from "./fugaApi";
import { hogeApi } from "./hogeApi";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono()
  .basePath("/api")
  .route("/fuga", fugaApi)
  .route("/hoge", hogeApi)
  .doc("/specification", {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
    },
  })
  .get(
    "/doc",
    swaggerUI({
      url: "/api/specification",
    })
  );

export const AppType = typeof app;

export const GET = handle(app);
export const POST = handle(app);
