import {
  Children,
  HTMLAttributes,
  ReactElement,
  ThHTMLAttributes,
  cloneElement,
} from "react";

interface TableHeadProps {
  children: Array<ReactElement<ThHTMLAttributes<HTMLTableCellElement>>>;
}

export function TableHead({ children }: TableHeadProps) {
  return (
    <thead className="w-full relative bg-gray-100 dark:bg-gray-900">
      <tr>
        {Children.map(children, (child) =>
          cloneElement<HTMLAttributes<HTMLTableCellElement>>(child),
        )}
      </tr>
    </thead>
  );
}
