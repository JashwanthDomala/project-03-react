import React from 'react'
import axios from 'axios'
import { useState,useEffect  } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Card from '../components/home/Card'
const Search = () => {
    const [items, setItems] = useState([])
    const {item} = useParams();
    useEffect(()=>{
        async function  api(){
            const res = await axios.get(`https://dummyjson.com/products/search?q=${item}`)
            setItems(res.data.products);
        }
        api()
    },[item])

  return (
    <div className='flex flex-col'>
      <h1 className='bg-amber-300 uppercase px-10 '>Search results for  {item}</h1>
    <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-20 mt-3' >
      {
        items.map((item)=>{
          return(
            <div  key={item.id} >
              <Link  to={`/item/${item.id}`} state={{item}} >
                         <Card  img={item.thumbnail} title={item.title} dis={item.discountPercentage}
                        price={item.price} />
              </Link>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Search