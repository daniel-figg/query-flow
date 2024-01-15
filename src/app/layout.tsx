import "~/styles/globals.css";
import { cn, constructMetadata } from "src/lib/utils";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "~/components/NavBar";

import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = constructMetadata();
export const viewport = {
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "bg-grainy min-h-screen font-sans antialiased",
          inter.className,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <NavBar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
