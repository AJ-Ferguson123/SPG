import React from 'react'
import comparision from '../images/2019poolComparision.jpg'
import azor1 from '../images/Azor1.jpg'
import azor2 from "../images/Azore2.jpg"
import Liner from '../images/LinerCover.jpg'
import Mag1 from '../images/magnusDir.jpg'
import Mag2 from '../images/magnusCover.jpg'
import Ohana from '../images/Ohana.jpg'
import Ohana1 from '../images/Ohana1.jpg'
import Pretium from '../images/PretiumPool.jpg'
import PretiumLiner from '../images/Pretium.jpg'


const Product = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="lg:text-7xl md:text-5xl sm:text-3xl text-1xl text-black m-3">Products Page</h2>
            <img src={comparision} alt="comparision" className="product" />
            <img src={Liner} alt="liners" className="product cursor-pointer" to="/" />
            <img src={azor1} alt="azor1" className="product" />
            <img src={azor2} alt="azor2" className="product" />
            <img src={Mag2} alt="magnusPool" className="product" />
            <img src={Mag1} alt="magnusDirect" className="product" />
            <img src={Ohana} alt="Ohana Pool" className="product" />
            <img src={Ohana1} alt="Ohana Description" className="product" />
            <img src={Pretium} alt="Pretium Pool" className="product" />
            <img src={PretiumLiner} alt="Pretium Insert" className="product" />            
        </div>
    )
}

export default Product
