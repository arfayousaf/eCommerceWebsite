import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
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
        <h1 id='log' className="font-normal text-4xl grid justify-items-center mt-8 " >CONTACT US </h1>
     </div>
     <div id='log' className=" grid justify-items-center mt-[60px]">
        <div className='flex flex-wrap justify-items-center'>
       <label id='log' className='p-3'>NAME</label>
        <input className="p-2 border border-gray-400 text-md pr-[100px]"></input>
        <label id='log' className='p-3'>E MAIL</label>
        <input className="p-2  border border-gray-400 text-md pr-[100px]"></input>
        </div>
       
        <h id='log' className='mt-8'>MESSAGE</h>
        <input className="p-2 mt-3 mb-3 border border-gray-400 text-md pr-[300px]  pb-[200px]"></input><br></br>
      <button id='log' className="bg-black text-white pl-[130px] pr-[110px]  mt-2 p-3" onClick={()=> alert('Your message has been sent successfully!')}>SEND</button>
     </div>
    

    </div>
  )
}

export default Contact
