import { type inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "~/server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;

type Messages = RouterOutput["chat"]["getFileMessages"]["messages"];

type OmitText = Omit<Messages[number], "text" | "createdAt">;

type ExtendedText = {
  text: string | JSX.Element;
  createdAt: string | Date;
};

export type ExtendedMessage = OmitText & ExtendedText;
