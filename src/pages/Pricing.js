import React from 'react'
import { Link } from 'react-router-dom'
import PriceGuide from '../images/spgPriceGuide.jpg'
import bgAfter from '../images/bgSPG.jpg'

const Pricing = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="lg:text-7xl md:text-5xl sm:text-3xl text-1xl text-black mt-8 uppercase">Pricing</h2>
           <img src={bgAfter} alt="below ground pool picture" className="mt-5" />      
              <h2 className="h-10 mt-10 text-black">**Price <strong>may vary</strong> due to supply issues, please call for up to date pricing.**</h2>
              <h1 className="font-serif font-bold">216 832 5705</h1>  
              <h3>If you would like to know what goes into our install, click the link <Link to="/install"><strong>here</strong></Link>.</h3>                                                                  
            <img src={PriceGuide} alt="price guide" className=" h-full w-full rounded-md" />
        </div>
    )
}

export default Pricing