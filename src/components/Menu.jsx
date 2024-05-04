import { useRef, useState } from "react";
import first from "../assets/1.svg";
import second from "../assets/2.svg";
import third from "../assets/3.svg";
import fourth from "../assets/4.svg";
import fifth from "../assets/5.svg";
import sixth from "../assets/6.svg";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { CgMenu } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";
import Leaderboards from "./Leaderboards";
import Stats from "./Stats";

function Menu() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const closeButton = useRef(null);
  const openButton = useRef(null);
  const closeButton2 = useRef(null);
  const openButton2 = useRef(null);

  const navbarStyle = {
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "2",
    backgroundColor: "#6b7b8e38",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    //Desktop Menu
    <>
      <div className="fixed top-0 h-screen lg:block hidden">
        <div className="flex flex-col mt-10 ml-10 gap-5">
          <h1 className="text-[#FFDF00] font-sans">FLAME</h1>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={first} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF]">Dashboard</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={second} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF]">Play</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={third} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF]">Tournament</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={fourth} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF]">Upcoming Contest</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={fifth} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF]">Watch</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={sixth} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF]">Leaderboard</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 mt-[480px]">
            <img src={logout} className="h-[32px] w-[32px]" />
            <h1 className="text-[#C2C3CF] font-thin">Logout</h1>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50">
        <nav
          className={`lg:hidden px-2 smd:px-4 relative w-full h-[50px]`}
          style={navbarStyle}
        >
          <div className="flex justify-between mt-3 items-center">
            {/* Hamburger Menu */}
            <button
              ref={openButton}
              className="text-white rounded-lg text-sm p-1.5 inline-flex items-center"
              type="button"
              onClick={() => {
                setToggle(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <CgMenu />
            </button>

            <h1 className="text-[#FFDF00] font-sans">FLAME</h1>

            {/* Dots Menu */}
            <button
              ref={openButton2}
              className="text-white rounded-lg text-sm p-1.5 inline-flex items-center"
              type="button"
              onClick={() => {
                setToggle2(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <HiDotsVertical />
            </button>
          </div>

          {/* Drawer Component */}
          {toggle ? (
            <div
              id="drawer-right-example"
              className="fixed top-0 left-0 z-40 w-30% h-full p-4  overflow-y-auto transition-transform bg-[#000000] opacity-[0.90]"
            >
              <button
                ref={closeButton}
                onClick={() => {
                  setToggle(false);
                }}
                type="button"
                className="text-[#C2C3CF] text-2xl rounded-lg p-1.5 absolute top-[1.375rem] right-[1.625rem] inline-flex items-center"
              >
                <IoMdCloseCircle />
                <span className="sr-only">Close menu</span>
              </button>

              <div className="flex flex-col mt-20 ml-6 gap-8">
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={first} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF]">Dashboard</h1>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={second} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF]">Play</h1>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={third} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF]">Tournament</h1>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={fourth} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF]">Upcoming Contest</h1>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={fifth} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF]">Watch</h1>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={sixth} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF]">Leaderboard</h1>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img src={logout} className="h-[32px] w-[32px]" />
                  <h1 className="text-[#C2C3CF] font-thin">Logout</h1>
                </div>
              </div>
            </div>
          ) : null}

          {toggle2 ? (
            <div
              id="drawer-right-example"
              className="fixed top-0 right-0 z-40 w-30% h-full p-4  overflow-y-auto transition-transform bg-[#000000] opacity-[0.90]"
            >
              <button
                ref={closeButton2}
                onClick={() => {
                  setToggle2(false);
                }}
                type="button"
                className="text-[#C2C3CF] text-2xl rounded-lg p-1.5 absolute top-[1.375rem] right-[1.625rem] inline-flex items-center"
              >
                <IoMdCloseCircle />
                <span className="sr-only">Close menu</span>
              </button>

              <Stats />
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );
}

export default Menu;
