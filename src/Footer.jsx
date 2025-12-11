import React from 'react';
import './styles/Footer.css'; // Make sure to create this CSS file
import { FaFacebook, FaTwitter , FaInstagram , FaLinkedinIn , FaYoutube, FaPeopleArrows, FaLongArrowAltRight, FaLongArrowAltUp } from 'react-icons/fa';
import companyLogo from './assets/cropped2.png'
import Disclaimer from './Disclaaimer';
import { useState } from 'react';
const Footer = () => {
  const [more , setMore] = useState(false)
  const handleToggle = () => {
    setMore(!more)
  }
  return (
   <div className='general'>
     <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src = {companyLogo} style={{width : '200px' , marginTop : '1rem'}}/>
          <p>Your trusted partner in financial growth.</p>
          <button className='subscribe'>
            Subscribe
          </button>
          <div className='socials'>
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedinIn/>
            <FaYoutube/>
            <FaTwitter/>
          </div>
          
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Savings Accounts</li>
              <li>Investment Plans</li>
              <li>Loans & Credit</li>
              <li>Retirement Plans</li>
              <li>Insurance</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Customer Service</li>
              <li>Security & Privacy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Regulatory Info</li>
            </ul>
          </div>
        </div>
      </div>
     <div className='desc-cont'>
      <div style={{display : 'flex' , gap : '0.5rem' , alignItems : 'center'}}>
         <span onClick={handleToggle} style={{cursor : 'pointer'}}>{
        more ? 'Collapse' : 'Read More'
      }</span> {
        more ? <FaLongArrowAltUp/>  :  <FaLongArrowAltRight style={{color : 'white'}}/>
      }
      </div>
      {
        more && <Disclaimer/>
      }
     </div>
     
    </footer>
    {
      !more &&  <div className='copyrightContainer'>
        <span style={{color : 'white'}}>{
        !more && ' © 2025 Elite Finance. All rights reserved.'
      }</span>
     </div>
    }
   </div>
    
  );
};
 
export default Footer;


