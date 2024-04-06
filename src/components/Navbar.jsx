import React, { useState } from 'react'
import "../css/component css/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Navbar() {
  const [sideMenu , setSideMenu] = useState(false)

  const displaySideMenu = () => {
    setSideMenu(true)
  }

  const hideSideMenu = () => {
    setSideMenu(false)
  }
  
  return (
    <>
    
    <div className='navbar'>
        <div className="navbar-left">
            <h3>Shobhe <span>Carpenters</span></h3>
        </div>
        <div className="navbar-right">
            <Link to="/" className='link-a'>Home</Link>
            <Link to="/services" className='link-a'>Services</Link>
            <Link to="/products" className='link-a'>Products</Link>
            <Link to="/contact" className='link-a'>Contact</Link>
            <Link to="/login" className='link-a btn-a'>Login</Link>
        </div>
        <MenuIcon className='menu-icon' onClick={displaySideMenu}/>
        {sideMenu && <div className="side-menu">
          <Link to="/" className='link-a'>Home</Link>
          <Link to="/services" className='link-a' onClick={hideSideMenu}>Services</Link>
          <Link to="/products" className='link-a' onClick={hideSideMenu}>Products</Link>
          <Link to="/contact" className='link-a' onClick={hideSideMenu}>Contact</Link>
          <Link to="/login" className='link-a btn-a' onClick={hideSideMenu}>Login</Link>
          <CloseIcon onClick={hideSideMenu}/>
        </div>}
    </div>
        <a href="https://wa.me/918742920558" target='_blank' className="whatsapp-icon-box link-a"><WhatsAppIcon className='whatsapp-icon'/></a>
    </>
  )
}
