import React from 'react'
import { useState } from 'react'
import BtcIcon from '../../../assets/btcICON.png'
import {SocialIcon} from 'react-social-icons'

import './DemoPageOne.css'
function DemoPageOne() {
   

  return (
    <div>
  <SectionOne/>
  <SectionTwo/>
  <SectionThree/>
  <SectionFour/>
  <SectionFive/>
  </div>
  )
}
function SectionOne(){
    const [isActive, setisActive] = useState(true);
    const [isDisabled, setisDisabled] = useState(false);


    function onBtnClick(){
        setisActive(true);
        setisDisabled(false);
    }
    function onSecondBtnClick(){
        setisActive(false);
        setisDisabled(true);
    }
    return(
        <div className='container mx-auto flex sm:flex-row flex-col justify-between items-center pt-[7rem] pb-[7rem] '>

    <h3>Total Asset Value</h3>
    <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
        <p className='text-[#021aff] text-lg font-bold'>View Full Analysis</p>
        <div className='flex gap-1'>
        
        <button onClick={()=>{
            onBtnClick();
        }} className={isActive?'theActiveBtn':"theBtn"}>Last 7 Days</button>
        <button onClick={()=>{
            onSecondBtnClick()

        }} className={isDisabled?'theActiveBtn':"theBtn"}>Last 30 Days</button>
        
        </div>
    </div>


    </div>
    )
}

function SectionTwo(){
    return(
        <div className='flex flex-col items-center justify-center text-center pt-[5rem] pb-[15rem]'>
            <h1 className='font-bold text-xl'>No Assets Found</h1>
            <p className='font-bold text-sm'>Deposits/purchases made today will be shown on the following day</p>
        </div>
    )
}
function SectionThree(){
    const [isActive, setisActive] = useState(true);
    const [isDisabled, setisDisabled] = useState(false);
    function onBtnClick(){
        setisActive(true);
        setisDisabled(false);
    }
    function onSecondBtnClick(){
        setisActive(false);
        setisDisabled(true);
    }
    return(
        <div className='container mx-auto'>
            <div className='flex justify-start items-center'>
            <div className='w-[80px] overflow-hidden  flex flex-col BtnDiv'>
            <button onClick={()=>{
            onBtnClick();
        }} className={isActive?'favBtnDisable':" favBtnActive"}>Favourites</button>
                <div className={ isActive?"underlineDiv bg-black w-[80px] ml-[100px] inline-block h-[2px]   transition-all duration-500":"bg-black w-[80px] ml-[100px] inline-block h-[2px]   transition-all duration-500" }></div>
            </div>
            <div className='w-[60px] overflow-hidden  flex flex-col BtnDiv'>
            <button onClick={()=>{
            onSecondBtnClick()

        }} className={isDisabled?'favBtnDisable':"favBtnActive"}>Assets</button>
                <div className={isDisabled?" underlineDiv bg-black w-[60px] ml-[100px] inline-block h-[2px] transition-all duration-500":"bg-black w-[60px] ml-[100px] inline-block h-[2px]  transition-all duration-500" }></div>
            </div>
            </div>
            <div className='flex sm:flex-row flex-col justify-center items-center gap-10 md:text-xl text-xs pt-10 text-[#b6b4b5]'>
                <span>Crypto</span>
                <span>Last Price</span>
                <span>Today's Exchange</span>
                <span>Chart</span>
                <span>Action</span>
            </div>
            <div className='flex flex-col justify-center items-center pt-52 pb-52'>
                <img src={BtcIcon}/>
                <p className='text-[#b6b4b5]'>Add Your Favourites On The Market Page</p>
                <button className='mt-5 pt-3 pb-3 pr-6 pl-6 border-2 rounded-md bg-[#f0f0f0]' >Add 5 Popular Cryptocurrencies</button>
            </div>
        </div>
    )
}
function SectionFour(){
    const socialMediaHandlesLinks = {
        twitter: 'https://twitter.com',
        whatsapp:'https://www.whatsapp.com/',
        facebook:'https://www.facebook.com/'

      }
    return(
        <div className='container mx-auto pb-40'>
            <h1 className='font-extrabold text-xl'>Get Mystery Boxes up to $2,000 now</h1>
            <p className='text-xs'>Invite friends to bitcovers and share rewards with them! <span className='text-blue-700'>Learn More</span></p>
            <div className='flex sm:flex-row flex-col justify-start items-center gap-2 pt-2'>
            <input className='border-2 pr-10 pl-2' type="text"/>
            <div className='flex gap-2'>
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.whatsapp}/>
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.facebook}/>
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.twitter}/>
            </div>
            </div>
        </div>
    )
}
function SectionFive(){
    return(
        <div className='container mx-auto flex sm:flex-row flex-col justify-center items-center gap-5 pb-56 mb-10'>
            <div className='bg-[#f2f1f1] text-left sm:w-[50%] p-8'>
                <div className='flex justify-between items-center'>
                <h1 className='font-extrabold text-lg font-sans'>Announcement </h1><span className='text-blue-700 font-semibold'>More</span>
                </div>
                <p className='text-sm py-1'>Coin margin position tiers to be adjusted</p>
                <p className='text-sm py-1'>06/27/2022</p>
                <p className='text-sm py-1'>Coin margin position tiers to be adjusted</p>
                <p className='text-sm py-1'>06/27/2022</p>  
                <p className='text-sm py-1'>Coin margin position tiers to be adjusted</p>
                <p className='text-sm py-1'>06/27/2022</p>  
                <p className='text-sm py-1'>Coin margin position tiers to be adjusted</p>
                <p className='text-sm py-1'>06/27/2022</p>
            </div>

            <div className='bg-[#f2f1f1] text-left sm:w-[50%] p-8 self-stretch'>
                <div className='flex justify-between items-center'>
                <h1 className='font-extrabold text-lg font-sans'>Recent Transactions </h1><span className='text-blue-700 font-semibold'>More</span>
                </div>
               
            </div>
        </div>
    )
}
export default DemoPageOne