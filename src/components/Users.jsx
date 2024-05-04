import React from "react";
import pro from "../assets/pro.svg";

function Users({ name }) {
  return (
    <div className="w-[301px] h-[60px] bg-[#161A1E] rounded-full flex flex-row gap-4 items-center">
      <div className="relative ml-4">
        <img
          src="https://api.multiavatar.com/Binx Bond.svg"
          className="w-[40px] h-[40px] z-0 top-0 left-0"
        />
        <img
          src={pro}
          className="w-[30px] h-[13px] z-30 absolute top-8 left-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-white font-sans">{name}</h1>
        <div className="flex flex-row items-center justify-center gap-4">
          <h1 className="text-[#CBD1E1] font-abc font-thin text-sm">
            140891.89
          </h1>
          <h1 className="text-[#CBD1E1] font-abc font-thin text-sm">
            (200 targets)
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Users;
