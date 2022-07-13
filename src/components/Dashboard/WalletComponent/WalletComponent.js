import React,{useContext} from "react";
import SideNav from "../SideNav/SideNav";
import { Link } from "react-router-dom";
import revertImg from "../../../assets/revert.png";
import walletImg from "../../../assets/walletIcon7.png";
import { StateContext } from "../../../App";
import walletCardImg from "../../../assets/walletCardImg.png";
import walletCardTwoImg from "../../../assets/walletCardTwoImg.png";

import iImg from "../../../assets/i.png";
import { MdKeyboardArrowRight, MdAutoGraph } from "react-icons/md";
import './WalletComponent.css'

function WalletComponent() {
  const state = useContext(StateContext)
  return (
    <div className="grid grid-cols-12 sm:max-w-full max-w-7xl xl:gap-10 gap-0">
     <div className={`${state.dashToggle?"col-span-2":"col-span-0"}`}>
        <SideNav />
      </div>
      <WalletContainer />
    </div>
  );
}

export default WalletComponent;

function WalletContainer() {
  return (
    <div className="col-span-10 xl:max-w-6xl max-w-6xl">
      <TopBar />
      <WalletCenterContainer />
    </div>
  );
}
function TopBar() {
  return (
    <div className="col-span-10 pt-20 xl:max-w-full max-w-6xl mb-10">
      <div className="flex md:flex-row flex-col items-center md:gap-36">
        <div>
          <h1 className="text-[40px] font-bold text-[#133d58]">
            Wallet Overview
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
          <Link className="WalletLinks" to="">
            <div className="tab flex justify-start gap-2 items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Deposit
              </button>
            </div>
          </Link>
          <Link className="WalletLinks" to="">
            <div className="tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Withdraw
              </button>
            </div>
          </Link>
          <Link className="WalletLinks" to="">
            <div className="tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Send
              </button>
            </div>
          </Link>
          <Link className="WalletLinks" to="">
            <div className="tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Transfer
              </button>
            </div>
          </Link>
          <Link className="WalletLinks" to="">
            <div className="tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]">
              <button className="bg-transparent text-[#133d58] font-bold md:text-base text-xs ">
                Transaction History
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
function WalletCenterContainer() {
  return (
    <div className="grid lg:grid-cols-6 flex-wrap gap-10 pb-10">
      <div className="md:col-span-4 p-4">
        <div className="flex items-center justify-between mb-8">
          <div className="">
            <span className="text-[1.2vmax] text-[#f0b11b] font-semibold">
              Estimated Balance
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-[#133d58] text-[2vmax]">
                0.00024981 BTC
              </span>
              <img
                style={{ fontSize: "1vmax", width: "2em" }}
                src={revertImg}
              />
              <span className="font-bold text-[#7e7e7e] text-[2vmax]">
                $7.62
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-4 pt-8 mb-10">
          <span className="text-[#f0b11b] text-[1.5vmax] font-semibold">
            My Assets
          </span>
          <div className="flex items-center justify-center">
            <input type="checkbox" />
            <span className="text-[#7e7e7e]">&nbsp;Hide 0 Balane Wallets</span>
          </div>
        </div>
        <div className="mb-10">
          <WalletRows
            theIcon="walletIcon1"
            theDesc="Flat And Spot"
            theValue="0.000001 BTC"
          />
          <WalletRows
            theIcon="walletIcon2"
            theDesc="Funding"
            theValue="0.000001 BTC"
          />
          <WalletRows
            theIcon="walletIcon3"
            theDesc="Cross Margin"
            theValue="0.000001 BTC"
          />
          <WalletRows
            theIcon="walletIcon4"
            theDesc="Isolated Margin"
            theValue="0.000001 BTC"
          />
          <WalletRows
            theIcon="walletIcon5"
            theDesc="USD-M Futures"
            theValue="0.000001 BTC"
          />
          <WalletRows
            theIcon="walletIcon6"
            theDesc="Coin-M Futures"
            theValue="0.000001 BTC"
          />
        </div>
        <span className="text-[#133d58] text-[3vmax] font-bold">
          Non-fungible token{" "}
          <span className="text-[2vmax] text-[#f0b11b]">(NFT)</span>
        </span>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <WalletCardOne />
          <WalletCardTwo />
        </div>
      </div>

      <div className="sm:col-span-2 rounded-xl shadow-xl h-fit">
        <div className="bg-[#133d58] rounded-t-xl p-4">
          <div className="flex items-center justify-center gap-20  ">
            <span className="text-[#f0b11b]">Recent Transactions</span>
            <span className="rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] p-2">
              <p className="font-bold">View All</p>
            </span>
          </div>
        </div>
        <RightCardRows />
        <RightCardRows />
        <RightCardRows />
        <RightCardRows />
        <RightCardRows />
      </div>
    </div>
  );
}
function WalletRows(theIcon) {
  const a = theIcon;
  console.log(a.theIcon);
  return (
    <div className="flex items-center justify-between border-t-2 py-5 ">
      <div className="flex items-center gap-2">
        <img
          style={{ width: "2em", fontSize: "1vmax" }}
          src={require(`../../../assets/${a.theIcon}.png`)}
        />
        <span className="text-[#133d58] font-semibold">{a.theDesc}</span>
      </div>
      <span className="flex items-center  text-[#133d58] font-semibold">
        {a.theValue}{" "}
        <MdKeyboardArrowRight
          color="#f0b11b"
          style={{ width: "25px", height: "25px" }}
        />
      </span>
    </div>
  );
}
function RightCardRows() {
  return (
    <div className="m-4 flex items-center gap-2 border-b-2 mb-5 pb-2">
      <div>
        <img style={{ width: "2em", fontSize: "1vmax" }} src={walletImg} />
      </div>
      <div className="">
        <div className="flex gap-32 pb-2">
          <span className="text-[#133d58] font-semibold">Deposit</span>
          <span className="text-[#133d58] font-semibold">0.504 BNB</span>
        </div>
        <div className="flex gap-20">
          <span className="text-xs text-[#7e7e7e]">2022-4-13 06:29:12</span>
          <span className="text-xs text-[#7e7e7e]">Completed</span>
        </div>
      </div>
    </div>
  );
}
function WalletCardOne() {
  return (
    <div className="shadow-xl border-2 rounded-xl flex items-center p-2 gap-8">
      <img style={{ width: "2em", fontSize: "5vmax" }} src={walletCardImg} />
      <div className="flex flex-col gap-6 pr-10">
        <span className="text-[#133d58] font-semibold text-[1.2vmax]">
          NFT Name Goes Here
        </span>
        <span className="text-[#7e7e7e] text-xs">Quantity Goes Here</span>
        <span className="rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] p-2">
          <p className="font-bold text-center">More Detail</p>
        </span>
      </div>
    </div>
  );
}
function WalletCardTwo() {
  return (
    <div className="shadow-xl border-2 flex flex-col rounded-xl items-center px-10 py-2 gap-8">
      <img src={walletCardTwoImg} />
      <div className="flex flex-col gap-6">
        <span className="rounded-2xl bg-[#e3e3e3] hover:bg-[#f0b11b] p-2">
          <p className="font-bold">View More</p>
        </span>
      </div>
    </div>
  );
}
