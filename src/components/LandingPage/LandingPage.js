import React from 'react'
import How from '../How/How'
import Projects from '../../components/projects/Projects'
import ChoseUs from '../../components/choseUs/ChoseUs'
import Feature from '../../components/feature/Feature'
import Work from '../../components/work/Work'
import Token from '../../components/token/Token'
import Arts from '../../components/arts/Arts'
import Slider from '../slider/Slider'
import Faq from '../../components/faq/Faq';
import Prices from '../prices/Prices'
import Playstore from '../playstore/Playstore'
import Detail from "../detail/detail"

function LandingPage() {
  return (
    <div>
        <Slider/>
        {/* <Playstore/> */}
        <How/>
        <Detail />
        <Projects/>
        <Prices/>
        <ChoseUs/>
        <Feature/>
        <Work/>
        <Token/>
        <Arts/>
        <Faq />
    </div>
  )
}

export default LandingPage