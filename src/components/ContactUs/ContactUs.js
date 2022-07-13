import React from "react";
import MapImg from "../../assets/gmap.png";
function ContactUs() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-red- text-center text-[#143d59] bg-red-100 text-6xl font-bold">
        <span className="text-[#efb21a]">Contact</span> Us
      </div>
      <div
        className="max-w-xl mx-auto mt-20 mb-20 p-10"
        style={{ boxShadow: "0px 0px 10px 5px lightgray" }}
      >
        <h1 className="text-[#efb21a] font-bold mb-8 text-xl">Get In Touch</h1>
        <div className=" lg:w-[150%] flex lg:flex-nowrap flex-wrap justify-center items-center">
          <div className="flex-grow lg:mt-0 mt-5 ">
            <h1 className="text-3xl font-bold text-[#143d59] mb-6 ">Contact Us</h1>
            <p className="mb-6">
              Lorem ispsum is my dummy text Lorem ispsum is my dummy text Lorem
              ispsum is my dummy text{" "}
            </p>
            <form className="flex items-center justify-center flex-wrap">
              <input
                placeholder="Enter your name"
                className="border-[1px] border-slate-700 rounded-2xl md:w-auto w-[100%] pl-4 p-1 m-1"
                type="text"
                name="name"
              />
              <input
                placeholder="Your Email Address"
                className="border-[1px] border-slate-700 rounded-2xl  pl-4 p-1 m-1 md:w-auto w-[100%]"
                type="text"
                name="name"
              />
              <input
                placeholder="Your Phone Number"
                className="border-[1px] border-slate-700 rounded-2xl  pl-4 p-1 m-1 md:w-auto w-[100%]"
                type="text"
                name="name"
              />
              <input
                placeholder="Write Your Subject"
                className="border-[1px] border-slate-700 rounded-2xl  pl-4 p-1 m-1 md:w-auto w-[100%]"
                type="text"
                name="name"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="border-[1px] border-slate-700 rounded-2xl  pl-4 m-1 w-[100%]"
                type="text"
                name="name"
              ></textarea>
              <button className="bg-[#143d59] p-2 mt-2 mb-2 text-white     w-[100%] rounded-2xl">
                Send A Message
              </button>
            </form>
          </div>

          <div className="p-10 max-w-xs">
            <img src={MapImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
