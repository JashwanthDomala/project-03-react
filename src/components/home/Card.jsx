import React from 'react'

const Card = ({img,title,dis,price}) => {
  return (
    <div className='flex flex-col gap-1 px-2 py-3 h-80 w-60 object-cover shadow-2xl rounded-2xl border-2 border-gray-300 '>
        <img className='h-40 w-40' src={img} alt="" />
        <h1 className=' text-xl '>{title}</h1>
        <h1 className=' p-2  bg-red-500 text-white text-sm w-30 '>{dis}% off</h1>
        <h1 className='text-xl' >Price: {price}$</h1>
    </div>
  )
}

export default Card