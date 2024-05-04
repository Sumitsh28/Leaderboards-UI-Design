import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Users from "./Users";
import { Link } from "react-router-dom";

const Leaderboards = () => {
  const [activeTab, setActiveTab] = useState("global");

  return (
    <div className="flex flex-col gap-5 justify-center">
      <h1 className="text-white font-medium text-xl">Leaderboards</h1>
      <div className="flex items-center rounded-full border-[#20262E] border-[1px] w-[320px] justify-center">
        <div
          className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer w-[137px]`}
          onClick={() => setActiveTab("global")}
        >
          <p
            className={`text-base px-4 py-1 rounded-full text-white ${
              activeTab === "global" && "bg-[#272D34] shadow-md text-white"
            }`}
          >
            Global
          </p>
        </div>

        <div
          className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 group cursor-pointer`}
          onClick={() => setActiveTab("friends")}
        >
          <p
            className={`text-base px-4 py-1 rounded-full text-white ${
              activeTab === "friends" && "bg-[#272D34] shadow-md text-white"
            }`}
          >
            Friends Only
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-4 py-6">
        <AnimatePresence>
          {activeTab === "global" && (
            <>
              <div className="flex flex-col justify-center gap-5">
                {Array.from({ length: 8 }, (_, index) => (
                  <Users key={index} name={"Sumit"} />
                ))}
              </div>
            </>
          )}

          {activeTab === "friends" && (
            <>
              <div className="flex flex-col justify-center gap-5">
                {Array.from({ length: 8 }, (_, index) => (
                  <Users key={index} name={"Harsh"} />
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      <Link to="/leaderboards">
        <button className="bg-[#323F4A] w-[250px] h-[38.4px] rounded-full text-white cursor-pointer ml-12">
          See Top 100
        </button>
      </Link>
    </div>
  );
};

export default Leaderboards;
