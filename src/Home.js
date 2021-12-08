import React from 'react'
import'./Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
        <div className="home_container">
            <img className="home_image"
            src="div_ ).jpg"
            alt=""/>
            <div className="home_row">
            <Product 
            id="12321341"
            tittle="The Lean Startup: How Constant Radically Successful Buisness Paperback"
            price={19.99}
            image="12969026.jpg"
            rating={5}/>
            <Product
            id="49538094"
            tittle="Kenwood kMix Stand Mixer for Baking, stylish Kitchen Mixer with K-beater.dough Hook and whisk, 5 Littre Glass Bowl"
            price="{200}"
            rating={4}
            image="61etD4-IrPL.jpg"
            />
            </div>

            <div className="home_row">
            <Product 
            id="4903850"
            tittle="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="Simple-women-watch-Hand-Ring-Watch-Led-Sports-Fashion-Electronic-Watch-Reloj-deportivo-para-mujer-Electronics.jpg"
            />

            <Product 
            id="23445930"
            tittle="Amazon Echo ( 3rd Generation ) I Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="B07P4DKX14_1_Supersize.jpg"
            />

            <Product
            id="3254354345"
            tittle=" New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver ( 4th Generation)"
            price={598.99}
            rating={4}
            image="download (1).jpg"
            />
            </div>

            <div className="home_row">
            <Product
            id="90829332"
            tittle="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wide Dual WQHD 5120X1440"
            price={1094.98}
            rating={4}
            image="81rus0UFhsL._AC_SX450_.jpg"
            /></div>
s
            </div>   
        </div>
    )
}

export default Home
