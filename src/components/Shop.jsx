import React from 'react'
import { products } from '../utils/productdata'
import ProductCard from './ProductCard'
import { CartContext } from './CartContext';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

const Shop = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <div>
        <div>
        <ul className='sm:text-md sm:p-2 sm:justify-evenly flex  bg-[#241607] lg:justify-evenly lg:text-2xl text-white lg:font-bold  xl:text-3xl xl:p-4'>
            <li ><img className='bg-white rounded-full' src="t-shirt.jpg"/></li>
            <li id="logo" className='lg:pl-3 pt-1 text-[#d3bda5] '>Urban Ease</li>
            <li className='lg:pl-[60px] xl:pl-[120px] xl:pr-9 '><Link to='/'>Home</Link></li>
            <li className='xl:pr-11'><Link to='/Shop'>Shop</Link></li>
            <li className='xl:pr-11'> <Link to='/Dresses'>Dresses</Link></li>
            <li className='xl:pr-11'> <Link to='/Tshirt'>T Shirts</Link></li>
            <li className='xl:pr-11'> <Link to='/Bottoms'>Bottoms</Link></li>
            <li className='xl:pl-4'> <Link to='/Cart'>Cart</Link></li>
            <li className='xl:pt-2 xl:pl-2'> <img className='bg-white rounded-full' src="/cart.jpg"/></li>
            <li className='bg-red-800 text-white text-sm rounded-full p-2'>{cartLength}</li>
        </ul>
     </div>

      <div className='bg-[#55422d] mb-5 mt-5 p-5 text-white font-bold text-2xl grid justify-items-center sm:ml-[20%] sm:mr-[20%] xl:ml-[35%] xl:mr-[35%] rounded-full'>
        SHOP ALL PRODUCTS
      </div>
      <div className='grid sm:grid-cols-1 sm:justify-items-center lg:grid-cols-2 xl:grid-cols-4  xl:p-5'>
      {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Shop
