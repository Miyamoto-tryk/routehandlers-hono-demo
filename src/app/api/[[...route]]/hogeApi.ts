import { createRoute, OpenAPIHono, RouteHandler } from "@hono/zod-openapi";
import { PostHogeParamSchema, PostHogeResponseSchema } from "./model/hoge";

const postHogeRoute = createRoute({
  path: "/{id}",
  method: "post",
  description: "hogeに対するPOSTリクエスト",
  request: {
    params: PostHogeParamSchema,
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": { schema: PostHogeResponseSchema },
      },
    },
  },
});

const postHogeHandler: RouteHandler<typeof postHogeRoute> = async (c) => {
  const { id } = c.req.valid("param");
  return c.json({ message: `Received ID: ${id}` }, 200);
};

export const hogeApi = new OpenAPIHono().openapi(
  postHogeRoute,
  postHogeHandler
);
