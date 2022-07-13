import "./token.css";
import cart from "../../assets/cart.png";

function Token() {
    return (
        <div className="token">
            <div className="container">
                <h1>TOKEN ECONOMICS</h1>
                <div className="bottom">
                    <img src={cart} alt="missing"/>
                    <div className="discription">
                        <p><span>Chain:</span>&nbsp;BSCS-BEP20</p>
                        <p><span>NAME:</span>&nbsp;Bitcoverse</p>
                        <p><span>Symbol:</span>&nbsp;BD</p>
                        <p><span>Presal Purchase Methods:</span>&nbsp;BTC,ETH,BNB</p>
                        <button className="buynftBtn">Buy NFTs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token;