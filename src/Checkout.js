import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import React from 'react';
import  Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider"

function Checkout() {
    const [{ basket }, dispatch] = useStateValue ();
    
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                src="OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
                
                <div>
                    <h2 className="checkout_tittle"> Your shopping Basket</h2>
                    
                    {basket.map(item => (
                      <CheckoutProduct
                      id={item.id}
                      tittle={item.tittle}
                      image={item.image} 
                      price={item.rating} 
                      />
                    ))}
                    
                  
                </div>
            </div>
           
           <div className="checkout_right">
               <Subtotal />
               
               </div> 
        </div>
    )
}

export default Checkout
