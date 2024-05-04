import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function Map() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <h1 className="text-white font-semibold">Classical</h1>
        <h1 className="text-white font-thin text-sm">Top 65.9%</h1>
        <div className="flex items-center">
          <div className="w-[318px] h-[1.5px] bg-gray-700 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-blue-500 absolute top-0 left-0"
              style={{ width: `${65.9}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-white font-semibold">Rapid</h1>
        <h1 className="text-white font-thin text-sm">Top 71.2%</h1>
        <div className="flex items-center">
          <div className="w-[318px] h-[1.5px] bg-gray-700 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-red-500 absolute top-0 left-0"
              style={{ width: `${71.2}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-white font-semibold">Blitz</h1>
        <h1 className="text-white font-thin text-sm">Top 89.4%</h1>
        <div className="flex items-center">
          <div className="w-[318px] h-[1.5px] bg-gray-700 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-green-500 absolute top-0 left-0"
              style={{ width: `${89.4}%` }}
            ></div>
          </div>
        </div>
      </div>

      <h1 className="text-white font-medium text-lg">Map Distribution</h1>

      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-white font-thin text-sm">Tracking:</h1>
        <h1 className="text-white text-sm">Active</h1>
      </div>

      <div className="flex flex-row items-center gap-2">
        <IoCheckmarkDoneCircleSharp className="text-[#474D84] text-lg" />
        <h1 className="text-white font-thin">
          391 elements installed, 84 sets
        </h1>
      </div>
    </div>
  );
}

export default Map;
