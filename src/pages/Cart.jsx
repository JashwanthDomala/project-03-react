import React, { useEffect, useState } from 'react'
import Card from '../components/home/Card';
import { Link } from 'react-router-dom';

const Cart = () => {
  let myCart = localStorage.getItem("cart")
  const [items, setItems] = useState(myCart ? JSON.parse(myCart) : []);
  const [total, setTotal] = useState(0);

      function order(){
        let myOrder =localStorage.getItem("myOrder")
        myOrder = myOrder ?JSON.parse(localStorage.getItem("myOrder") ): [];
        items.map((item)=>{
          myOrder = myOrder.filter((ele)=>ele.id != item.id)
          myOrder = [...myOrder,item]
        })
        localStorage.setItem("myOrder",JSON.stringify(myOrder));
        console.log(JSON.parse(localStorage.getItem("myOrder")))
        setItems([])
        alert(`total products of cost ${total} has be ordered check in your orders`)
      }


  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(items));
  },[items])

  useEffect(()=>{
    let temp = 0
    items.map(({price}) => {
      temp = temp + price
    })
    setTotal(temp.toFixed(2));
  },[items])

  return (

    <div className='flex flex-col items-center gap-5' >
        {
          items?.length == 0 && (
            <h1 className=' mt-70 text-7xl font-mono  text-gray-700 '>Oops! Cart is Empty</h1>
          )
        }
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
    { items?.length>0 &&(
      <div className=' self-end md:self-center '>
        <h1 className='text-4xl m-2 bg-gray-300 w-70 p-2 text-center rounded-xl hover:scale-105 transition-transform' >Total : {total}</h1>
        <h1 onClick={order} className='text-4xl m-2 bg-amber-300 w-70 p-2 text-center rounded-xl hover:scale-105 transition-transform ' >Buy All</h1>
      </div>
    )}
    </div>
  )
}

export default Cart