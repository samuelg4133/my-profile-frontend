import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col items-start flex-1 self-stretch md:p-8 p-4">
      {children}
    </main>
  );
}
