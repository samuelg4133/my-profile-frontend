"use client";

import Link from "next/link";
import { Plus } from "phosphor-react";
import { twMerge } from "tailwind-merge";

import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { CardWrapper } from "@/components/CardWrapper";
import { Paragraph } from "@/components/Typography";
import { Headline700 } from "@/components/Typography/Headline";
import { useSidebar } from "@/lib/zustand/stores/sidebar";

export default function Profiles() {
  const { isOpen } = useSidebar();

  return (
    <section className="flex flex-col flex-1 self-stretch gap-4 rounded-md">
      <header className="flex flex-1 justify-between sm:items-start items-center gap-6">
        <Headline700>Profissionais</Headline700>
        <Button asChild>
          <Link href="/profiles/create">
            <p className="max-sm:hidden">Criar Profissional</p>
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </header>
      <CardWrapper>
        <div
          className={twMerge(
            "grid w-full gap-4 justify-center justify-items-center",
            !isOpen &&
              " grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1",
            isOpen &&
              "grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1",
            "transform-gpu transition-all duration-300 ease-in",
          )}
        >
          <Link href={"/profiles/samuel-gomes"}>
            <Card.Container className="max-w-sm">
              <Card.Header className="border-b pb-4 border-b-neutral-800">
                <Avatar size="2xl">SA</Avatar>
                <div>
                  <Headline700 className="hover:underline hover:cursor-pointer">
                    Samuel Gomes
                  </Headline700>
                  <Paragraph size={300}>Desenvolvedor</Paragraph>
                  <Badge color="bg-blue-100 dark:bg-main">TypeScript</Badge>
                </div>
              </Card.Header>
              <Paragraph size={300}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Paragraph>
            </Card.Container>
          </Link>
        </div>
      </CardWrapper>
    </section>
  );
}
