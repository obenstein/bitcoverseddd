import "./feature.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ic1 from "../../assets/ic1.png";
import ic2 from "../../assets/ic2.png";
import ic3 from "../../assets/ic3.png";
import ic4 from "../../assets/ic4.png";

function Feature() {
    const options = {
        nav: true,
        navText:["<div class='left-img'></div>","<div class='right-img'></div>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            940: {
                items: 2,
            },
            1200: {
                items: 3,
    
            }
        },
    };

    return (
        <div className="feature">
            <div className="container">
                <div className="top">
                    <h1>Feature</h1>
                    <p className="text-base">Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="bottom container">
                <OwlCarousel className='owl-theme' items="3" loop="true" autoplay="true" autoplayTimeout="2000" pagination="false" autoplayHoverPause="true" {...options} >
                    <Item link={ic1} />
                    <Item link={ic2} />
                    <Item link={ic3} />
                    <Item link={ic4} />
                </OwlCarousel>
            </div>
        </div>
    )
}

function Item({link}) {
    return (
        <div className="item item-container">
            <div className="image">
                <div className="inner">
                    <img src={link} alt="l"/>
                </div>
            </div>
            <h3>BlockChain</h3>
            <p className="text-small">Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's.</p>
        </div>
    )
}

export default Feature;