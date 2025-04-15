import { createRoute, OpenAPIHono, RouteHandler } from "@hono/zod-openapi";
import { GetFugaParamSchema, GetFugaResponseSchema } from "./model/fuga";

const getFugaRoute = createRoute({
  path: "/",
  method: "get",
  description: "fugaに対するGETリクエスト",
  request: {
    query: GetFugaParamSchema,
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: GetFugaResponseSchema,
        },
      },
    },
    // 500:{ ・・・ },
    // 400:{ ・・・ }
  },
});

const getFugaHandler: RouteHandler<typeof getFugaRoute> = async (c) => {
  const { name } = c.req.valid("query");
  return c.json(
    { message: `Hello, ${name}! Received via query parameter.` },
    200
  );
};

export const fugaApi = new OpenAPIHono().openapi(getFugaRoute, getFugaHandler);
