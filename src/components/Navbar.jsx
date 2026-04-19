import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-2 bg-gray-700 text-2xl text-white '>
        <Link to="/" ><h1 >martCart</h1></Link> 
        <div className='flex gap-3 w-[40%]'>
            <input type="text" className=' w-[90%] px-4 py-2' placeholder="Search" />
            <div className='mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
        <div className='flex gap-6'>
             <Link to="/cart"><h1>Cart</h1></Link>
            <Link to="/orders"><h1>My Orders</h1></Link>
        </div>
    </div>
  )
}

export default Navbar