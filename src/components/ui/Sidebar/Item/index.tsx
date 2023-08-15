"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "node:url";
import { PropsWithChildren, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { ItemIcon } from "./Icon";

type Url = string | UrlObject;

interface ItemProps {
  href: Url;
  value: string;
  exact?: boolean;
}

function Container({
  children: Icon,
  exact = false,
  href,
  value,
}: PropsWithChildren<ItemProps>) {
  const pathname = usePathname();

  const isActive = useMemo(
    () =>
      exact
        ? pathname === href.toString()
        : pathname.startsWith(href.toString()),
    [exact, href, pathname],
  );

  return (
    <Link
      href={href}
      className={twMerge(
        "flex items-center gap-3 flex-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer p-2 rounded-md",
        isActive && "bg-gray-100 dark:bg-gray-600",
      )}
    >
      {Icon}
      <p>{value}</p>
    </Link>
  );
}

export default { Container, Icon: ItemIcon } as const;
