"use client";

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Headline600(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 {...props} className={twMerge("font-bold text-lg", props?.className)} />
  );
}
