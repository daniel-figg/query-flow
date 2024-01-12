import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const fileRouter = createTRPCRouter({
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.file.findMany({
      where: {
        userId,
      },
    });
  }),
});
