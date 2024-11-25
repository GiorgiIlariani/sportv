import MatchCard from "@/components/MatchCard";
import SearchComponent from "@/components/SearchComponent";
import Time from "@/components/Time";
import { matchesData } from "@/constants";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full border-r pr-[30px]">
      <div className="w-full flex items-center justify-between border-b pb-6">
        <SearchComponent />

        <Time />
      </div>

      <div className="mt-10 flex flex-col">
        {matchesData.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
