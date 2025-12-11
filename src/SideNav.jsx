import { useEffect } from "react";
import "./styles/sidenav.css";
import companyLogo from './assets/cropped2.png'
import { FaArrowRight, FaLongArrowAltRight, FaPlus, FaTimes } from "react-icons/fa";
import { color } from "framer-motion";
function SideNav({ isOpen, onClose }) {
 
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
   <>
     <div className={`sidenav ${isOpen ? "active" : ""}`}>
     <div className="sidebar-hero">
       <img src={companyLogo}  style={{width : '200px' , marginBottom : '1rem'}}/>
      <FaTimes onClick={onClose}  color="white" className="close"/>
     </div>
     <nav>
  <ul>
    <li className="list"><a href="#" style={{color : 'white'}}>Home</a> <FaPlus color="white"/></li>
    <li className="list"><a href="#" style={{color : 'white'}}>About</a> <FaPlus  color="white"/></li>
    <li className="list"><a href="#" style={{color : 'white'}}>Services</a> <FaPlus  color="white"/></li>
    <li className="list"><a href="#" style={{color : 'white'}}>Contact</a> <FaPlus  color="white"/></li>
    <li className="list"><a href="#" style={{color : 'white'}}>Blog</a> <FaPlus  color="white"/></li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" style={{color : 'white'}}>Socials</a>
      <FaPlus  color="white"/>
      <ul class="dropdown-menu">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </li>
  </ul>
</nav>
    <div className="subs">
      <div style={{display : 'flex' , alignItems : 'center' , gap : '0.4rem'}}>
        <h4 >Join the Elite community</h4>
        <FaLongArrowAltRight/>
      </div>
      <p>Subscribe for latest insights and aand company updates from Elite Finance</p>
      <button>Subscribe</button>
    </div>

    <div style={{paddingBottom : '2rem'}} className="cta-btns">
      <button>Create Investor Account</button>
      <button>Log In</button>
    </div>
    
    </div>
   
   </>
  );
}

export default SideNav;