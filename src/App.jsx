import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { CartProvider } from './components/CartContext'
import Dresses from './components/Dresses'
import Tshirt from './components/Tshirt'
import Bottoms from './components/Bottoms'
import Contact from './components/Contact'
import Login from './components/Login'
import Blog from './components/Blog'



function App() {
  

  return (
    <div>
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Dresses" element={<Dresses />} />
        <Route path="/Tshirt" element={<Tshirt />} />
        <Route path="/Bottoms" element={<Bottoms />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        
        </Routes>
        </Router>
        </CartProvider>
        </div>
  
  )
}

export default App
