import React from 'react'
import CheckList from '../images/InstallCheckList.jpg'

const Install = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-1xl text-black m-8 uppercase">Check List
            </h1>
            <img src={CheckList} alt="checklist" className="h-screen rounded" />
        </div>
    )
}

export default Install
