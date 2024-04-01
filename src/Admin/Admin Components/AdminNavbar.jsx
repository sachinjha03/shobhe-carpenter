import React from 'react'
import "../Admin Css/AdminNavbar.css"
export default function AdminNavbar() {
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
        window.location.href = "/"
    }
  return (
    <div className='admin-navbar'>
        <h3>Admin Dashboard</h3>
        <button className="btn-a" onClick={handleLogout}>Logout</button>
    </div>
  )
}
