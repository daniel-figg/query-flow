import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const chatRouter = createTRPCRouter({
  getFileUploadStatus: privateProcedure
    .input(z.object({ fileId: z.string() }))
    .query(async ({ input, ctx }) => {
      const file = await db.file.findFirst({
        where: {
          id: input.fileId,
          userId: ctx.userId,
        },
      });

      if (!file) return { status: "PENDING" as const };

      return { status: file.uploadStatus };
    }),
});
