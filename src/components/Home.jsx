import React from 'react'
import fitted_tee from '../assets/fitted-tee.png';
import loose_tee from '../assets/loose-tee.png';
import brown_tee from '../assets/brown-tee.png';
import white_tee from '../assets/white-tee.png';
import olive_tee from '../assets/olive-tee.png';
import purple_tee from '../assets/purple-tee.png';
import lbrown_tee from '../assets/lbrown-tee.png';
import black_tee from '../assets/black-tee.png';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
   const { cartLength } = useContext(CartContext);
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
            <li className='xl:pl-4'> <Link to='/Cart'>Cart</Link></li>
            <li className='xl:pt-2 xl:pl-2'> <img className='bg-white rounded-full' src="/cart.jpg"/></li>
            <li className='bg-red-800 text-white text-sm rounded-full p-2 mb-0'>{cartLength}</li>
        
        </ul>
     </div>

     <div className='mt-1'>
        <img src="/cover.png" />
     </div>

     <div>
        <h1 className='bg-[#55422d] mb-5 mt-5 p-5 text-white font-bold text-2xl grid justify-items-center sm:ml-[30%] sm:mr-[30%] xl:ml-[40%] xl:mr-[40%] rounded-full'>Sale items</h1>
     </div>

     <div className='mt-2 p-3 grid sm:grid-cols-2 sm:justify-evenly md:pl-[60px] lg:pl-[150px] xl:grid-cols-4 xl:pl-[40px]'>
        <img src={fitted_tee} />
        <img className='sm:pb-2' src={loose_tee} />
        <img src={brown_tee} />
        <img src={white_tee} />
     </div>
     <div className='sm:mt-2 lg:mt-4 p-3 grid sm:grid-cols-2 sm:justify-evenly md:pl-[60px] lg:pl-[150px] xl:grid-cols-4 xl:pl-[40px]'>
        <img src={olive_tee} />
        <img className='sm:pb-2' src={purple_tee} />
        <img src={lbrown_tee} />
        <img src={black_tee} />
     </div>

     <div >
        <h1 className='bg-[#301f0c] text-white sm:pl-[150px] md:pl-[200px] md:text-lg lg:text-xl lg:pl-[300px] lg:p-5 xl:pl-[480px] p-3 '>Limited offer on these products till 15-August.</h1>
        <h1 className='bg-[#55422d] mb-5 mt-5 p-5 text-white font-bold text-2xl grid justify-items-center sm:ml-[30%] sm:mr-[30%] xl:ml-[40%] xl:mr-[40%] rounded-full'>Order Now</h1>
     </div>

     <div className='grid grid-cols-3 mt-5 bg-[#72614f] text-[#dfd7cf] sm:p-3 md:p-4 xl:p-4 '>
        <div className='sm:pl-5 md:pl-12 lg:pl-20 xl:pl-[160px]'>
            <h className='font-bold'>Links</h><br></br>
            <h>ABOUT US</h><br></br>
            <h>CAREERS</h><br></br>
            <h>FAQS</h><br></br>
            <h>RETURN POLICY</h><br></br>
            <h>CONTACT US</h><br></br>
            <h>PRIVACY POLICY</h><br></br>
        </div>

        <div className='sm:pl-5 md:pl-12 lg:pl-16 xl:pl-[160px]'>
            <h>CUSTOMER SERVICE</h><br></br>
            <p className='font-extrabold'>EMAIL  |   WHATSAPP</p><br></br>
            <div className='flex p-5'>
            <img className='bg-white rounded-full' src='facebook.png' />
            <img className='bg-white rounded-full' src='ig.png' />
            <img className='bg-white rounded-full' src='twt.png' />
            </div>
        </div>

        <div className='sm:pl-5 md:pl-12 lg:pl-16 xl:pl-[160px]'>
            <h className="font-extrabold ">LOCATIONS</h><br></br>
            <h >Lahore</h><br></br>
            <h >Islamabad</h><br></br>
            <h >Karachi</h><br></br>
        </div>
       
     </div>

     <div className=' text-white bg-[#35220d] sm:pl-[250px] md:pl-[300px] lg:pl-[450px]  xl:pl-[620px]' >
        <h1 >© 2024 Chic Allure</h1>
     </div>
     
    </div>
  )
}

export default Home
