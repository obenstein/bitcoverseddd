import "./faq.css";

function Faq() {
    return (
        <div className="faq">
            <div className="container">
                <h1>FAQ'S</h1>
                <p className="text-base">Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="bottom">
                    <Box count="1" heading="Lorem ipsum is the dummy textLorem ipsum is "  text="Lorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy text"/>
                    <Box count="2" heading="Lorem ipsum is the dummy textLorem ipsum is "  text="Lorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy text"/>
                    <Box count="3" heading="Lorem ipsum is the dummy textLorem ipsum is "  text="Lorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy text"/>
                    <Box count="4" heading="Lorem ipsum is the dummy textLorem ipsum is "  text="Lorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy text"/>
                    <Box count="5" heading="Lorem ipsum is the dummy textLorem ipsum is "  text="Lorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy text"/>
                    <Box count="6" heading="Lorem ipsum is the dummy textLorem ipsum is "  text="Lorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy textLorem ipsum is simply dummy text"/>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Box({heading, text, count}) {
    return (
        <div class="tabs">
            <div class="tab">
                <input type="checkbox" className="input"  id={`chck${count}`} />
                <label class="tab-label" for={`chck${count}`} >
                    <div className="centeral-touch">
                        <h5>{heading}</h5>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    
                </label>
                <div class="tab-content text-small">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Faq;