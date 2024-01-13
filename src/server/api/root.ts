import { authRouter } from "~/server/api/routers/auth";
import { createTRPCRouter } from "~/server/api/trpc";
import { fileRouter } from "./routers/file";
import { chatRouter } from "./routers/chat";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  file: fileRouter,
  chat: chatRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
