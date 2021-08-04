import React from 'react'
// import spgLogo from '../images/spgLogo.jpg'
import After from '../images/spgafterbg.jpg'



const Contact = () => {
    return (
        <div className="bg-green-700 flex flex-col justify-center items-center">
            <h2 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl h-100 text-black">Contact Us</h2>
            {/* <img src={spgLogo} alt="logo" className="rounded-md" /> */}
            <img src={After} alt="pool picture" className=" mt-7 rounded-md" />
            {/* <h3 className="bg-green-700 lg:text-6xl md:text-4xl sm:text-2xl mb-9 text-black mt-12">By Phone</h3> */}
            <b className="lg:text-6xl md:text-4xl sm:text-2xl text-black mt-3">Phone:</b>
            <h3 className="lg:text-6xl md:text-4xl sm:text-2xl text-black mb-2 mt-1">216 832 5705</h3>
            <b className="lg:text-6xl md:text-4xl sm:text-2xl text-black mt-3">Email:</b>
            <h2 className="lg:text-6xl md:text-4xl sm:text-2xl font-serif uppercase mb-4 rounded-lg">poolinstallers@aol.com</h2>
        </div>
    )
}

export default Contact
