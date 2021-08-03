import React from 'react'
import ImageOne from '../images/lspg.jpg'

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-20">
           <img src={ImageOne} alt="kid" className="h-full rounded mb-2 shadow" /> 
        </div>
    )
}

export default Content
