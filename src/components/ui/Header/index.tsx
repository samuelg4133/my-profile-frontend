"use client";

import { List } from "phosphor-react";

import { useSidebar } from "@/lib/zustand/stores/sidebar";

export function Header(): JSX.Element {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className="flex justify-between items-center shadow flex-shrink md:px-8 md:py-4 p-4 h-16">
      <section className="">
        {!isOpen && (
          <button
            type="button"
            onClick={toggleSidebar}
            className="relative flex items-center justify-center after:rounded-md after:p-5 after:bg-gray-300 dark:after:bg-gray-600 hover:after:bg-gray-400 dark:hover:after:bg-gray-700 after:opacity-30 after:content-[''] after:w-full after:h-full after:absolute"
          >
            <List className="h-7 w-7" />
          </button>
        )}
      </section>
    </header>
  );
}
