import { FaEarthAmericas } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Map from "./Map";
import { FaSearch } from "react-icons/fa";
import Leaderboards from "./Leaderboards";

const Stats = () => {
  return (
    <div className="flex flex-col mt-32 ml-10 gap-32">
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-thin text-xl">Profile Statistics</h1>
        <div className="flex flex-row gap-2">
          <h1 className="text-white font-thin text-lg">Status:</h1>
          <div className="flex flex-row text-[#40FF5F] items-center">
            <GoDotFill />
            <h1>Online</h1>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaEarthAmericas className="text-[#474D84] text-lg" />
          <h1 className="text-white font-thin">146 Countries, 2759 Cities</h1>
        </div>
        <Map />
        <div className="bg-[#2D3740] h-[36px] w-[240px] px-4 py-3 rounded-md flex items-center justify-center gap-3">
          <FaSearch className="text-xl text-[#f4f4f4]" />
          <input
            type="text"
            className="flex-1 px-4 py-1 text-sm bg-transparent outline-none border-none text-white"
            placeholder="Search here......"
          />
        </div>
      </div>
      <Leaderboards />
    </div>
  );
};

export default Stats;
