import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav/SideNav'
import ComponentOne from './ComponentOne/ComponentOne'
import TradeComponent from './TradeComponent/TradeComponent'
import './Dashboard.css'
import { StateContext } from "../../App";
import './Dashboard.css'



function Dashboard() {
  const state = useContext(StateContext)
  console.log(state.dashToggle)
  const [toggle , setToggle] = useState();
  
  return (
    <>
    <div className='grid w-[100vw] overflow-hidden grid-cols-12 sm:max-w-full max-w-7xl xl:gap-10 gap-0 '>
        <div className={`${state.dashToggle?"col-span-2":"col-span-0"}`}>
    <SideNav/>
    </div>
    <ComponentOne setToggle={setToggle} />
    </div>
    </>
  )
}

export default Dashboard 

// function SideNav(){
//     const loc=window.location.href;
//     const n=loc.lastIndexOf('/')
//     console.log(n)
//     let bucky=loc.slice(n)

//     console.log(bucky)
//     return(
//         <div className='bg-[#e0e0e0] h-full pt-20'>
//         <div className='flex flex-col gap-5 xl:p-5 p-0'>
//            <Link to='/dashboard'>
            
//             <div className={bucky==="/dashboard"?'sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]':"flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"}>
//                 <TbLayoutDashboard
//             color='#133d58' style={{width:"40px",height:"35px",backgroundColor:"#f0b11b",borderRadius:"25px",padding:"5px"}}/>
//             <button className='sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs'><p>Dashboard</p>
            
//             </button>
//             </div>

//             </Link>
           
           
           
           
           
//             <Link to='/dashboard/trade'>
//             <div className={bucky==="/trade"?'sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]':"flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"}>
//             <MdAutoGraph
//             color='#133d58' style={{width:"40px",height:"35px",backgroundColor:"#f0b11b",borderRadius:"50%",padding:"5px"}}/>
//             <button className='sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs '><p>Trade</p>
            
//             </button>
//             </div>
//             </Link>
//             <Link to='/dashboard/wallet'>
            
//             <div className={bucky==="/wallet"?'sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]':"flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"}><FaWallet
//             color='#133d58' style={{width:"40px",height:"35px",backgroundColor:"#f0b11b",borderRadius:"25px",padding:"5px"}}/>
//             <button className='sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs '><p>Wallet</p>
            
//             </button>
//             </div>
//             </Link>
//             <Link to='/dashboard/usersettings'>
            
//             <div className={bucky==="/usersettings"?'sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]':"flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"}><RiUserSettingsLine
//             color='#133d58' style={{width:"40px",height:"35px",backgroundColor:"#f0b11b",borderRadius:"25px",padding:"5px"}}/>
//             <button className='sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs '><p>User Settings</p>             
//             </button>
//             </div>
//             </Link>
//             <Link to='/dashboard/community'>
            
//             <div className={bucky==="/community"?'sideTabs flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-[#f0b11b]':"flex justify-start gap-2 items-center xl:px-2 px-0 xl:py-2 py-0 rounded-full bg-white hover:bg-[#f0b11b]"}><AiTwotoneMessage
//             color='#133d58' style={{width:"40px",height:"35px",backgroundColor:"#f0b11b",borderRadius:"25px",padding:"5px"}}/>
//             <button className='sidenavBtn bg-transparent text-[#133d58] font-bold md:text-base text-xs '><p>Community</p>
            
//             </button>
//             </div>
//             </Link>
//         </div>
//         </div>
//     )
// }
