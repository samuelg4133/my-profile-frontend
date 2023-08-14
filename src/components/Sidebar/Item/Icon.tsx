'use client';

import { ReactElement, SVGProps, cloneElement } from "react";

interface ItemIconProps {
  children: ReactElement<SVGProps<SVGSVGElement>>;
}

export function ItemIcon({ children }: ItemIconProps): JSX.Element {

  return cloneElement(children, {
    className: "h-6 w-6 text-gray-400"
  });
}