import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-menu'>
            <Link to={'/'}>Home</Link><p>|</p>            
            <Link to={'/'}>New Products</Link><p>|</p>
            <Link to={'/'}>About</Link><p>|</p>
            <Link to={'/'}>Shop</Link><p>|</p>
            <Link to={'/'}>Contact</Link>
        </div><hr />
        <div className='footer-content'>
            <div className='products'> 
                <h2>Products</h2>
                <Link to={'/'}>About Us</Link>            
                <Link to={'/'}>Prices Drop</Link>
                <Link to={'/'}>New Products</Link>
                <Link to={'/'}>Best Sales</Link>
            </div>
            <div className='our-company'>
                <h2>Our Company</h2>
                <Link to={'/'}>Contact Us</Link>            
                <Link to={'/'}>Sitemap</Link>
                <Link to={'/'}>Stores</Link>
                <Link to={'/'}>My Account</Link>
            </div>
            <div className='account'>
                <h2>Account</h2>
                <Link to={'/'}>Addresses</Link>            
                <Link to={'/'}>Credit Slips</Link>
                <Link to={'/'}>Orders</Link>
                <Link to={'/'}>Personal Info</Link>
            </div>
            <div className='store-info'>
                <h2>Store Information</h2>
                <h4>My Company</h4>
                <p>1-83 somenagar Hyderabad Telangana</p>
                <h4>Call us now: +91-9278653263</h4>
                <h4>Email: support@watchvista.com</h4>
            </div>
        </div> <hr />
        <div className='footer-copyright'>
            <div>
                <p>Store Copy Rights.</p>
                <p>&copy; Ravi. | All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer