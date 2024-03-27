import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateProducts } from "~/server/utils/products";

export const productsRouter = createTRPCRouter({
  getAllProducts: publicProcedure
    .input(z.object({ productLength: z.number() }))
    .query(({ input }) => {
      return generateProducts(input.productLength);
    }),
});
