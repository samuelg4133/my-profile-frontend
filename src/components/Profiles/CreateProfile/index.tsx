"use client";

import Link from "next/link";
import { Plus } from "phosphor-react";

import { Button } from "@/components/ui";

export function CreateProfile() {
  return (
    <Button asChild>
      <Link href="/profiles/create">
        <p className="max-sm:hidden">Criar Profissional</p>
        <Plus className="h-4 w-4" />
      </Link>
    </Button>
  );
}
