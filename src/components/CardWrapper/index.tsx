import { ComponentProps } from "react";

export function CardWrapper({ ...props }: ComponentProps<"section">) {
  return (
    <section
      className="flex flex-col items-start self-stretch flex-1 bg-white dark:bg-gray-800 rounded-md shadow-sm p-6"
      {...props}
    />
  );
}
