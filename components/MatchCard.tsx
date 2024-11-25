import React from "react";
import { matchCardProps } from "..";

const MatchCard = ({ time, title, icon }: matchCardProps) => {
  return (
    <div className="w-full border-b flex items-center gap-3 cursor-pointer hover:bg-gray-200 px-2 py-2">
      <div>{icon}</div>
      <span>{time}</span>
      <div>{title}</div>
    </div>
  );
};

export default MatchCard;
