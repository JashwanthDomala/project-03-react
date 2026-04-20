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
  
    function addToCart(){
      let cart =localStorage.getItem("cart")
      cart = cart ?JSON.parse(localStorage.getItem("cart") ): [];
      cart = cart.filter((ele)=>ele.id != item.id)
      let newCart = [...cart,item]
      localStorage.setItem("cart",JSON.stringify(newCart));
      alert(`${item.title} is added successfully to your cart`)
    }
    function order(){
        let myOrder =localStorage.getItem("myOrder")
      myOrder = myOrder ?JSON.parse(localStorage.getItem("myOrder") ): [];
      myOrder = myOrder.filter((ele)=>ele.id != item.id)
      let newOrder = [...myOrder,item]
      localStorage.setItem("myOrder",JSON.stringify(newOrder));
      console.log(JSON.parse(localStorage.getItem("myOrder")))
    }


  console.log(item)
  return (
    <div>
      <div className='h-[70vh]  flex gap-3'>
            <div className='section1 bg-gray-500 flex flex-col gap-1 w-1/2'>
                <img className='w-[60vh] h-[53vh] ' src={img} alt="" />
                <div className='itemImg h-50 w-full flex overflow-x-scroll  '>
                    {
                      item.images.map((ele,key)=>{
                          return(
                            <img key={key} onClick={()=>setImg(ele)} className='w-50 h-50' src={ele} />
                          )
                      })
                    }
                </div>
            </div>
            <div className='section2 w-1/2'>
                    <h1 className=' font-semibold font-mono text-5xl text-gray-700 '>{item.title}</h1>
                    <p className='text-2xl my-4 '>{item.description}</p>
                    <h1 className=' text-2xl text-blue-800 '>Rating : {item.rating}/5 </h1>
                    <br />
                    <h1 className='text-2xl'><span className='  text-red-500 px-2 '>-{item.discountPercentage}%</span> {item.price}$</h1>
                    <h1 className=' text-2xl ml-3 mt-3 font-semibold '>{item.stock} pieces left</h1>
                    <h1 className=' text-2xl ml-3 mt-3 font-semibold ' >{item.shippingInformation}</h1>
                    <h1 className=' text-2xl ml-3 mt-3 font-semibold ' >{item.warrantyInformation}</h1>
                    <div className='flex flex-col  md:flex-row  gap-4'>
                      <h1 onClick={addToCart} className='text-4xl m-2 bg-amber-300 w-70 p-2 text-center rounded-xl hover:scale-105 transition-transform  ' >Add to cart</h1>
                      <h1 onClick={order} className='text-4xl m-2 bg-amber-300 w-70 p-2 text-center rounded-xl hover:scale-105 transition-transform ' >Buy Now</h1>
                    </div>
                    <h1 className=' text-2xl ml-3 mt-3' >{item.returnPolicy}</h1>
            </div>
      </div>
      <Category  category={item.category} header="Similar Products :-" />
    </div>
    
  )
}

export default Item