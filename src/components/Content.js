import React from 'react'
import ImageOne from '../images/lspg.jpg'

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center font-mono py-10">
           <img src={ImageOne} alt="kid" className="h-screen rounded mb-10 shadow" /> 
        </div>
    )
}

export default Content
