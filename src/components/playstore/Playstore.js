import React from 'react';
import { AiOutlineApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
// import Phone from "../../assets/iphone.png";
import WalletLogo from '../../assets/walletLogo.png'



const Playstore = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center bg-pink-100 p-4'>
            <h1 className='md:text-4xl lg:text-4xl text-xl font-bold font-[Poppins] my-8 text-center'>
                Download the official BITCOVERSE mobile wallet with a first of it's kind Community Messenger option. Coming Soon!
            </h1>
            <div className='flex justify-content items-center'>
                <img width="70px"  src={WalletLogo}/>
                {/* <button className='bg-black p-3 text-white rounded border-2 border-green-500 hover:border-blue-500 my-2 mr-2 flex gap-1'>
                    <FaGooglePlay className='text-xl'/> <p className='font-bold'>Play Store</p>
                </button>
                <button className='bg-black p-3 text-white rounded border-2 border-green-500 hover:border-blue-500 my-2 ml-2 flex'>
                    <AiOutlineApple className='text-xl'/> <p className='font-bold'>App Store</p>
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default Playstore