import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'
import './navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='nav-contianer'>
              <div className='first'>
                <img src="../images/bms.png" alt="" />
                {/* <img src="https://png.pngtree.com/png-vector/20200921/ourlarge/pngtree-red-and-black-logo-png-image_2348180.jpg" alt="" /> */}
                <input type="text" placeholder='Search for Movies, Events, Plays, Sports and Activities'/>
                <span style={{color: "red"}}>404 website under construction</span>
              </div>
              
              <div className='second'>
                <div className='nav-c'>
                Mumbai
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                </div>
                <div className='nav-c'><button>Sign in</button></div>
                <div className='nav-c'>
                  <DehazeIcon />
                </div>
              </div>
            </div>

            <div className='nav-contianer-flex'>
              <div className='nav-contianer'>
                <div className='first'>
                  <NavLink className='nav-link' to="/">Home</NavLink>
                  <NavLink className='nav-link' to="movies">Movies</NavLink>
                  <NavLink className='nav-link' to="abc">Stream</NavLink>
                  <NavLink className='nav-link' to="abc">Events</NavLink>
                  <NavLink className='nav-link' to="abc">Plays</NavLink>
                  <NavLink className='nav-link' to="abc">Sports</NavLink>
                  <NavLink className='nav-link' to="abc">Activities</NavLink>
                  <NavLink className='nav-link' to="abc">Buzz</NavLink>
                </div>
                <div className='second'>
                  <NavLink className='nav-link' to="abc">Corporates</NavLink>
                  <NavLink className='nav-link' to="abc">Offeres</NavLink>
                  <NavLink className='nav-link' to="abc">Gift Cards</NavLink>
                </div>
              </div>
            </div>

        </div>
        <Outlet />
        <Footer />
    </>
  )
}
