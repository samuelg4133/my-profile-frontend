import { CreateProfile } from "@/components/Profiles/CreateProfile";
import { List } from "@/components/Profiles/List";
import { Headline700 } from "@/components/ui";
import { ShowProfileDTO } from "@/core/dtos/ShowProfileDTO";
import { Pagination } from "@/core/Pagination";
import { api } from "@/lib/api";

export default async function Profiles() {
  const profiles = await api("http://localhost:8080/api/profiles", {
    method: "GET",
  }).then((res) => res.json() as unknown as Pagination<ShowProfileDTO>);

  return (
    <section className="flex flex-col flex-1 self-stretch gap-4 rounded-md">
      <header className="flex flex-1 justify-between sm:items-start items-center gap-6">
        <Headline700>Profissionais</Headline700>
        <CreateProfile />
      </header>
      <List profiles={profiles} />
    </section>
  );
}
