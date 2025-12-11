import React from 'react'
import './styles/Header.css'
import { FaBars, FaSeedling, FaWallet } from 'react-icons/fa';
import { motion } from 'framer-motion'
import Carousel from './Swiper';
import { useState } from 'react';
import SideNav from './SideNav';
import useWindowSize from './UseWindowSize';
import phone from './assets/canvas.png'
import phone2 from './assets/me.jpg'
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
function Header() {
  const navigate = useNavigate()
  const {width} = useWindowSize()
  const [sidNavOpen , setSideNavOpen] = useState(false)
  const handleOpenSidebar = () => {
    setSideNavOpen(!sidNavOpen)
    console.log('sidebar is open')
  }

  return (
   <div>
    {
      width  && <>
      <div className="hero">
       <Menu/>
      {
      sidNavOpen && <SideNav isOpen= {sidNavOpen} onClose={handleOpenSidebar}/>
      }
     <section className="hero-content" style={{marginTop : '0rem'}}>
     {
      width > 768 ? <>
       <motion.div 
        className="text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} 
      >
       <h1 className='title' style={{lineHeight : '3rem'}}>Finance, Simplified</h1>  
       <p style={{ lineHeight: '2rem' }}>
       Take control of your financial life with ease and security. Experience fast, reliable services trusted by thousands of satisfied customers.
       </p>
         <Carousel/>
        <motion.button 
          className="cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('createAccount')}
        >
          Create Account With Us 
        </motion.button>
      </motion.div>
      <motion.div 
        className="visual"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
      <div>
        <img src={width > 768 && phone} alt="Hero Visual" className="hero-image"  style={{height : '600px'}}/>
      </div>
      </motion.div>
      </> :  <>
       <motion.div 
        className="text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} 
      >
       <h1 className='title' style={{lineHeight : '3rem'}}>Finance, Simplified</h1>  
       <p style={{ lineHeight: '2rem' }}>
       Take control of your financial life with ease and security. Experience fast, reliable services trusted by thousands of satisfied customers.
       </p>
        <motion.div 
        className="visual"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
      <div>
        <img src={width < 768 && phone2} alt="Hero Visual" className="hero-image"  style={{height : '600px' , marginBottom : '2rem'}}/>

      </div>
      </motion.div>
        <motion.button 
          className="cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('createAccount')}
        >
          Create Account With Us 
        </motion.button>
      </motion.div>
      </>
     }
    </section>
    
    </div>
      </> 
    }
   </div>
  );
}

export default Header;