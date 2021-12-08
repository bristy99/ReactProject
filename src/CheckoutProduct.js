import './CheckoutProduct.css';

import React from 'react';
import {useStateValue} from "./StateProvider"

function CheckoutProduct({ id, image, tittle, price, rating}) {
    const [{ basket }, dispatch] = useStateValue ();
    
    return (
        <div className= 'checkoutProduct'>
         <img className= 'checkoutProduct_image' 
         src={image} /> 
         
        <div className = 'checkoutProduct_info'>
            <p className = 'checkoutProduct_tittle'>
                {tittle}
            </p>
           
            <p className = "checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                
                <div className = "checkoutProduct_rating">
                 {Array (rating)
                 .fill()
                 .map((_, i) => (
                     <p>⭐</p>
                 ))}
             
                </div>
            <button> Remove from Basket </button>
        </div>
         
        </div>
    )
}

export default CheckoutProduct
