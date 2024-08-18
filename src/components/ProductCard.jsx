import React, { useContext } from 'react';
import { products } from '../utils/productdata';
import { CartContext } from '../components/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    return (
        <div className="product-card ">
            <img src={product.image} alt={product.name} />
            
            <h2 className='font-bold'>{product.name}</h2>
            <p className='font-bold'>{product.price} Rs</p>
            <button 
                onClick={() => addToCart(product) } 
          
                className='text-white bg-[#241607] hover:bg-[#9b7853] font-mono pl-3 p-2 rounded-3xl mb-6'
            >
                Add to cart
            </button>
            
            
        </div>
    );
};

export default ProductCard;
