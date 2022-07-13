import React,{useContext} from "react";
import SideNav from "../SideNav/SideNav";
import notifImg from "../../../assets/Notification.png";
import userImg from "../../../assets/User.png";
import tickImg from "../../../assets/tick.png";
import crslImg from "../../../assets/crsl.png";
import bitImg from "../../../assets/bitCoin.png";
import iImg from "../../../assets/i.png";
import { StateContext } from "../../../App";

import { AiOutlineSearch, AiFillStar } from "react-icons/ai";

import "./TradeComponent.css";

import { Link } from "react-router-dom";
export default function TradeComponent() {
  const state = useContext(StateContext)
  return (
    <div className="grid grid-cols-12 sm:max-w-full max-w-7xl xl:gap-10 gap-0">
      <div className={`${state.dashToggle?"col-span-2":"col-span-0"}`}>
        <SideNav />
      </div>
      <TheTradeContainer />
    </div>
  );
}

function TheTradeContainer() {
  return (
    <>
      <div className="col-span-10 pt-20 xl:max-w-6xl max-w-6xl">
        <TradeSectionOne />
        <SectionTwoTrade />
        <TheLeftContainer />
      </div>
    </>
  );
}

function TradeSectionOne() {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-between mb-10 gap-2">
      <div className="flex xl:flex-row flex-col  flex-wrap items-center justify-start gap-5">
        <h1 className="text-[40px] font-bold text-[#133d58]">Trade</h1>
        <div className="">
        <Link className="TradeLinks" to="">
          <div className="tab flex justify-start gap-2  items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
            <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
              Simple
            </button>
          </div>
        </Link>
        </div>
        <Link className="TradeLinks" to="">
          <div className="tab flex justify-start gap-2 items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
            <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
              Advance
            </button>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex xl:flex-row flex-col items-center justify-start gap-5">
          <Link className="TradeLinks" to="">
            <div className="tab flex justify-start gap-2  items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Buy/Sell
              </button>
            </div>
          </Link>
          <Link className="TradeLinks" to="">
            <div className="tab flex justify-start gap-2 items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Send/Receive
              </button>
            </div>
          </Link>
          <div className="flex items-center gap-10">
            <img src={notifImg} />
            <img src={userImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
function SectionTwoTrade() {
  return (
    <div className="mb-10">
      <div className="md:bg-[#e3e3e3] p-1 rounded-full flex xl:flex-row flex-col items-center justify-between ">
        <div className="flex md:flex-row flex-col items-center gap-10">
          <img src={tickImg} />
          <p>You're almost there finish account setup</p>
          <img src={crslImg} />
        </div>
        <div className="pr-2">
          <p className="font-bold text-[#133d58]">Add Payment Method</p>
        </div>
      </div>
    </div>
  );
}
function TheLeftContainer() {
    
  return (
    <div className="grid lg:grid-cols-6 flex-wrap gap-10 pb-10">
      <div className="col-span-4 border-2  p-4 rounded-xl shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="flex flex-wrap items-center justify-between gap-10 bg-[#e3e3e3] rounded-full pl-5 pr-1 w-full">
              <input
                placeholder="Search Here"
                className="border-2 rounded-full bg-[#e3e3e3] py-1 focus:outline-none"
                type="text"
              />
              <AiOutlineSearch
                color="#133d58"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#f0b11b",
                  borderRadius: "25px",
                  padding: "5px",
                }}
              />
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <span className="flex items-center rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] p-2 hover:text-white">
            <p>1 Day</p>
            <select className="bg-transparent">
            </select>

            </span>
            <span className="flex items-center rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] hover:text-white p-2">
            <p>All Assets</p>
            <select className="bg-transparent ">
            </select>

            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between
         font-semibold mt-10 border-y-2 py-5">

            <p>Name</p>
            <p>Price</p>
            <p>Change</p>
            <p>Market Cap</p>
            <p>Watch</p>

        </div>
        <TheFormRow/>
        <TheFormRow/>
        <TheFormRow/>
        <TheFormRow/>
        <TheFormRow/>
        <TheFormRow/>
        <TheFormRow/>
        <TheFormRow/>


        
      </div>

      <div className="sm:col-span-2 md:border-2  md:p-4 p-1 rounded-xl shadow-xl h-fit">


           <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex items-center gap-10">
            <span className="rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] p-2">
            <p className="font-bold">Buy</p>

            </span>
            <span className="flex items-center rounded-2xl bg-[#e3e3e3]  hover:bg-[#f0b11b] p-2">
            <p className="font-bold">Sell</p>

            </span>
            <span className="flex items-center rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] hover:text-white p-2">
            <p className="font-bold">Crypto Market</p>

            </span>
            </div>
            <img src={iImg}/>
            <p className="font-bold text-[25px]">Indentity Verification Required</p>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum is simply dummy text of the printing and typesettin</p>
            </div>     



      </div>
    </div>
  );
}

function TheFormRow(){
    return(
        <div className="flex items-center justify-between text-sm py-5 border-t-2">

        <span className="flex items-center">
            {/* <img src={bitImg} style={{width:"25px"}}/> */}
        <p className="font-bold">Bitcoin</p>
        </span>
        <p className="font-bold">USD 33,000.01</p>
        <p className="font-bold">+3.89</p>
        <p className="font-bold">USD 115.OT</p>
        <p className="font-bold">STAR</p>
    </div>
    )
}