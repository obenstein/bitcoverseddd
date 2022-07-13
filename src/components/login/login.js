import React from 'react'
import { Link } from 'react-router-dom';
import Img1 from "../../assets/icon1.png";
import Img2 from "../../assets/icon2.png";
import Img3 from "../../assets/icon3.png";


function Login() {
  return (
    <div className='container max-w-xs mt-20 mb-20 mx-auto'>
         <h1 className="pt-8 pb-3 text-black max-w-xs mx-auto -mb-2 text-2xl font-bold">
        Login to your account
      </h1>
        <div className='flex sm:flex-row flex-col justify-between mt-3 mb-3 items-center gap-2'>
          <h1 className='text-black font-bold text-sm'>Continue with Social Media : </h1>
          <div className='flex gap-2'>
            <img className='w-7' src={Img1} alt=""/>
            <img className='w-7' src={Img2} alt=""/>
            <img className='w-7' src={Img3} alt=""/>
          </div>
        </div>
        <Input
        type="email"
        placeholder="Email"
        />
        <Input 
        type="password"
        placeholder="Password"
        />
        <div className="flex items-center mt-5 justify-center mx-auto max-w-xs  ">
        <button className="bg-[#143d59] p-3 rounded-lg text-white w-full text-2xl font-semibold ">
          Log In
        </button>
      </div>
        <div className='mx-auto mt-5 mb-10'>
          <div className='text[#143d59] text-xs font-bold flex sm:flex-row flex-col  items-center justify-between'>
            <span className='text-[#143d59]  cursor-pointer'>
              Forgot Password?
            </span>
            <Link to="/signup">
            <span className='text-[#efb21a] cursor-pointer'>
              Sign Up Now
            </span>
            </Link>
          </div>
        </div>
    </div>
  )
}

function Input({type, placeholder}){
  return (
    <div className='mx-auto  max-w-xs p-5 mt-5 border-[2px] border-gray-400'>
    <input type="text" className="placeholder:text-grey text-black placeholder:font-medium font-medium text-base w-full outline-none border-none" placeholder={placeholder} />
  </div>
  )
}

export default Login