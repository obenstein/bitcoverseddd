import React from 'react'
import './ComponentOne.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineSearch,AiFillStar} from 'react-icons/ai'
import {MdKeyboardArrowRight,MdAutoGraph} from 'react-icons/md'
import {CgScrollV} from 'react-icons/cg'
import {TbArrowsRightLeft} from 'react-icons/tb'

import ChartImg from '../../../assets/theChart.png'




function ComponentOne({setToggle}) {
    const [DashToggler, setDashToggler] = useState(false)
   
  return (
    <div className='col-span-10 pt-20 xl:max-w-full max-w-6xl'> 

        <div  className='flex md:gap-64 md:flex-row flex-col items-center'>
            <div>
            <h1 className='text-[40px] font-bold text-[#133d58]'>BTC/USDT</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-2'>
                <Link className='DashboardLiks' to=''>
            
            <div className='tab flex justify-start gap-2 items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]'>
            <button className='bg-transparent text-[#133d58] font-bold md:text-base text-xs '>Deposit
            
            </button>
            </div>

            </Link>
            <Link className='DashboardLiks' to=''>
            
            <div className='tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]'>
            <button className='bg-transparent text-[#133d58] font-bold md:text-base text-xs '>Withdraw
            
            </button>
            </div>

            </Link>
            <Link className='DashboardLiks' to=''>
            
            <div className='tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]'>
            <button className='bg-transparent text-[#133d58] font-bold md:text-base text-xs '>Send
            
            </button>
            </div>

            </Link>
            <Link className='DashboardLiks' to=''>
            
            <div className='tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]'>
            <button className='bg-transparent text-[#133d58] font-bold md:text-base text-xs '>Transfer
            
            </button>
            </div>

            </Link>
            <Link className='DashboardLiks' to=''>
            
            <div className='tab flex justify-start gap-2     items-center px-5 py-2 rounded-full bg-[#e1e1e1] hover:bg-[#f0b11b]'>
            <button className='bg-transparent text-[#133d58] font-bold md:text-base text-xs '>Transaction History
            
            </button>
            </div>

            </Link>
            
            </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-12 pt-10 sm:pl-0 pl-10'>
            <div className='flex sm:flex-row flex-col sm:items-center items-start'><h2 className='text-lg text-[#133d58] font-bold'>Time &nbsp;</h2> <span className='text-sm text-[#3d3d3d] '>15Mint &nbsp;1Hour &nbsp;4Hours &nbsp;1Day &nbsp;1Week </span></div>

            
            <div className='flex sm:flex-row flex-col sm:items-center items-start'><h2 className='text-lg text-[#133d58] font-bold'>1Month &nbsp;</h2> <span className='text-sm text-[#3d3d3d] '>1Year </span></div>

            <div className='flex sm:flex-row flex-col sm:items-center items-start'><h2 className='text-base text-[#133d58] font-bold'>Original &nbsp;</h2> <span className='text-sm text-[#3d3d3d] '>Trading View &nbsp;Depth  </span></div>

        </div>
        {/* <div className='grid xl:grid-cols-6 flex-wrap text-center gap-10 py-16 pr-16 '>
        <TheChart />
        <RightContainer/>
        </div> */}
        <div className='dashboard_main py-5 '>
        <TheChart />
        <RightContainer/>
        </div>
    </div>
  )
}

export default ComponentOne

