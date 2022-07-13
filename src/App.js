import "./App.css";
import { useState,useEffect,  createContext } from "react";
import Header from "./components/header/Header";
import {
  Routes,
  BrowserRouter as Browser,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/education/Education";
import ConsultingInvestment from "./components/ConsultingInvestment/ConsultingInvestment";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/login";
import Overview from "./components/overview/overview";
import Founder from "./components/founder/Founder";
import Footer from "./components/footer/Footer";
import Checkout from "./components/CheckoutPage/CheckoutS1/Checkout";
import Detail from "./components/detail/detail";
import NewOverview from "./components/NewOverview/NewOverview";
import DemoPageOne from "./components/DemoTradePages/DemoTradePageOne/DemoPageOne";
import DemoTradeTwo from './components/DemoTradePages/DemoTradePageTwo/demo'
import Dashboard from "./components/Dashboard/Dashboard";
import TradeComponent from "./components/Dashboard/TradeComponent/TradeComponent";
import WalletComponent from "./components/Dashboard/WalletComponent/WalletComponent";
import CommunityComponent from "./components/Dashboard/CommunityComponent/CommunityComponent";
import UserSettingsComponent from "./components/Dashboard/UserSettingsComponent/UserSettingsComponent";
import SideNav from "./components/Dashboard/SideNav/SideNav";
import Modal from "./components/modal/modal";


export const StateContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false);
  const [Dropdown, setDropdown] = useState(false)


  const [DemoDropdown, setDemoDropdown] = useState(false)
  let bucky;
  useEffect(() => {
    const loc = window.location.href;
    const n = loc.lastIndexOf("/");
    bucky = loc.slice(n);
  }, [window.location.href])
  
  
  const [dashToggle, setDashToggle] = useState(window.innerWidth>800?true:false);
  
  return (
    <>
    <StateContext.Provider value={{ dashToggle: dashToggle, setDashToggle: setDashToggle }}>
      <Browser>
      <div className="overflow-hidden relative w-[100vw] h-[100vh]">
        <div style={{transition: "right 0.8s ease"}} className={`absolute z-10 top-0 bottom-0 ${toggle === true? " right-0": "right-[-150%]"}`}>
          <NavBar toggle={toggle} setToggle={setToggle} Dropdown={Dropdown} setDropdown={setDropdown} DemoDropdown={DemoDropdown} setDemoDropdown={setDemoDropdown}/>
        </div>
        <Modal />
      

        <div className="h-full scroll-css overflow-auto">
        <Header toggle={toggle} setToggle={setToggle} Dropdown={Dropdown} setDropdown={setDropdown}/>
        {/* <CryptoTicker/> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companyoverview" element={<Overview />} />
          <Route path="/consultingandinvestment" element={<ConsultingInvestment />} />
          <Route path="/educationcourse" element={<Education />} />
          <Route path="/foundingdetails" element={<Founder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/DemoTradeOne" element={<DemoPageOne />} />
          <Route path="/DemoTradeTwo" element={<DemoTradeTwo />} />

          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashboard/trade" element={<TradeComponent/>} />
          <Route path="/dashboard/wallet" element={<WalletComponent/>} />
          <Route path="/dashboard/community" element={<CommunityComponent/>} />
          <Route path="/dashboard/usersettings" element={<UserSettingsComponent/>} />







        </Routes>
        
        <Footer/>   
        </div>
      </div>
      </Browser> 
      </StateContext.Provider>
    </>
  );
}
function NavBar({ toggle, setToggle,Dropdown,DemoDropdown,setDemoDropdown,setDropdown }) {



  return (
    <div 
      style={{

        cursor:"pointer",
        boxShadow: " 0 0 3px 3px #133d59",
        backgroundColor: "#133d59",
      }}
      className="flex items-left relative font-semibold text-sm p-10 pt-[90px] gap-3 h-full flex-col overflow-auto"  
    >
      <div className={`absolute top-10 left-10 toggler cursor-pointer }`}  onClick={()=> {setToggle(!toggle); setDropdown(false); }}> 
                    {
                        !toggle?<i className="fas fa-bars"></i>:<i className="fas fa-times text-white sm:text-lg text-sm"></i>
                    }
      </div>
      <Link
        className="text-white hover:text-amber-300 sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
        setDemoDropdown(false)


        }}
      >
        Home <br />
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/companyoverview"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
        setDemoDropdown(false)

        }}
      >
        Company Overview
      </Link>
      <button onClick={()=>{
        setDropdown(!Dropdown)
        setDemoDropdown(false)

      }}className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10 text-left flex ">Education <span className={`transition-all translate-x-4 translate-y-3 ${Dropdown? "rotate-90": ""}`}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg></span></button>
      {
        Dropdown?<div className="flex flex-col pl-6"><Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);

        setDropdown(false);

        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Free Education
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
        setDemoDropdown(false)


        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Learn To Earn
      </Link>
      
      </div>:''
      }
     
     
     <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10 "
        to="/consultingandinvestment"
        onClick={() => {
          setToggle(false);

        setDropdown(false);
        setDemoDropdown(false)

 
        }}
      >
        Consulting And Investment
      </Link>
     <div className="flex-1">

     <button onClick={()=>{
        setDemoDropdown(!DemoDropdown)
        setDropdown(false)

      }}className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10 text-left flex ">Demo Trade Exchange <span className={`transition-all translate-x-4 translate-y-3 ${DemoDropdown? "rotate-90": ""}`}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg></span></button>
    {DemoDropdown?<div className="overflow-auto h-[22vh] navbar_inner_scroll">
    {
      
        DemoDropdown?<div className="flex flex-col pl-6"><Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/DemoTradeOne"
        onClick={() => {
          setToggle(false);

        setDemoDropdown(false);

        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Assets
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/DemoTradeTwo"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
        setDemoDropdown(false);


        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Send
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/dashboard"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
        setDemoDropdown(false);


        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Dashboard
      </Link>
      {/* <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
          setDropdown(false);

        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Page Four
      </Link>  */}
      
      {/* <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
          setDropdown(false);

        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Page Five
      </Link>  */}
      {/* <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
          setDropdown(false);

        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Page Six
      </Link>  */}
      {/* <Link
        className="text-white hover:text-[#f2b31b] sm:text-[1.65rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);
        setDropdown(false);
          setDropdown(false);

        }}
      >
          <div className="h-3 w-3 mr-3 rounded-full inline-block bg-[#d4d7d8] "></div>

        Page Seven
      </Link> */}
      
      </div>:''
      }
    </div>:""}
    
     </div>
    
      <div className="flex sm:flex-col flex-col gap-5 justify-center">
        <Link to="/signup">

                        <button onClick={()=>{
                        setToggle(false);

                          setDropdown(false);
                        }} className="bg-white font-semibold  hover:bg-[#f2b31b]  text-black p-3 pr-10 pl-10 rounded-lg text-sm">SignUp</button>
                        </Link>
                        <Link to="/login">

                        <button onClick={()=>{
                        setToggle(false);

                          setDropdown(false);
                        }} className="bg-white font-semibold hover:bg-[#f2b31b] text-black p-3 pr-12 pl-10 rounded-lg text-sm">Login</button>
                        </Link>
                       </div>
     
     
    </div>
  );
}

export default App;
