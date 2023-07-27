import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-main">
        <Link to="/">Home</Link>
        <Link to="/add">Ajout Recette</Link>
    </div>
  )
}

export default Navbar