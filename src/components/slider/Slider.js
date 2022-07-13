import "./slider.css";
import "video-react/dist/video-react.css"; 
import { Player, ControlBar } from "video-react";
import thumnail from "../../assets/vedio-img.png";


function Slider() {
    
    return (
        <div className="slider">
               <Player
               loop={true}
               autoPlay={true}
               muted={false}
               controls={false}
                poster={thumnail}
                src="https://res.cloudinary.com/ecommercewebsite/video/upload/v1653324464/Final_Video_mhhuhn.mp4"
                >
                    <ControlBar disableCompletely={true} />
                 </Player>
        </div>
    )
}

export default Slider;