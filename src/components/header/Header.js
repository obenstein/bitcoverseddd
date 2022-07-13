import "./header.css";
import HeaderLogo from "../../assets/headerlogo.png";
import { useState,useEffect, useContext } from "react";
import { ethers } from "ethers";
import {Link as Links} from 'react-router-dom'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import SideNav from "../Dashboard/SideNav/SideNav";
import {SocialIcon} from 'react-social-icons'

import { StateContext } from "../../App"



function Header({setToggle, toggle,Dropdown,setDropdown}) {

  const state = useContext(StateContext)
  const [okok, setokok] = useState(false)
  
  const socialMediaHandlesLinks = {
    reddit: 'https://reddit.com',
    instagram: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com'
  }
  

    const [data, setdata] = useState({
        address: "",
        Balance: null,
      });
      let bucky;
          const loc = window.location.href;
          const n = loc.lastIndexOf("/");
          bucky = loc.slice(n);
        

     
      console.log(bucky);

    return (
        <div className="header">
            <div className="top">
                <div className="container">
                <ReactLanguageSelect
                 defaultLanguage="en"
                                 />

                    <div className="links">
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.instagram}/>
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.linkedin}/>
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.reddit}/>
                      <SocialIcon style={{width:"30px" ,height:"30px"}} url={socialMediaHandlesLinks.twitter}/>

                   
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div  className="container flex-row">



                  {/* Dashboard Toggle */}
                  {bucky==='/dashboard' || bucky==='/wallet' || bucky==='/usersettings' || bucky==='/trade' || bucky==='/community'|| bucky==='DemoTradeOne' || bucky==='DemoTradeTwo'?<div  onClick={() => {state.setDashToggle(!state.dashToggle)}}
                  
                  className="HamburgerShow">
                <i className="fas fa-bars"></i>
                </div>:<div className="theHamburgerIconHide">
                <i className="fas fa-bars"></i>
                </div>

}
                {/* ----------------- */}





                    <Links to="/" onClick={()=>{
                          setToggle(false);
                          setDropdown(false);
                          setokok(!okok);
                        }}>
                    <img 
                    className="w-10"
                        src={HeaderLogo} alt="logo" />
                        </Links>
                       <div className="flex gap-5 lg:pl-96 p-0 lg:pt-0 pt-2  lg:pb-0 pb-2 ">

                       </div>


                       {/* The main Toggle */}

                       {
                          bucky==='/companyoverview' || bucky==='/' || bucky==='/consultingandinvestment'|| bucky==='/educationcourse' || bucky==='/DemoTradeOne' || bucky==='/DemoTradeTwo'? <div onClick={()=> {setToggle(!toggle);setDropdown(false); 
                          }} className={`toggler  cursor-pointer ${toggle === true? " sticky top-0": ""}`}> 
                          {
                              !toggle?<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>
                          }  
                          </div>:""
                       }
                   
                    {/* ------------ */}


                </div>
            </div>
        </div>
    )
}

function Link({link}) {
    return (
        <img className="link" src={link} alt="link"/>
    )
}

export default Header;