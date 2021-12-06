import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className='header'>
        <img className="header_logo"  src="amazon_PNG11.png" alt=""/>
        <div
        className="header_searh">
            <input
            className="header_searchInput"
            type="text"/>
            <SearchIcon
            className="header_searchIcon"/>
            {/*logo*/}
            </div>

            <div className="header_nav">
                <div className='header-option'>
                    <span className='header-OptionLineOne'> Hello Guest</span>
                    <span className='header-OptionLineTwo'> Sign In</span>
                </div>
               
                <div className='header-option'>
                    <span className='header-OptionLineOne'> Returns</span>
                    <span className='header-OptionLineTwo'>&Orders</span>
                </div> 

                <div className='header-option'>
                    <span className='header-OptionLineOne'> Your</span>
                    <span className='header-OptionLineTwo'> Prime</span>
                </div>


            </div>
        </div>
    )
}

export default Header
