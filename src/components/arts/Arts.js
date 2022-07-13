import "./arts.css";
import Dog2 from "../../assets/dog2.png";
import { useState } from "react";

function Arts() {

    const [count, setCount] = useState(0);

   const text = 
    [
        [
            "Bitcoverse allows content creators to design and monetize their work through Bitcoverse social marketplace",
            "Become a content creator",
            "Become a content"
        ],
        [
            "monetize their work through Bitcoverse social marketplace Bitcoverse allows content creators to design and",
            "content creator Become a",
            "a content Become"
        ],
        [
            "Bitcoverse allows content creators to design and monetize their work through Bitcoverse social marketplace",
            "Become a content creator",
            "Become a content"
        ],
    ]

    return (
        <div className="arts">
            <div className="container">
                <h1>Recent Digital Arts</h1>
                <p className="text-base">Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="second">
                <div className="container">
                    <div className="nav">
                        <div className="links">
                            {
                                
                            }
                            <NavItem count={count} number={0} setState={setCount} />
                            <NavItem count={count} number={1} setState={setCount} />
                            <NavItem count={count} number={2} setState={setCount} />
                        </div>
                        <h5>{text[count][0]}</h5>
                        <ul>
                            <li>{text[count][1]}</li>
                            <li>{text[count][2]}</li>
                        </ul>
                    </div>
                    <img src={Dog2} alt="s"/>
                </div>
            </div>
        </div>
    )
}

function NavItem({setState, number, count}) {

    function Click () {
        setState(number);
    }

    return (
        <div onClick={Click} className="navitem">
            <div className="design">
                <div className="desing-top" style={{visibility: ((count === number) ? "visible" : "hidden")}}>
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <h4 style={{cursor:"pointer"}}>NFT Catagory</h4>
            </div>
        </div>
    )
}

export default Arts;