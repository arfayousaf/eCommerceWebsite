import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const {cartLength}= useContext(CartContext);

  return (

    
    <div className="cart">
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

      <h1 className='bg-[#55422d] mb-5 p-5 text-white sm:font-semibold sm:text-md sm:pl-14  sm:ml-[250px] sm:p-3 sm:mr-[200px] md:ml-[300px] md:mr-[250px] md:pl-16 md:text-xl  lg:text-2xl    mt-3 rounded-full lg:ml-[400px] lg:mr-[400px] lg:pl-20 lg:font-bold xl:ml-[530px] xl:mr-[530px] xl:pl-24 2xl:ml-[580px] 2xl:mr-[580px] '>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='font-bold grid justify-items-center'>Your cart is currently empty.</p>
      ) : (
        <>
        <div> 
          <ul className='bg-[#e7d7c4] text-[#2e1e0c] pl-[100px] p-5 mt-5 mb-5 sm:ml-[10%] sm:mr-[10%] '>
          {cart.map((item) => (
            <li key={item.id}>
              <div className='grid grid-cols-2 justify-items-center mb-5'>
              <div>
              <img className='w-[250px] h-[340px]' src={item.image} alt={item.name} />
              </div>
              <div >
              <h2 className='font-bold' >{item.name}</h2>
              <p className='font-bold'>{item.price} Rs</p>
              <button className='bg-[#4e3f2e] text-white font-mono p-2 rounded-full mt-1 mb-5 ' onClick={() => removeFromCart(item.id)}>Remove Item</button>
              </div>
              </div>
              
            </li>
          ))}
        </ul>
        </div>
        <div className='text-white bg-[#2e1e0c] p-5 mt-5 font-bold text-xl grid justify-items-center sm:ml-[30%] sm:mr-[30%] md::ml-[40%] md:mr-[40%]   xl:ml-[550px] xl:mr-[530px]'>
            <h2 className='font-bold'>Total Bill: {totalPrice} Rs</h2>
          </div>
         
          
          <div>
          <h1 className='text-white bg-[#2e1e0c] p-5 mt-5 grid justify-items-center font-bold text-xl sm:ml-[30%] sm:mr-[30%] md::ml-[40%] md:mr-[40%] xl:ml-[550px] xl:mr-[530px] rounded-full'>Checkout</h1>
          </div>
          
          <div className='bg-[#e7d7c4] text-[#2e1e0c] pl-[100px] p-5 mt-5 mb-5 sm:ml-[10%] sm:mr-[10%]  xl:ml-[300px] xl:mr-[300px]'>
          <input className='sm:ml-[10%] sm:mr-[10%] xl:ml-[160px] mt-5  bg-[#2e1e0c] text-white font-semibold p-2 ' placeholder='Name'></input><br></br>
          <input  className='sm:ml-[10%] sm:mr-[10%] xl:ml-[160px] mt-5  bg-[#2e1e0c] text-white font-semibold p-2' placeholder='email'></input><br></br>
          <input  className='sm:ml-[10%] sm:mr-[10%] xl:ml-[160px] mt-5  bg-[#2e1e0c] text-white font-semibold p-2'  placeholder='Contact'></input><br></br>
          <button className='sm:ml-[10%] sm:mr-[10%] text-white bg-[#2e1e0c] p-2 mt-5 text-center font-bold text-md xl:ml-[250px]  rounded-full' onClick={()=> alert('Your Order has been confirmed')}>Submit</button>
          </div>


        </>
        
      )}

        
          
        
          
         
        

          
         
          

    </div>
  );

};

export default Cart;
