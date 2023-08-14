import { HTMLAttributes, ReactElement } from "react";

interface TableBodyProps {
  children:
    | Array<ReactElement<HTMLAttributes<HTMLTableRowElement>>>
    | ReactElement<HTMLAttributes<HTMLTableRowElement>>;
}

export function TableBody({ ...props }: TableBodyProps) {
  return <tbody {...props} />;
}
