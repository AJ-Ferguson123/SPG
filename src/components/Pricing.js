import React from 'react'
import Price from '\public\Images\spgPriceGuide.jpg'

const Pricing = () => {
    return (
        <div>
            <h2 className="h-50">Price List</h2>
            <img src={Price} alt="Price Guide" className="h-screen" />
        </div>
    )
}

export default Pricing
