import React from 'react'
import image from "../../assets/Group 2.png"
import WollateLogo from "../../assets/walletLogo.png"
import './Detail.css'

function Detail() {
  return (
    <div className="container mt-20 mb-20 flex gap-5 lg:flex-row flex-col mx-auto">
        <div className='lg:w-[75%]'>
        <div className='flex'>
            <img className='w-20' src={WollateLogo} alt="mobile" />
            <h1 className='flex justify-center items-center text-3xl font-bold tracking-wide font-[Poppins] text-sky-900'>BITCOVERSE eWallet</h1>
        </div>
        <h1 className=' text-2xl font-semibold font-[Poppins] tracking-wide mt-7 md:text-3xl'>Download the official BITCOVERSE mobile wallet with a first of it's kind Community Messenger option. Coming Soon!</h1>
        <button className='theAppImg text-black mt-10 border-0 outline-0 p-2 rounded-2xl font-bold bg-[#f2b31b]'>Download Now</button>
        </div>
        <img className='lg:w-1/2 theAppImg' src={image} alt="mobile" />
    </div>
  )
}

export default Detail