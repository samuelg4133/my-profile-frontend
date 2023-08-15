import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { Header, Main, Sidebar, Wrapper } from "@/components/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Profile App",
  description: "My Profile App",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body
        className={twMerge(
          inter.className,
          "flex text-black dark:text-white bg-light dark:bg-gray-900",
        )}
      >
        <Sidebar />
        <Wrapper>
          <Header />
          <Main>{children}</Main>
        </Wrapper>
      </body>
    </html>
  );
}
