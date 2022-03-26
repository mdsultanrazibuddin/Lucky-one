import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ('./Shop.css')

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([])
    const[randoms, setRandoms] = useState([])
   
    // console.log(cart);

    const handleAddToCart = (products) =>{
        const newCart = [...cart, products]
        setCart(newCart);
    }
    const randomButton =() =>{
        const getRandoms = cart[(Math.random() * cart.length) | 0];
        setRandoms(getRandoms);
       
    }
    const remove = () =>  {
         setCart ([]);
    }

    
    useEffect(() =>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    
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
               <h1 className='name'>Order List</h1>
               <p className='text'>Selected Books</p>
               <div>
                   {
                       cart.map((products) =>(
                           <h4 className='select' key={products.id}>{products.name}</h4>
                       ))
                   }

                   
               </div>
               <div>
                   <button onClick={randomButton}  className='btn'>Choose Just One</button>
                   <br />

                   {randoms.map((product) => (
                        <h1>{product.name}</h1>
                   ))}
                   
                   <button onClick={remove} className='btn'>Remove All</button>
               </div>
           </div>
       </div>
    );
};

export default Shop;