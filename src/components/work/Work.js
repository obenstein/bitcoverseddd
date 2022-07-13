import "./work.css";
import Experty1 from "../../assets/experty1.png";
import Experty2 from "../../assets/experty2.png";
import Experty3 from "../../assets/experty3.png";

function Work() {
    return (
        <div className="work">
            <div className="container">
                <Experties link={Experty1} text="Bitcoverse"/>
                <Experties link={Experty2} text="Functional OwnerShip"/>
                <Experties link={Experty3} text="Bitcoverse Wallet"/>
            </div>
        </div>
    )
}

function Experties({link, text}) {
    return (
        <div className="experties">
            <div className="top">
                <img src={link} alt="experty"/>
                <h4>{text}</h4>
            </div>
            <ul>
                <li className="text-base">Lorem ipsum is simply dummy text of</li>
                <li className="text-base">Lorem ipsum is simply dummy text of</li>
                <li className="text-base">Lorem ipsum is simply dummy text of</li>
                <li className="text-base">Lorem ipsum is simply dummy text of</li>
            </ul>
        </div>
    )
}

export default Work;