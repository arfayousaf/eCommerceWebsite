import React from 'react'
import { Link } from 'react-router-dom'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import b5 from '../assets/b5.png'
import b6 from '../assets/b6.png'
import b7 from '../assets/b7.png'
import b8 from '../assets/b8.png'
import b9 from '../assets/b9.png'

const Blog = () => {
  return (
    <div>
        <div>
        <ul className='sm:text-md sm:p-2 sm:justify-evenly flex  bg-[#241607] lg:justify-evenly lg:text-2xl text-white lg:font-bold  xl:text-3xl xl:p-4'>
            <li ><img className='bg-white rounded-full' src="t-shirt.jpg"/></li>
            <li id="logo" className='pl-3 pt-1 text-[#d3bda5] '>Urban Ease</li>
            <li className='lg:pl-[60px] xl:pl-[120px] xl:pr-9 '><Link to='/'>Home</Link></li>
            <li className='xl:pr-11'><Link to='/Shop'>Shop</Link></li>
            <li className='xl:pr-11'> <Link to='/Dresses'>Dresses</Link></li>
            <li className='xl:pr-11'> <Link to='/Tshirt'>T Shirts</Link></li>
            <li className='xl:pr-11'> <Link to='/Bottoms'>Bottoms</Link></li>
            <li className=' bg-white '> <Link to='/Blog'><img src='/blog.png'/></Link></li>
            <li className=' bg-white '> <Link to='/Contact'><img src='/contact.png'/></Link></li>
            <li className=' bg-white '> <Link to='/Login'><img src='/lg1.png'/></Link></li>
            
        
        </ul>
     </div>

     <div>
         <h1 id='log' className="font-normal text-4xl grid justify-items-center mt-14 " >FROM THE JOURNAL</h1>
         </div>

     <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-items-center mt-7 mb-3'>
        <img  src={b1} />
        <img  src={b2} />
        <img  src={b3} />
     </div>
     <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-items-center mb-3'>
        <img  src={b4} />
        <img  src={b5} />
        <img  src={b6} />
     </div>
     <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-items-center mb-3'>
        <img  src={b7} />
        <img  src={b8} />
        <img  src={b9} />
     </div>

      
    </div>
  )
}

export default Blog
