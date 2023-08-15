"use client";

import Link from "next/link";

import { Avatar, Headline700, Paragraph } from "@/components/ui";
import Card from "@/components/ui/Card";
import { ShowProfileDTO } from "@/core/dtos/ShowProfileDTO";
import { Pagination } from "@/core/Pagination";

import { Wrapper } from "./Wrapper";

interface ListProps {
  profiles: Pagination<ShowProfileDTO>;
}

export function List({ profiles }: ListProps) {
  return (
    <Wrapper>
      {profiles.content.map((profile) => (
        <Card.Container<"a">
          className="max-w-sm"
          as={Link}
          href={`/profiles/${profile.id}`}
          key={profile.id}
        >
          <Card.Header>
            <Avatar size="2xl">
              {profile.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .substring(0, 2)}
            </Avatar>
            <div className="break-all">
              <Headline700 className="hover:underline hover:cursor-pointer">
                {profile.name}
              </Headline700>
              <Paragraph size={300}>{profile.email}</Paragraph>
            </div>
          </Card.Header>
        </Card.Container>
      ))}
    </Wrapper>
  );
}
