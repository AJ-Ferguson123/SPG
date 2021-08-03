import React from 'react'
import PriceGuide from '../images/spgPriceGuide.jpg'

const Pricing = () => {
    return (
        <div>
            <h2 className="h-10 text-black underline">PRICE LIST</h2>
            <p className="h-10 m-10 text-black">Price may vary due to supply issues, please call for up to date pricing.
            </p>           
            <img src={PriceGuide} alt="price guide" className=" h-full w-full flex flex-col justify-center items-center" />
        </div>
    )
}

export default Pricing