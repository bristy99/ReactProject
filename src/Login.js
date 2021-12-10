import './Login.css';

import { Link } from "react-router-dom";
import React from 'react';

function Login() {
    return (
        <div className='login'>
            <Link to= '/'>
           <img 
           className="login_logo"
           src="amazon_PNG24.png" alt="" />
           </Link>

           <div className='login_container'>
               <h1>Sign-in</h1>
                
                <form>
                    <h5> E-mail </h5>
                    <input type ='text' />
                </form>
               
           </div>

        </div>
    )
}

export default Login
