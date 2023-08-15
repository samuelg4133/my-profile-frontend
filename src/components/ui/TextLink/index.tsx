import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function TextLink({
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={twMerge(
        "font-semibold rounded focus:rounded text-sm",
        "inline-flex items-center gap-1",
        "text-info-600 hover:text-info-700 dark:text-info-500 dark:hover:text-info-600",
        className,
      )}
    />
  );
}
