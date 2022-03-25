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
               <h1>razib</h1>
           </div>
       </div>
    );
};

export default Shop;