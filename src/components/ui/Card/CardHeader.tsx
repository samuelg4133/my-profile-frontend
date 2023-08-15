import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function CardHeader({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      {...props}
      className={twMerge("flex items-start gap-4 self-stretch", className)}
    />
  );
}
