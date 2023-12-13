import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='w-full bg-light-blue px-7 py-5 text-white flex justify-center items-center'>
            <div className='w-full max-w-[1700px] lg:px-8 flex items-center justify-between gap-3'>
                <Link to='/' className='text-3xl text-white font-bold w-1/5 '>Movie Finder</Link>
                <div className='rounded-md px-3 py-2 w-3/12 bg-dark-gray hidden sm:flex'>
                    <input type='text' placeholder='Enter A Movie Name' className='rounded-md w-full bg-dark-gray outline-none text-light-gray border-none' />
                    <FaSearch className='text-2xl text-light-gray justify-end items-end' />
                </div>
                <Link to='/genre' className='rounded-lg px-3 py-2 bg-dark-gray'> Select Genre</Link>
            </div>
        </div>
    )
}

export default Nav