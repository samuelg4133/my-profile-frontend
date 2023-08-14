import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Card({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={twMerge(
        "bg-white dark:bg-gray-950 shadow",
        "dark:shadow-gray-800 rounded-lg p-6",
        "even:bg-zinc-50 dark:even:bg-gray-900",
        "inline-flex flex-col items-start gap-6",
        "transform transition-transform hover:scale-[1.01] hover:relative hover:z-10",
        className,
      )}
      {...props}
    />
  );
}
