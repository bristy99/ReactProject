import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className='header'>
        <img className="header_logo"  src="amazon_PNG11.png" alt=""/>
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


            </div>
        </div>
    )
}

export default Header
