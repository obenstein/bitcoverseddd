import React from "react";
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from "react-router-dom"

function SignUp() {
  function onChange(value) {
    console.log('Captcha value:', value);
  }

  return (
    <div className="container mt-20 mb-20 mx-auto">
      <h1 className="pt-8 pb-3 text-black max-w-xs mx-auto -mb-2 text-2xl font-bold">
        Sign Up & Start Learning
      </h1>

      <div>
        <Input
          type="email"
          placeholder="Full Name"
        />

        <Input
          type="email"
          placeholder="Email"
        />
        <Input
          type="password"
          placeholder="Password"
        />
      </div>
      <div className=" flex items-center justify-center p-2 mt-5 mb-5 max-w-xs mx-auto">
        <input type="checkbox" className="mb-5" /> 
        <p className="pl-2 text-black font-medium text-xs">Send me special offers, personalized recommendations and learning tips</p>
      </div>
      <div className="flex items-center justify-center mx-auto max-w-xs  ">
        <button className="bg-[#143d59] p-3 rounded-lg  text-white w-full text-2xl font-semibold ">
          Sign Up
        </button>
      </div>
      <div className=" flex items-center justify-center mt-2 mb-5 max-w-sm mx-auto"> 
        <p className="text-black font-medium text-[11px] border-b-[2px] border-gray-300 p-5 ">By signing up, you agree to our Terms of Use and Privacy Policy.</p>
      </div>
      <div className=" flex items-center justify-center p-2">
        <p className="text-sm text-black font-bold ">Already have an Account? 
        <Link to="/login">
        <a className="text-[#efb21a] font-bold text-[15px]">&nbsp;&nbsp;Log in</a>
        </Link>
        </p>
      </div>
    </div>
  );
}
function Input({ type, placeholder }) {
  return (
    <div className='mx-auto  max-w-xs p-3 mt-5 border-[2px] border-gray-400'>
      <input type="text" className="placeholder:text-grey text-black placeholder:font-medium font-medium text-base w-full outline-none border-none" placeholder={placeholder} />
    </div>
  )
}

export default SignUp;
