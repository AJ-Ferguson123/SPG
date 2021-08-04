import React from 'react'
import { Link } from 'react-router-dom'
import FallSp from '../images/FallSpecial2021.jpg'


const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center">            
            <img src={FallSp} alt="Fall Specials" className="mt-7" />
                <Link className="py-10 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-200 transition duration-100  ease-in-out flex items-center animate-bounce" to="/products">Order Now<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                 />
            </svg>
        </Link>
    </div>
    )
}

export default Hero
