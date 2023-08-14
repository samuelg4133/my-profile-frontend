"use client";

import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { MouseEventHandler } from "react";

interface SidebarHeaderProps {
  onToggle: MouseEventHandler<HTMLButtonElement>;
}

export function SidebarHeader({ onToggle }: SidebarHeaderProps) {
  return (
    <header className="flex gap-4 justify-between px-2">
      <Link href="/">
        <strong className="text-3xl font-bold">MyProfile</strong>
      </Link>

      <button
        type="button"
        className="bg-gray-100 dark:bg-gray-600 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={onToggle}
      >
        <ArrowLeft size={24} />
      </button>
    </header>
  );
}
