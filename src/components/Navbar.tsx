import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-menu'>
            <div className='nav-select'>
                <select id="language">
                    <option value="value1">English</option>
                    <option value="value2">Hindi</option>
                </select>
                <select id="currency">
                    <option value="value1">USD $</option>
                    <option value="value2">Rupees &#x20B9;</option>
                </select>
            </div>
            <div className='nav-links'>
                <Link to={'/myaccount'}> My Account </Link> <p>|</p> 
                <Link to={'/checkout'}> Checkout </Link><p>|</p>
                <Link to={'/login'}> Sign In </Link>
            </div>            
        </div>
        <div className='nav-title'>
            <div className='nav-search'>
                <input type='text' placeholder='search for catalog'/>
                <button><SearchIcon /></button>                
            </div>
            <div className='title'>
                <h1>WatchVista</h1>
            </div>
            <div className='nav-cart'>
                <LocalMallOutlinedIcon />
                <p>0</p>
                <h2>My Cart</h2>
                <p>$0.00</p>
            </div>
        </div>
        <div className='menu'>
            <Link to={'/'}>Home</Link>
            <Link to={'/watch'}>Watch</Link> 
            <Link to={'/digital-watch'}>Digital Watches</Link>            
            <Link to={'/smart-watch'}>Smart Watches</Link>            
            <Link to={'/top-seller'}>Top Seller</Link> 
        </div>
    </div>
  )
}

export default Navbar