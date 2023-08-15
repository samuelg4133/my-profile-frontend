"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { useSidebar } from "@/lib/zustand/stores/sidebar";

export function Wrapper({ children }: PropsWithChildren): JSX.Element {
  const { isOpen } = useSidebar();

  return (
    <section
      className={twMerge(
        "flex flex-col flex-1",
        isOpen && "md:ml-64",
        "transform-gpu transition-all duration-300 ease-in-out",
      )}
    >
      {children}
    </section>
  );
}