function TheChart(){
    return(
        <div className='leftimage_container'>
            <img className="w-[78%] inline" src={ChartImg}/>
      </div>
    )
}
function RightContainer(){
    return(
        <div  className='rightcard_container border-2 md:p-4 p-1 rounded-xl shadow-xl mb-10' >
            <div className='flex items-center '>
                <span className='flex items-center justify-between gap-10 bg-[#e3e3e3] rounded-full pl-5 pr-1 w-full'>
                <input placeholder='Search Here' className='border-2 rounded-full bg-[#e3e3e3] py-1 focus:outline-none' type='text'
                /><AiOutlineSearch color='#133d58' style={{width:"30px",height:"30px",backgroundColor:"#f0b11b",borderRadius:"25px",padding:"5px"}}/></span>

            </div>
            <div className='pt-6 flex items-center justify-center gap-3'>
                <AiFillStar color="#f0b11b" style={{width:"25px",height:"25px"}}/>
                <span className='text-sm text-[#3d3d3d]'> Margin  </span>
                <span className='text-sm text-[#3d3d3d]'>BUSD </span>
                <span className='text-sm text-[#3d3d3d]'>USDT </span>
                <span className='text-sm text-[#3d3d3d]'>BNB </span>
                <span className='text-sm text-[#3d3d3d]'>BTC </span>
                <span className='text-sm text-[#3d3d3d]'>ALTS </span>
                <MdKeyboardArrowRight  color="#f0b11b" style={{width:"25px",height:"25px"}}/>

            </div>
                <div className='flex items-center justify-between pt-5 mb-10'>
                    <span className='flex items-center justify-center'><h2 className='text-[#133d58] font-semibold text-lg'>Pair </h2> <CgScrollV style={{width:"20px",height:"20px"}}color="#f0b11b"/></span>
                    <span className='flex items-center justify-center'><h2 className='text-[#133d58] font-semibold text-lg'>Price </h2> <CgScrollV style={{width:"20px",height:"20px"}}color="#f0b11b"/></span>
                    <span className='flex items-center justify-center'><h2 className='text-[#133d58] font-semibold text-lg'>Change </h2> <CgScrollV style={{width:"20px",height:"20px"}}color="#f0b11b"/> <TbArrowsRightLeft/></span>

                </div>
                <div>
                <div className='text-[0.9vmax] text-[#878787]    border-t-2 py-4'>
                    
                    <div className='flex items-center gap-9 '>
                    <p className='flex items-center'><AiFillStar color="#f0b11b" style={{width:"20px",height:"20px"}}/>1INCH/BTC</p> <p>0.000003179</p> <p className='  text-red-900 font-bold'>+1.79%</p>
                    </div>

                    </div>
                    <div className='text-[0.9vmax] text-[#878787]    border-t-2 py-4'>
                    
                    <div className='flex items-center gap-9 '>
                    <p className='flex items-center'><AiFillStar color="#f0b11b" style={{width:"20px",height:"20px"}}/>1INCH/BTC</p> <p>0.000003179</p> <p className='  text-green-900 font-bold'>+1.79%</p>
                    </div>
                    
                    </div>
                    <div className='text-[0.9vmax] text-[#878787]    border-t-2 py-4'>
                    
                    <div className='flex items-center gap-9 '>
                    <p className='flex items-center'><AiFillStar color="#f0b11b" style={{width:"20px",height:"20px"}}/>1INCH/BTC</p> <p>0.000003179</p> <p className='  text-red-900 font-bold'>+1.79%</p>
                    </div>
                    
                    </div>
                    <div className='text-[0.9vmax] text-[#878787]    border-t-2 py-4'>
                    
                    <div className='flex items-center gap-9 '>
                    <p className='flex items-center'><AiFillStar color="#f0b11b" style={{width:"20px",height:"20px"}}/>1INCH/BTC</p> <p>0.000003179</p> <p className='  text-green-900 font-bold'>+1.79%</p>
                    </div>
                    
                    </div>
                    <div className='text-[0.9vmax] text-[#878787]    border-t-2 py-4'>
                    
                    <div className='flex items-center gap-9 '>
                    <p className='flex items-center'><AiFillStar color="#f0b11b" style={{width:"20px",height:"20px"}}/>1INCH/BTC</p> <p>0.000003179</p> <p className='  text-red-900 font-bold'>+1.79%</p>
                    </div>
                    
                    </div>
                    <div className='text-[0.9vmax] text-[#878787]    border-t-2 py-4'>
                    
                    <div className='flex items-center gap-9 '>
                    <p className='flex items-center'><AiFillStar color="#f0b11b" style={{width:"20px",height:"20px"}}/>1INCH/BTC</p> <p>0.000003179</p> <p className=' text-green-900 font-bold'>+1.79%</p>
                    </div>
                    
                    </div>
                </div>
        </div>
    )
}