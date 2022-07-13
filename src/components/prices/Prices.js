import "./prices.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Prices() {
  const [ListOfCoins, setListOfCoins] = useState([]);
  
  const [SlideSHOW, setSlideSHOW] = useState()



  var slidesSHOW=

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (res) => {
        setListOfCoins(res.data.coins);
      }
    );
  }, []);



  const options = {
    nav: false,
    dots: false,
    speed:"1000",
    responsive: {
        0: {
            items: 1,
        },
        400:{
          items:2
        },
        500:{
          items:3,
        },
        940: {
            items: 5,
        },
        1200: {
            items: 7,

        }
    },
};
  return (
    <div className="mt-10 mb-10 bg-[#c4c3c3]">

    <div >

    <OwlCarousel className='owl-theme' loop="true" autoplay="true" autoplayTimeout="1000" pagination="false" autoplayHoverPause="true" {...options} >
    {ListOfCoins.map((coin) => {
          return (
            <div className="flex justify-center items-center p-2 gap-2">
              <img style={{width:"25px"}} src={coin.icon} />
              <span className="text-xs">{coin.name}</span>
              <span className="text-xs">{coin.price.toFixed(2)}</span>
            </div>
          );
        })}
                   
                </OwlCarousel>

    </div>

    </div>

  );
}

export default Prices;
