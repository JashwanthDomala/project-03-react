import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Cart from './pages/Cart.jsx'
import Orders from './pages/Orders.jsx'
import Items from './pages/Item.jsx'
import Search from './pages/Search.jsx'
const App = () => {
  return (
    <div className='text-5xl'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/item/:id' element={<Items/>} />
        <Route path='/search/:item' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App