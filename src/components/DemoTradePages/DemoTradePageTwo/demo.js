import React from "react";
import img from "../../../assets/bit.png";
import img2 from '../../../assets/bit2.png'

function Demo() {
  return (
    <div className="mt-20 mb-20 container max-w-lg mx-auto">
      <h3 className="text-base font-medium text-black mb-2">From</h3>
      <div className="border-2 border-gray-300 flex justify-end px-2 py-2">
        <input
          className="flex-grow px-2 w-[20%]"
          placeholder="0.000000000"
          type="number"
        />
        <div className="flex items-center">
          <span className="text-purple-700 text-sm font-medium px-2">Max</span>
          <span className="h-3 w-1 border-gray-500 border-l-[1px]"></span>
          <span className="flex ml-2 items-center">
            <img src={img} alt="a" className="w-4" />
            <span className="font-bold text-black text-sm pr-2">BTC</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between text-black text-sm font-medium py-2">
        <p>Avaliable 0.00000000 BTC</p>
        <p>Deposit</p>
      </div>
      <p className="text-sm font-normal text-gray-400 flex gap-2 items-center opacity-40">
        <div className="w-2 h-2 bg-red-400"></div>
        Funding Account 0.0000000 BTC
      </p>
      <p className="text-sm font-normal text-gray-400 flex gap-2 items-center opacity-40">
        <div className="w-2 h-2 bg-red-400"></div>
        Funding Account 0.0000000 BTC
      </p>
      <h3 className="text-base font-medium mt-20 text-black mb-2">To</h3>
      <div className="border-2 border-gray-300 flex justify-end px-2 py-2">
        <input
          className="flex-grow px-2 w-[20%]"
          placeholder="0.000000000"
          type="number"
        />
        <div className="flex items-center">
          <span className="flex ml-2 items-center">
            <img src={img2} alt="a" className="w-6" />
            <span className="font-bold text-black text-sm pr-2 pl-1">USSD</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>
      <p className="text-sm font-normal mt-2 text-gray-400 flex gap-2 items-center opacity-40">
        Estimated: USDT = 0.00005169 BTC
      </p>
      <button className="font-semibold text-center p-2 text-lg text-white bg-black w-full mt-5">Convert to USDT</button>
      <p className="text-center text-black text-sm font-medium mt-5">Enter conversation amount</p>
    </div>
  );
}

export default Demo;
