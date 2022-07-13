import React,{useContext} from 'react'
import SideNav from '../SideNav/SideNav'
import userProfileIcon from '../../../assets/userProfileIcon.png'
import { StateContext } from "../../../App";

function UserSettingsComponent() {
  const state = useContext(StateContext)
  return (
    <div className="grid grid-cols-12 sm:max-w-full max-w-7xl xl:gap-10 gap-0">
       <div className={`${state.dashToggle?"col-span-2":"col-span-0"}`}>
        <SideNav />
      </div>
      {/* Here Comes The Container */}
      <div className='col-span-9 mb-10'>
      <UserSettingsContainer/>

    </div>
    </div>
  )
}

export default UserSettingsComponent
function UserSettingsContainer(){
    return(
        <>
    <div className="grid lg:grid-cols-6 flex-wrap gap-10 pb-10 pt-20">
    <div className="col-span-4 p-4">

        <TopBar/>
        <ChangeUsername/>
        <ChangeEmail/>
        </div>
        <div className="col-span-2 p-4">

        <ProfileCard/>
        <ChangePasswordCard/>
        </div>
        </div>
        </>
    )
}
function TopBar(){
    return(
        <div className=''>
           <h1 className="text-[40px] font-bold text-[#133d58]">
            User Settings
          </h1>
          <span className='text-xs text-[#7e7e7e]'>Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum </span>
        </div> 
    )
}
function ChangeUsername(){
    return(
        <div className='border-2 p-4 rounded-lg shadow-xl my-10'> 
            <span className="text-[25px] font-bold text-[#133d58]">Change Username</span>
            <div className='flex items-center justify-between gap-4 py-10'>
                <input className='border-2 pl-2 w-full py-1 rounded-full' placeholder='Micheal James'/>
                <span className="rounded-2xl bg-[#f0b11b] px-5 py-2">
          <p className="font-bold">Confirm</p>
        </span>
            </div>
        </div>
    )
}
function ChangeEmail(){
    return(
        <div className='border-2 p-4 rounded-lg shadow-xl'> 
        <span className="text-[25px] font-bold text-[#133d58]">Change Email Address Or Phone Number</span>
        <div className='flex items-center justify-between gap-4 py-10'>
            <input className='border-2 pl-2 w-full py-1 rounded-full' placeholder='Your old email or phone number'/>
            <span className="rounded-2xl bg-[#f0b11b] px-5 py-2">
      <p className="font-bold">Confirm</p>
    </span>
        </div>
    </div>
    )
}
function ProfileCard(){
    return(
        <div className='border-2 p-4 rounded-lg shadow-xl flex flex-col items-center justify-center gap-8 pb-14'>
             <span className="text-[25px] font-bold text-[#133d58]">Profile Picture</span>
             <img style={{width:"100px"}} src={userProfileIcon}/>
             <div className='flex items-center justify-center gap-2'>
             <span className="rounded-2xl bg-[#f0b11b] px-5 py-2">
      <p className="font-bold">Change Photo</p>
    </span>  <span className="rounded-2xl bg-[#e3e3e3] px-5 py-2">
      <p className="font-bold">Remove</p>
    </span>
             </div>
        </div>
    )
}
function ChangePasswordCard(){
    return(
        <div className='border-2 p-4 rounded-lg shadow-xl flex flex-col items-center justify-center gap-8 pb-5 mt-10'>
             <span className="text-[25px] font-bold text-[#133d58]">Change Password</span>
             <div className='flex flex-col items-center justify-center gap-2'>
             <span className="rounded-2xl bg-[#f0b11b] px-5 py-2">
      <p className="font-bold">Current Password Change</p>
    </span>  <span className="rounded-2xl bg-[#e3e3e3] px-5 py-2">
      <p className="font-bold">Forgot Password?</p>
    </span>
             </div>
        </div>
    )
}