import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import Item from '../../pages/Item'
const Category = ({category , header}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const api = async () =>{
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const products = await res.json()
            console.log(products)
            setData(products.products)
        }
        api()
    }, [])
    
  return (
    <div className='flex flex-col gap-10'>
        <h1 className=' bg-amber-300 uppercase px-10 '>{
        header?header:category
        }</h1>
        <div className=' grid grid-cols-5 gap-20'>
            {
                data.map((item,key) => {
                    console.log(item +" "+ item.title+"hello")
                    return (
                        
                         <Link  key={key} to={`/item/${key}`} state={{item}} >
                         <Card  img={item.thumbnail} title={item.title} dis={item.discountPercentage}
                        price={item.price} />
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Category