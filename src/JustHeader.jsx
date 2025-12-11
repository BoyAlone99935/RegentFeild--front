import React from 'react'
import { FaBars } from 'react-icons/fa'
import './styles/Header.css'
import './styles/sidenav.css'
import companyLogo from './assets/cropped2.png'
import SideNav from './SideNav'
import { useState } from 'react'
function JustHeader() {
    const [sidNavOpen , setSideNavOpen] = useState(false)
    const handleOpenSidebar = () => {
      setSideNavOpen(!sidNavOpen)
      console.log('sidebar is open')
    }
  return (
    <div>
      <nav className="nav3">
        <img src={companyLogo}  style={{width : '200px'}}/>
        <FaBars style={{ color: 'white'  , fontSize : '1.6rem' , width : '2rem'}} onClick={handleOpenSidebar}/>
      </nav>
      {
      sidNavOpen && <SideNav isOpen= {sidNavOpen} onClose={handleOpenSidebar}/>
      }
    </div>
  )
} 

export default JustHeader
