import { ComponentProps, ElementType, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  as?: ElementType;
}

export function Card<E extends ElementType = "section">({
  className,
  as: Element = "section",
  ...props
}: PropsWithChildren<CardProps & ComponentProps<E>>) {
  return (
    <Element
      className={twMerge(
        "bg-white dark:bg-gray-900 shadow",
        "dark:shadow-gray-700 rounded-lg p-6",
        "even:bg-zinc-50 dark:even:bg-gray-950",
        "inline-flex flex-col items-start gap-6",
        "transform transition-transform hover:scale-[1.01] hover:relative hover:z-10",
        className,
      )}
      {...props}
    />
  );
}
