import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='container'>navbar
    
    <button className='but1'> <NavLink to="/t1">t1</NavLink></button>
    <button className='but2'><NavLink to="/t2">t2</NavLink></button>
    <button className='but2'><NavLink to="/t3">t3</NavLink></button>
    <button className='but2'><NavLink to="/t4">t4</NavLink></button>
    
    
    
    </div>
  )
}

export default Navbar