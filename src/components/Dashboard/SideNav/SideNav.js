import React, {useContext} from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { AiTwotoneMessage } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { StateContext } from "../../../App";

function SideNav() {
  const loc = window.location.href;
  const n = loc.lastIndexOf("/");
  let bucky = loc.slice(n);

  const state = useContext(StateContext)
  return (
    <>
    <div className={`bg-[#e0e0e0] overflow-hidden transition-all  h-full pt-20 ${state.dashToggle === true ? "mr-[0%]" : "mr-[100%]"}`}>
      <div className="flex flex-col gap-5 xl:p-5 p-0">
       
        <Link to="/dashboard">
          <div
            className={
              bucky === "/dashboard"
                ? "sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]"
                : "sidebar_tabs xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"
            }
          >
            <TbLayoutDashboard
              color="#133d58"
              style={{
                width: "40px",
                height: "35px",
                backgroundColor: "#f0b11b",
                borderRadius: "25px",
                padding: "5px",
              }}
            />
            <button className="sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs">
              <p>Dashboard</p>
            </button>
          </div>
        </Link>

        <Link to="/dashboard/trade">
          <div
            className={
              bucky === "/trade"
                ? "sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]"
                : "sidebar_tabs  xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"
            }
          >
            <MdAutoGraph
              color="#133d58"
              style={{
                width: "40px",
                height: "35px",
                backgroundColor: "#f0b11b",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <button className="sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
              <p>Trade</p>
            </button>
          </div>
        </Link>
        <Link to="/dashboard/wallet">
          <div
            className={
              bucky === "/wallet"
                ? "sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]"
                : "sidebar_tabs  xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"
            }
          >
            <FaWallet
              color="#133d58"
              style={{
                width: "40px",
                height: "35px",
                backgroundColor: "#f0b11b",
                borderRadius: "25px",
                padding: "5px",
              }}
            />
            <button className="sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
              <p>Wallet</p>
            </button>
          </div>
        </Link>
        <Link to="/dashboard/usersettings">
          <div
            className={
              bucky === "/usersettings"
                ? "sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]"
                : "sidebar_tabs xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"
            }
          >
            <RiUserSettingsLine
              color="#133d58"
              style={{
                width: "40px",
                height: "35px",
                backgroundColor: "#f0b11b",
                borderRadius: "25px",
                padding: "5px",
              }}
            />
            <button className="sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
              <p>User Settings</p>
            </button>
          </div>
        </Link>
        <Link to="/dashboard/community">
          <div
            className={
              bucky === "/community"
                ? "sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]"
                : "sidebar_tabs  xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"
            }
          >
            <AiTwotoneMessage
              color="#133d58"
              style={{
                width: "40px",
                height: "35px",
                backgroundColor: "#f0b11b",
                borderRadius: "25px",
                padding: "5px",
              }}
            />
            <button className="sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
              <p>Community</p>
            </button>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default SideNav;
