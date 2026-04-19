import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Category from '../components/home/Category';
const Item = () => {
  const location = useLocation();
  const {item} = location.state
  const [img, setImg] = useState(item.images[0])
  useEffect(() => {
    setImg(item.images[0])
  }, [location])
  
  console.log(item)
  return (
    <div>
      <div className='h-[70vh]  flex gap-3'>
            <div className='section1 bg-gray-500 flex flex-col gap-1 w-1/2'>
                <img className='w-[60vh] h-[56vh] ' src={img} alt="" />
                <div className='h-50 w-full overflow-auto no-scrollbar flex'>
                    {
                      item.images.map((ele,key)=>{
                          return(
                            <img onClick={()=>setImg(ele)} className='w-50 h-50' src={ele} />
                          )
                      })
                    }
                </div>
            </div>
            <div className='section2 w-1/2'>
                    <h1 className=' font-semibold font-mono text-5xl text-gray-700 '>{item.title}</h1>
                    <p className='text-xl'>{item.description}</p>
                    <h1>Review : {item.review} </h1>
            </div>
      </div>
      <Category  category={item.category} header="Similar Products :-" />
    </div>
    
  )
}

export default Item