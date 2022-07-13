import "./choseUs.css";
import img3 from "../../assets/smart.png";
import img2 from "../../assets/smart2.png";
import img1 from "../../assets/smart3.png";

function ChoseUs() {
    return (
        <div className="chose-us">
            <div className="container">
                <div className="top">
                    <h1>Why Choose Us</h1>
                    <p className="text-base text-[#7e7e7e]">Lorem Ipsum is simply dummy text of the printing typesetting industry. & Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="bottom">
                    <Reason link={img1} text="Our Vision"/>
                    <Reason link={img2} text="Our Mission"/>
                    <Reason link={img3} text="Our Execution"/>
                </div>
            </div>
        </div>
    )
}

function Reason({link, text}) {
    return (
        <div className="reason mb-[30px]">
            <img src={link} alt="reson"/>
            <h3 className="font-[500]">{text}</h3>
            <p className="text-base text-[#7e7e7e]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book.</p>
        </div>
    )
}

export default ChoseUs;