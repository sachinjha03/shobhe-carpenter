import React from 'react'
import "../css/component css/Footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="column" id="column1">
            <h2>Shobhe <span>Carpenters</span></h2>
            <h4>Slogan Goes Here!</h4>
        </div>
        <div className="column" id="column2">
            <h3>Important Links</h3>
            <Link to="/" className='link-a'>Home</Link>
            <Link to="/services" className='link-a'>Service</Link>
            <Link to="/products" className='link-a'>Products</Link>
            <Link to="/contact" className='link-a'>Contact</Link>
        </div>
        <div className="column" id="column3">
            <h3>Contact Details</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque quia, ad recusandae quam perspiciatis necessitatibus itaque unde accusamus tempore nobis, exercitationem consequuntur consequatur ab! Sed quibusdam assumenda minima dignissimos.</p>
            <a href="tel:8742920558" className="btn-a">Call Now</a>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>Website Designed & Developed By <a href='https://www.sachinjha.tech/' target='_blank'>Sachin Jha | 2024</a></h4>
      </div>
    </div>
  )
}
