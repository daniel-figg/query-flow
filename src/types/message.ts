import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "~/server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;

type Messages = RouterOutput["chat"]["getFileMessages"]["messages"];

type OmitText = Omit<Messages[number], "text">;

type OmitCreatedAt = Omit<Messages[number], "createdAt">;

type ExtendedText = {
  text: string | JSX.Element | Element;
};

type ExtendedCreatedAt = {
  createdAt: string | Date;
};

export type ExtendedMessage = OmitText &
  ExtendedText &
  OmitCreatedAt &
  ExtendedCreatedAt;
