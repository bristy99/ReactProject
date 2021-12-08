import './Header.css'

import { Link } from 'react-router-dom';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue ();
    return (
        <div className='header'>
        <Link to ="/">
        <img 
        className="header_logo"  
        src="amazon_PNG11.png" alt=""
        />
        </Link>

        <div
        className="header_search">
            <input
            className="header_searchInput"
            type="text"/>
            <SearchIcon
            className="header_searchIcon"/>
            {/*logo*/}
            </div>

            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_OptionLineOne'> Hello Guest</span>
                    <span className='header_OptionLineTwo'> Sign In</span>
                </div>
               
                <div className='header_option'>
                    <span className='header_OptionLineOne'> Returns</span>
                    <span className='header_OptionLineTwo'>& Orders</span>
                </div> 

                <div className='header_option'>
                    <span className='header_OptionLineOne'> Your</span>
                    <span className='header_OptionLineTwo'> Prime</span>
                </div>
                
                <Link to ="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_OptionLineTwo header_basketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>


            </div>
        </div>
    )
}

export default Header
