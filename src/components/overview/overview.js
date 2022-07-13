import React, { useRef, useState } from "react";
import Founder from "../founder/Founder";
import Dog from "../../assets/dog.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import img from "../../assets/bit.png";
import FounderBanner from "../../assets/Founders.png";
import Prices from "../prices/Prices";
import lastcomp from "../../assets/last.png";
import lastcomp2 from "../../assets/last2.png";
import './Overview.css'
import lastSection from '../../assets/LastSection.png'

import Slider from "react-slick";

function Overview() {
  let skip = <br />;
  var settings1 = {
    navigator: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [tab, setTab] = useState(0);
  const sliderRef = useRef(null);
  const navigationData = [
    {
      index: 0,
      text: "Overview",
    },
    {
      index: 1,
      text: "Background",
    },
    {
      index: 2,
      text: "Founder",
    },
    {
      index: 3,
      text: "Advantages",
    },
    {
      index: 4,
      text: "Boutique Company",
    },
  ];

  var settings = {
    nav: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToShow: 1,
  };

  function breaklike() {
    return "\n";
  }
  const data = [
    {
      heading: "BITCOVERSE Overview",
      image: "3dboy",
      width: "30vw",

      paragraphs: [
        {
          subHeading: "BITCOVERSE, A Community For Everyone:",
          text: "The premier blockchain institutional company that incorporates seamless integration of: Education, global community, consulting, social media, demo trade exchange, and mobile wallet that features a first of its kind Messenger option all into one pioneering concept.",
        },
        {
          subHeading: "BITCOV",
          text: "BITCOVERSE or BITCOV for short, the token issued by BITCOVERSE is a POS (Proof of Stake) and will maintain a TO BE DETERMINED total distribution volume of digital asset coins, BITCO. Being a decentralized cryptocurrency based on the Ethereum platform, while also being a standard ERC 20 token based on Ethereum blockchain, BITCOV supports all Ethereum wallets.",
        },
      ],
    },
    {
      heading: "Background",
      image: "backgroundImg",
      paragraphs: [
        {
          subHeading: "About BITCOVERSE",
          text: "The founder of BITCOVERSE love and infatuation for cryptocurrency began in 2012, once the time was taken to fully understand them and how they were going to potentially affect the future of money globally. It was truly going to be revolutionary! The key to truly understanding cryptocurrency is research, networking with all of the people in the community, and learning from each other. The BITCOVERSE team was confidentially founded in 2018 during the infant stages of global understanding, acceptance, and pre-mass adoption of cryptocurrency. The software behind blockchain technology and cryptocurrency are pure examples of innovation and we are proud to continue this by being the first and only brand to integrate a concept of learning, prosperity, and preservation of wealth through global community, social media, education, demo trade exchange, consulting, and a first of its kind Messenger platform crypto mobile wallet where you store, receive, buy, and sell cryptocurrency PLUS the option of chatting with fellow community members.",
        },
      ],
    },

    {
      heading: "Founder",
      image: "Founders",

      paragraphs: [
        {
          subHeading: "Thomas Christopher / CEO",
          text: "Mr. Thomas Christopher is the CEO and Founder of BITCOVERSE, A Community For Everyone. Tom, is a former Actor / Model and Athlete, from New York City, who turned private Businessman at 24 years old. Key investment industries include: precious metals and gemstones (active mining partner), sports wagering, real estate (virtual as well), and blockchain technology, which is currently a key focus of Tom's investment plans. He is known to be a forward thinker who believes in innovation and usually sees things 3-10 years into the future. One of his latest ventures is with the brand, Toppem Sports, a subsidiary of its' parent company, Toppem. Toppem Sports integrates the worlds of Fantasy Sports and blockchain technology via NFTs, tokenization, and gamification. Feel free to review the company.",
        },
      ],
    },
    {
      heading: "Advantages",
      image: "Advantages",
      paragraphs: [
        {
          subHeading: "Operational Strategies",
          text: "On top of solid fundamentals, pure innovation, and a forward thinking approach lies a powerful core of BITCOVERSE, which is its' R&D team. A superior support team contributes to an around the clock result of world class constancy and service for all of its' global community. The vision of BITCOVERSE is to collaborate with other astute members both inside and outside of our global community to create a prosperous and endless future through long-term and large-scale online/offline promotion leading to mass adoption.",
        },
        {
          subHeading: "Competent Customer Services",
          text: "Our global community interaction resolves any requests made in order to ensure a smooth and operational system. BITCOVERSE offers different options of customer service including webpage, email, and a Retail location in Antalya, Turkey.",
        },
        {
          subHeading: "Income & Expense",
          text: "BITCOVERSE income streams include: advertisement space, educational courses, NFTS, publications, and services offered. BITCOVERSE expenses are mainly for: blockchain technology R&D, marketing and promotion, and operations.",
        },
      ],
    },
  ];
  return (
    <>
      <div className="text-center mx-auto mb-20">
        <div className="pt-10 pb-10 text-center text-[#133b59] mb-20 text-6xl font-bold">
          <span className="text-[#f2b31b]">Company</span> Overview
        </div>

          {data.slice(0, 2).map((value, index) => (
        <div className={index % 2===0?"SectionOne text-center mx-auto mb-20":"text-center mx-auto mb-20"}>

            <div className="mx-auto flex flex-col gap-20 max-w-7xl">
              <div
                className={
                  index % 2 === 0
                    ? "md:flex flex-row justify-center items-center text-left gap-10"
                    : "md:flex flex-row-reverse justify-center items-center text-left gap-10"
                }
              >
                <div key={index} className="max-w-md md:p-0 p-10">
                  <h1 className="text-[#f2b31b] font-bold text-4xl mb-5">
                    {value.heading}
                  </h1>

                  {value.paragraphs.map((para, paraInd) => (
                    <div key={paraInd}>
                      <h1 className="text-[#133d59] font-bold text-2xl mb-5">
                        {para.subHeading}
                      </h1>
                      <p
                        style={{ lineHeight: "25px" }}
                        className="text-[#7e7e7e] text-[16px] font-[400] mb-5"
                      >
                        {para.text}
                      </p>
                      {value.heading === "Founder" ? (
                        <>
                          <div className="text-[#7e7e7e] text-[16px] font-[400] mb-5">
                            <p>
                              One of the most influential people in Tom's life
                              is his mother, Jeanette. Tom grew up with three
                              other siblings and life was challenging growing up
                              in a one bedroom apartment in NYC. His father was
                              not a responsible parent and the burden of
                              providing for the family fell on Jeanette. The sad
                              part was his father could not get past his issues
                              of irresponsibility (alcohol and gambling) and
                              took it out on his family. Tom witnessed his
                              mother being belittled due to her gender and he
                              vowed not to live life with that perspective. He
                              did not feel it was right. This is one important
                              motivational factor in his life, the right for
                              equality and inclusion for all women regardless of
                              their interests both personally and
                              professionally!
                            </p>
                            <br />
                            <p>
                              For more information on Tom, please review his
                              Bio.
                            </p>
                            {/* <h1><span>CEO</span> &  <span> Founder</span> Bio </h1> */}
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>

                <img
                className="md:ml-0 ml-10 ovImg"
                  style={{ width: "28vw" }}
                  src={require(`../../assets/${value.image}.png`)}
                />
              </div>
            </div>
            </div>
            
          ))}

          {data.slice(2).map((value, index) => (
            // <div className='flex justify-center items-center text-left gap-10'>
            <div className={ index %2===0?"SectionOne text-center mx-auto mb-20":"text-center mx-auto mb-20" 
            
            }>
              <div
                className={
                  index % 2 === 0
                    ? "md:flex flex-row justify-center items-center text-left gap-10 "
                    : "md:flex flex-row-reverse justify-center items-center text-left gap-10"
                }
              >
                <div key={index} className="max-w-md md:p-0 p-10">
                  <h1 className="text-[#f2b31b] font-bold text-4xl mb-5">
                    {value.heading}
                  </h1>

                  {value.paragraphs.map((para, paraInd) => (
                    <div key={paraInd}>
                      <h1 className="text-[#133d59] font-bold text-2xl mb-5">
                        {para.subHeading}
                      </h1>
                      <p
                        style={{ lineHeight: "25px" }}
                        className="text-[#7e7e7e] text-[16px] font-[400] mb-5"
                      >
                        {para.text}
                      </p>
                      {value.heading === "Founder" ? (
                        <>
                          <div className="text-[#7e7e7e] text-[16px] font-[400] mb-5">
                            <p>
                              One of his latest ventures is with the brand,
                              Toppem Sports, a subsidiary of its' parent
                              company, Toppem. Toppem Sports integrates the
                              worlds of Fantasy Sports and blockchain technology
                              via NFTs, tokenization, and gamification. Feel
                              free to review the company
                            </p>
                            <br />
                            <p>
                              For more information on Tom, please review his
                              Bio.
                            </p>
                            {/* <h1><span>CEO</span> &  <span> Founder</span> Bio </h1> */}
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>

                <img
                className={value.image === "Founders"?"md:ml-0 ml-10 ":"md:ml-0 ml-10 ovImg"}
                  style={{ width: "30vw" }}
                  src={require(`../../assets/${value.image}.png`)}
                />
              </div>
            </div>
          ))}

          <LastComponent />

        </div>

        {/* cOPY */}

      {/* <div className='container items-center justify-center mx-auto flex lg:flex-row flex-col'>
        <img className='w-1/3' src={banner2} alt='o' />
        <div className='p-3 lg:max-w-lg md:max-w-md max-w-sm'>
            <h1 className='text-amber-300 font-bold text-3xl'>Heading Goes Here</h1>
            <h1 className='text-gray-900 font-bold text-sm py-4'>Heading Goes Here</h1>
            <p className='text-xs mb-5 text-gray-400 max-w-lg'>Lorem ipsume ist htel onlen the so le lhtoewe Lorem ipsume ist htel onlen the so le lhtoeweLorem ipsume ist htel onlen the so le lhtoeweLorem ipsume ist htel onlen the so le lhtoeweLorem ipsume ist htel onlen the so le lhtoeweLorem ipsume ist htel onlen the so le lhtoewe</p>
            <div>
            <Slider {...settings1} >
                    <div className='p-2'>
                        <div className='flex gap-2 items-center '>
                            <img className='w-7' src={img} alt="s" />
                            <h1 className='text-gray-900 font-bold text-sm py-4'>Heading Goes Here</h1>
                        </div>

                        <p className='text-xs font-thin  text-gray-400'>Lorem ipsume is the dumm text ipsume is the dumm textipsume is the dumm textipsume is the dumm textipsume is the dumm textipsume is the dumm text </p>

                    </div>

                    <div className='p-2'>
                        <div className='flex gap-2 items-center '>
                            <img className='w-7' src={img} alt="s" />
                            <h1 className='text-gray-900 font-bold text-sm py-4'>Heading Goes Here</h1>
                        </div>

                        <p className='text-xs font-thin  text-gray-400'>Lorem ipsume is the dumm text ipsume is the dumm textipsume is the dumm textipsume is the dumm textipsume is the dumm textipsume is the dumm text </p>

                    </div>
                  
            </Slider>
            </div>
        </div>
        
    </div> */}

      <Prices />
      <div className="text-center container mx-auto mb-20">
        <div className="mx-auto flex flex-col gap-20 max-w-7xl"></div>
      </div>
    </>
  );
}

function LastComponent() {
  return (
    <div className="SectionOne " >
    <div className="mx-auto max-w-4xl mt-20 ">
      <h1 className="text-[#f2b31b] font-bold text-4xl mb-10 ">
        The Premiere Blockchain Boutique Company
      </h1>
      <div className="max-w-5xl  md:flex flex-row-reverse gap-10">
        <div className="flex flex-col gap-10 justify-center items-center">
          <img style={{ width: "220vw" }} src={lastSection} alt="dog" className="md:p-0 p-10 ovImg" />
     
        </div>
        <div className="discription text-left md:p-0 p-10">
          <h1 className="text-[#133d59] font-bold text-2xl mb-5">
            About BITCOVERSE
          </h1>
          <p className="text-[#7e7e7e] text-[16px] font-[400] mb-5">
            Founded by an ambitious forward thinking Entrepreneur and developed
            by up-and coming blockchain intellects who push barriers even
            further for the mass adoption of cryptocurrency. BITCOVERSE will
            create a first of its kind state of the art seamless platform
            featuring premium digital assets in which the world of
            cryptocurrency will unify as one whole global community in a safe
            and convenient matter. Education through social media and Retail
            integrated with investment consulting while offering a mobile wallet
            that features a first of its' kind Messenger option, BITCOVERSE is
            looking forward to having you be a part of our growing global
            community with a prosperous future.
          </p>
          <h1 className="text-[#133d59] font-bold text-2xl mb-5">
            BITCOVERSE Nucleus
          </h1>
          <p className="text-[#7e7e7e] text-[16px] font-[400] mb-5">
            Thomas Christopher <br /> CEO
          </p>
          <h1 className="text-[#133d59] font-bold text-2xl mb-5">
            Key BITCOVERSE Advantages
          </h1>

          <p className="text-[#7e7e7e] text-[16px] font-[400] mb-5">
            The founder of BITCOVERSE has been in the business of
            Entrepreneurial-ship since 2008 with an emphasis of building solid
            company fundamentals via great customer service through a forward
            thinking approach. The research and developmen team of BITCOVERSE
            has carried out research on blockchain technology as early as 2012.
            The BITCOVERSE team will officially enter the blockchain digital
            assets seamless platform in 2022 with the most consistent and
            extended technical manner, finer service and superior strategical
            operations to better serve blockchain digital asset learning,
            comprehension and transactions. Over 126 Educational Courses with
            Certificate and Diploma Options (Degree Programs are under
            Development)
          </p>
          <div className="flex flex-wrap items-center justify-around sm:text-left text-center gap-10 text-[#7e7e7e] text-xs font-[400]">
            <p style={{ lineHeight: "1.5" }}>
              Premiere professional team <br /> Vault - level digital asset
              security <br /> Superior customer service
            </p>
            <p style={{ lineHeight: "1.5" }}>
              Potent API interface <br /> Global consultant team of digital
              asset gurus <br /> Premiere educational tools
            </p>

            <p style={{ lineHeight: "1.5" }}>Blockchain digital assets</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default Overview;
