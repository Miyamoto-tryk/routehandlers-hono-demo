import { z } from "@hono/zod-openapi";

export const PostHogeResponseSchema = z.object({
  message: z.string(),
});

export const PostHogeParamSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .openapi({
        param: {
          name: "id",
          in: "path",
        },
        example: "random_uuid",
      }),
  })
  .openapi("PostHogeParamSchema");
