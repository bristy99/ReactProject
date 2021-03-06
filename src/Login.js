import './Login.css';

import { Link } from "react-router-dom";
import React from 'react';
import { auth } from "./firebase";
import { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
     e.preventDefault();

    auth
     .createUserWithEmailAndPassword(email, password)
     .then(( auth ) => {
         // it successfully created a new user with email and password
         console.log(auth);
     })
     .catch(error => alert(error.message))
     
     // some fancy firebase login shitttt.....
}

const register = e => {
    e.preventDefault();
    
    // do some fancy firebase register shitttt....
}

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
                    <input type ='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />
                    
                    <h5> Password </h5>
                    <input type ='password' value={password} onChange=
                    {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
                <button onClick={register}
                className='login_registerButton'>Create your Amazon Account</button>
               
           </div>

        </div>
    )
}

export default Login;
