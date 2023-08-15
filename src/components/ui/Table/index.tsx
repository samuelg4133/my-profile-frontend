import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="rounded-lg border border-gray-100 dark:border-gray-700 shadow w-full overflow-hidden">
      <table
        {...props}
        cellPadding={16}
        className={twMerge(
          "table-auto rounded-lg w-full flex-1 text-left",
          className,
        )}
      />
    </div>
  );
}

export default { Table, TableHead, TableBody } as const;
