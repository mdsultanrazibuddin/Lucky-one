import React from 'react';
import './Product.css'
import { FaCartPlus } from 'react-icons/fa';

const Product = (props) => {
    const {name, id, img, price} =props.product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <h1>{id}</h1>
            <p className='products-name'>{name}</p>
            <p>Price : $ {price}</p>

            <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
                <p>Add to Cart <FaCartPlus className='icon'/></p>
            </button>

        </div>
        
        
        


    );
};

export default Product;