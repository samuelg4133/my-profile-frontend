"use client";

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Headline700(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 {...props} className={twMerge("font-bold text-xl", props?.className)} />
  );
}
