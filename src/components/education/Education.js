import React from "react";
import image from "../../assets/Layer 642.png";
import ReactStars from "react-rating-stars-component";

function Education() {
  return (
    <div>
      <div className="pt-16 pb-16 mb-8 bg-red- text-center text-[#133D59] text-6xl font-bold">
        Learn <span className="text-[#f2b31b]">And</span> Earn
      </div>
      <div className="container  mx-auto flex gap-10 flex-wrap items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


      </div>
    </div>
  );
}

function Card() {
  const firstExample = {
    size: 15,
    value: 5,
    edit: false,
  };
  return (
    <div className="w-64 overflow-hidden rounded-xl drop-shadow-2xl mb-4">
      <img src={image} alt="" />
      <div>
        <h1 className="text-black text-[25px] font-bold mt-4 mb-4">
          lorem upsum is the dumm?
        </h1>
        <p className="text-[14px] text-[#7e7e7e] font-[400]">
          Lorme ipsum is the dummy text
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold text-xs text-zinc-900">4.3 </span>
          <span className="font-bold text-xs text-zinc-500">(2,282) </span>
          <span className="font-bold text-xs text-zinc-900">
            <ReactStars {...firstExample}  color='#fffff'/>
          </span>
        </div>
        <div className="mt-2 mb-2 flex items-center justify-between">
          <span className="bg-[#f2b31b] p-1 rounded-md text-xs text-zinc-700 font-bold">
            $120
          </span>
          <span className="bg-gray-800 p-1 rounded-md px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
