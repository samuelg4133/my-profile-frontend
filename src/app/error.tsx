"use client";

import { Button, Headline700 } from "@/components/ui";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <section className="flex flex-col flex-1 self-stretch gap-4 rounded-md">
      <header className="flex flex-1 justify-between sm:items-start items-center gap-6">
        <Headline700>Ops... Tivemos um problema</Headline700>
        <Button onClick={reset}>Tentar Novamente</Button>
      </header>
    </section>
  );
}
