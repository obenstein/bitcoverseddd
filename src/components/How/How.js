import "./how.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import React, {useState} from 'react';
import Slider from "react-slick";

function How() {

    var settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1
            }
          }
        ]
        }
    
    const [stateCount, setStateCount] = useState(1);

    return (
        <div className="how">
            
                <h1 className="main-heading">HOW WE WORK</h1>
            
            <div className="container">
                <Slider {...settings}  >
                    <Item count="01" sCount={1} state={stateCount} setState={setStateCount}  />
                    <Item count="02" sCount={2} state={stateCount} setState={setStateCount} />
                    <Item count="03" sCount={3} state={stateCount} setState={setStateCount} />
                    <Item count="04" sCount={4} state={stateCount} setState={setStateCount} />
                    <Item count="05" sCount={5} state={stateCount} setState={setStateCount} />
                    <Item count="06" sCount={6} state={stateCount} setState={setStateCount} />
                    <Item count="07" sCount={7} state={stateCount} setState={setStateCount} />
                    <Item count="08" sCount={8} state={stateCount} setState={setStateCount} />
                </Slider>
            </div>
        </div>
    )
}

function Item({count, sCount, state, setState}) {
    return (
        <div className="item item-container">
            <p className="heading text-[#133d59]">lorem ipsum dolor site</p>
            <p className="text-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type specimen book.</p>
            <div className={`text-image ${(sCount === state) ? "text-image-hover-active": "" }`} onMouseOver={() => {setState(sCount)}} >
                <h1>{count}</h1>
            </div>
        </div>
    )
}

export default How;