import { z } from "@hono/zod-openapi";

export const GetFugaResponseSchema = z.object({
  message: z.string(),
});

export const GetFugaParamSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .openapi({
        param: {
          name: "name",
          in: "query",
        },
        example: "miyamotto",
      }),
  })
  .openapi("GetFugaParamSchema");
