import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h4 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                Swimming 
            </h4>
            <h3 className="lg:text-5xl md:text-4xl sm:text-3xl mb-14">
                Pool Guys
            </h3>
                <Link className="py- px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-200 transition duration-100  ease-in-out flex items-center animate-bounce" to="/pricing">Order Now<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </Link>
    </div>
    )
}

export default Hero
