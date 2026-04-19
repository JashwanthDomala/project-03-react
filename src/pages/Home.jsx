import React from 'react'
import Category from '../components/home/Category'

const Home = () => {
    const categoryList = ["beauty",
            "fragrances",
            "furniture",
            "groceries",
            "home-decoration",
            "kitchen-accessories",
            "laptops",
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "mobile-accessories",
            "motorcycle",
            "skin-care",
            "smartphones",
            "sports-accessories",
            "sunglasses"
        ]
  return (
    <div className='flex flex-col gap-20'>
    <br />
    {
        categoryList.map((ele,key) =>{
            return <Category key={key} category={ele} />
        })
    }
        <br />
    </div>
  )
}

export default Home