import React from 'react'
import Navbar from './mcomponents/navbar'
import './Home.css'
import FirstSlider from './mcomponents/FirstSlider'
import SecondSlider from './mcomponents/SecondSlider'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='mainCntr'>
          <FirstSlider />
          <SecondSlider />
          <Outlet />
        </div>
    </div>
  )
}
