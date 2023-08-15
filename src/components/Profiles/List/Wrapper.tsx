"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { CardWrapper } from "@/components/ui";
import { useSidebar } from "@/lib/zustand/stores/sidebar";

export function Wrapper({ children }: PropsWithChildren) {
  const { isOpen } = useSidebar();

  return (
    <CardWrapper>
      <div
        className={twMerge(
          "grid w-full gap-4 justify-center justify-items-center",
          !isOpen &&
            " grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1",
          isOpen &&
            "grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1",
          "transform-gpu transition-all duration-300 ease-in",
        )}
      >
        {children}
      </div>
    </CardWrapper>
  );
}
