import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ('./Shop.css')

const Shop = () => {
    const[products, setProducts] = useState([]);
    useEffect(() =>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        console.log(product);
    }
    return (
       <div className="cart-container">
           <div className='product-container'>
               {
                   products.map(product => <Product key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}
                   >

                   </Product>)
               }
           </div>
           <div className='order-summary'>
               <h1>Order List</h1>
               <p>Selected Books</p>
               <div>
                   <button className='btn'>Choose Just One</button>
                   <br />
                   <button className='btn'>Remove All</button>
               </div>
           </div>
       </div>
    );
};

export default Shop;