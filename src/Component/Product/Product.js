import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = () => {
  const [products, setProducts] = useState([])
  useEffect( () =>{
    fetch('product.json')
    .then(res => res.json())
    .then(product => setProducts(product))
  }, [])
    return (
       <nav className="cart">
         <div className="product-container">
            <h1>my name is razib={products.length}</h1>
          </div>
          <div className="order-container">
            <h1>amr sonar bangla</h1>
          </div>
       </nav>
    );
};

export default Product;