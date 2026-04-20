import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/home/Card';

const Orders = () => {
  let myOrder = localStorage.getItem("myOrder")

  const [items, setItems] = useState(myOrder ? JSON.parse(myOrder) : []);
  useEffect(()=>{
    localStorage.setItem("myOrder",JSON.stringify(items));
  },[items])
  return (
    <div className='flex flex-col'>
      <h1 className='bg-amber-300 uppercase px-10 '>My Orders</h1>
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

export default Orders