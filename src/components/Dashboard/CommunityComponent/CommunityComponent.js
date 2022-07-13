import React,{useContext} from 'react'
import './CommunityComponent.css'
import SideNav from '../SideNav/SideNav'
import userProfile from '../../../assets/userProfile.png'
import { StateContext } from "../../../App";
function CommunityComponent() {
    const state = useContext(StateContext)
  return (
    <div className="grid grid-cols-12 sm:max-w-full max-w-7xl xl:gap-10 gap-0">
     <div className={`${state.dashToggle?"col-span-2":"col-span-0"}`}>
      <SideNav />
    </div>
    <div className='col-span-9 mb-10'>
    <ComminutyContainer/>
    </div>
  </div>
  )
}

export default CommunityComponent
function ComminutyContainer(){
    return(
        <>
        <TopBar/>
        <SectionTwo/>
        <CommunityRows/>
        <CommunityRows/>
        <CommunityRows/>
        <CommunityRows/>
        <CommunityRows/>
        <CommunityRows/>
        <CommunityRows/>



        </>
    )
}
function TopBar(){
    return(
        <div>
           <h1 className="text-[40px] font-bold text-[#133d58] pt-20">
            Communication
          </h1>
        </div> 
    )
}
function SectionTwo(){
    return(
        <div className='flex items-center justify-between p-10 font-semibold'>
            <span>People</span>
            <span>Chat</span>
            <span>Active</span>

        </div>
    )
}
function CommunityRows(){
    return(
        <div className='p-2 border-2 rounded-xl flex items-center justify-between mb-2'>
            <div className='flex items-center gap-4'>
            <img src={userProfile}/>
            <div className='flex flex-col'>
                <span className='text-[#133d58] text-[1.2vmax] font-bold'>User Name Goes Here</span>
                <span className='text-xs text-[#7e7e7e]'>Lorem Ipsum Dummy Text Is My Passion</span>

            </div>
            </div>
            <span className='text-[#7e7e7e]'> 11.04 P.M</span>
        </div>
    )
}