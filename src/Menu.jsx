import React from 'react'
import { FaAsymmetrik, FaReact } from 'react-icons/fa';
import menu from './assets/slim.png'
import { useState } from 'react';
import './styles/Menu.css'
import useWindowSize from './UseWindowSize';
import arrow from './assets/arrow.png'
import x from './assets/x.png'
function Menu() {
  const [isOpen , setIsOpen] = useState(false)
  const {width} = useWindowSize()
  return (
    <nav className='menu_cont'>
      <div className='menu'>
      
        {<FaReact size={30} color='black'/>}
       {
        isOpen ? <img onClick={() => setIsOpen(!isOpen)} style={{width : '25px' , cursor : 'pointer'}} src={x} alt="Close Menu" /> 
        : <img onClick={() => setIsOpen(!isOpen)} style={{width : '25px' , cursor : 'pointer'}} src={menu} alt="Open Menu" />
       }
      </div>
      {
        isOpen && <div className='dropdown-cc'>
        <div className='dropdown-content'>
       <div className='authButtons'>
        <button className='login'>Login</button>
        <button className='signup'>Sign Up</button>
       </div>

        <div className='links'>
         <div style={{display : 'flex' , alignItems : 'center' , justifyContent: 'space-between'}}> <p> <a href="#services">Home</a></p> <img style={{width : '10px'}} src={arrow} alt="Arrow Icon" /></div>
         <div style={{display : 'flex' , alignItems : 'center' , justifyContent: 'space-between'}}> <p><a href="#about">About Us</a></p> <img style={{width : '10px'}} src={arrow} alt="Arrow Icon" /></div>
          <div style={{display : 'flex' , alignItems : 'center' , justifyContent: 'space-between'}}> <p><a href="#services">Services</a></p> <img style={{width : '10px'}} src={arrow} alt="Arrow Icon" /></div>
          <div style={{display : 'flex' , alignItems : 'center' , justifyContent: 'space-between'}}> <p><a href="#testimony">Testimonies</a></p> <img style={{width : '10px'}} src={arrow} alt="Arrow Icon" /></div>
          <div style={{display : 'flex' , alignItems : 'center' , justifyContent: 'space-between'}}> <p><a href="#faq">FAQ</a></p> <img style={{width : '10px'}} src={arrow} alt="Arrow Icon" /></div>
         
        </div>

        <div className='newsLetter'>
          <h3>Subscribe to our Newsletter</h3>
          <input type="email" placeholder='johnDoe@example.com' />
          <button>Subscribe</button>
        </div>
        </div>
      </div>
      }
    </nav>
  )
}

export default Menu
