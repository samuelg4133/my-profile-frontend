"use client";

import { House, UsersThree } from "phosphor-react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import { useSidebar } from "@/lib/zustand/stores/sidebar";

import { SidebarHeader } from "./Header";
import Item from "./Item";

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <Fragment>
      <aside
        className={twMerge(
          "flex flex-col gap-4 justify-between border-r border-r-gray-200 dark:border-r-gray-700",
          "fixed overflow-x-hidden overflow-y-auto",
          "top-0 left-0 w-64 h-screen bg-white dark:bg-gray-800 z-10",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "transform-gpu transition-all duration-300 ease-in-out",
          "divide-y divide-solid divide-gray-200 dark:divide-gray-600",
        )}
      >
        <section className="flex flex-col gap-4 py-4">
          <SidebarHeader onToggle={toggleSidebar} />
          <nav className="px-2 flex flex-col gap-4">
            <section className="flex flex-col gap-1">
              <Item.Container href="/" value="Home" exact>
                <Item.Icon>
                  <House />
                </Item.Icon>
              </Item.Container>
              <Item.Container href="/profiles" value="Profissionais">
                <Item.Icon>
                  <UsersThree />
                </Item.Icon>
              </Item.Container>
            </section>
          </nav>
        </section>
      </aside>
      {isOpen && (
        <div className="max-md:mix-blend-multiply absolute z-[4] bg-gray-300 h-full w-full md:hidden" />
      )}
    </Fragment>
  );
}
