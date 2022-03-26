import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ('./Shop.css')


const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    

    const handleAddToCart = (products) =>{
        const newCart = [...cart, products]
        setCart(newCart);
    }
    
   
    const randomButton = () =>{
         Math.floor(Math.random() *12)
        for(const product of cart){
            // console.log(product.id);
            if(parseInt(product.id)=== Math.floor(Math.random() *12)){
                alert(product.name)
            }
        }
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

                  
                   
                   <button onClick={remove} className='btn'>Remove All</button>
               </div>
           </div>
       </div>
    );
};

export default Shop;