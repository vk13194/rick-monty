import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav  className="navbar navbar-expand navbar-light bg-light mb-5" >
        <Link to="/" className="navbar-brand" >Rick And Mornty</Link>  
       
       <ul className="navbar-nav ml-auto" > 
       <li className="nav-item">
        <Link to="/" className="nav-link" >Home</Link>
       </li>
       <li className="nav-item">
        <Link to="/about" className="nav-link" >About</Link>
       </li>
       </ul>

        </nav>
    )
}

export default Navbar
