import MatchCard from "@/components/MatchCard";
import SearchComponent from "@/components/SearchComponent";
import Time from "@/components/Time";
import { matchesData } from "@/constants";
import React from "react";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query?.toLowerCase(); // Convert query to lowercase for case-insensitive filtering

  // Filter matchesData based on the query
  const filteredMatches = matchesData.filter((match) =>
    query ? match.title.toLowerCase().includes(query) : true
  );

  return (
    <div className="w-full border-none md:border-r pr-[30px] relative">
      <div className="w-full flex items-center justify-between gap-2 border-b pb-6">
        <SearchComponent query={query} />

        <Time />
      </div>

      <div className="mt-10 flex flex-col">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))
        ) : (
          <p>No matches found</p>
        )}
      </div>

      <div className="flex items-center justify-center w-full absolute bottom-2 flex-col gap-2">
        <p>2025 - დაცულია ყველა უფლება</p>
        <p className="text-xl">15+</p>
      </div>
    </div>
  );
}

export default Home;
