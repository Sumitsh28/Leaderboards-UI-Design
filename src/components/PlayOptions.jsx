import React from "react";
import History from "./History";

function PlayOptions() {
  return (
    <div className="flex flex-col mt-20 ml-20 mr-20 lg:mr-0 gap-28">
      <div className="flex flex-col gap-8">
        <h1 className="text-white font-sans font-medium">Play Options</h1>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col border-[#20262E] border-[1px] w-[249px] h-[116px] rounded-xl items-center justify-center">
            <h1 className="text-[#FFDF00] text-2xl font-medium">Play 1v1</h1>
            <h1 className="text-[#6B7B8E]">241 games played</h1>
          </div>
          <div className="flex flex-col border-[#20262E] border-[1px] w-[249px] h-[116px] rounded-xl items-center justify-center">
            <h1 className="text-[#FFDF00] text-2xl font-medium">
              Play a friend
            </h1>
            <h1 className="text-[#6B7B8E]">13 games played</h1>
          </div>
          <div className="flex flex-col border-[#20262E] border-[1px] w-[249px] h-[116px] rounded-xl items-center justify-center">
            <h1 className="text-[#FFDF00] text-2xl font-medium">
              Daily Problem
            </h1>
            <h1 className="text-[#6B7B8E]">67 solved</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-white font-sans font-medium">Variants</h1>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col border-[#20262E] border-[1px] w-[249px] h-[116px] rounded-xl items-center justify-center">
            <h1 className="text-[#FFDF00] text-2xl font-medium">Debug</h1>
            <h1 className="text-[#6B7B8E]">77 games played</h1>
          </div>
          <div className="flex flex-col border-[#20262E] border-[1px] w-[249px] h-[116px] rounded-xl items-center justify-center">
            <h1 className="text-[#FFDF00] text-2xl font-medium">Reverse</h1>
            <h1 className="text-[#6B7B8E]">32 games played</h1>
          </div>
          <div className="flex flex-col border-[#20262E] border-[1px] w-[249px] h-[116px] rounded-xl items-center justify-center">
            <h1 className="text-[#FFDF00] text-2xl font-medium">More</h1>
            <h1 className="text-[#6B7B8E]">541 solved</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-white font-sans font-medium">Battle history</h1>
        {Array.from({ length: 10 }, (_, index) => (
          <History key={index} />
        ))}
      </div>
    </div>
  );
}

export default PlayOptions;
