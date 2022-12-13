import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
        <div className='navbar bor'>
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="about">About us</NavLink>
            <NavLink className='nav-link' to="contact">Contact us</NavLink>
        </div>
  )
}
