import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top">
                    <FooterItem link="fas fa-map-marker-alt" text1="54B, Lipsum Road 5238" text2="MT, La city, IA 522364" />
                    <FooterItem link="fas fa-phone-alt" text1="Call Us At:" text2="123-456-789-0000" bold="bold" />
                    <FooterItem link="fas fa-envelope" text1="Email Us At:" text2="info@company.com" bold="bold" />
                </div>
            </div>
            <div className="rights">@ Copyrights 2022 All Rights Reserved</div>
        </div>
    )
}

function FooterItem({text1, text2, link, bold}) {
    return (
        <div className="footeritem">
            <div className="circle">
                <i className={link}></i>
            </div>
            <div className="text">
                <p className={bold}>{text1}</p>
                <p className="small">{text2}</p>
            </div>
        </div>
    )
}

export default Footer;