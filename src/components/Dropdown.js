import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-blue-300' : 'hidden'}
        onClick={ toggle }
        >
            <Link className="p-4" to="/pricing">Pricing</Link>
                <Link className="p-4" to="/products">Products</Link>
                <Link className="p-4" to="/contact">Contact</Link>
                <Link className="p-4" to="/about">About</Link>
        </div>
    )
}

export default Dropdown
