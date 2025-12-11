import React from 'react'
import Services from './Services'
import Why from './Why'
import Empower from './Empower'
import Stat from './Stat'
import Ready from './Ready'
import img from './assets/anoda.jpg'
import close from './assets/close.jpg'
import lastWun from './assets/lastWun.jpg'
import { motion } from 'framer-motion'
import Testimony from './Testimony'
import Affilation from './Affilation'
import FAQ from './faq'
import Blog from './Blog'
import Footer from './Footer'
import ScrollTop from './scrollUp'
import Carousel from './Swiper'
import useWindowSize from './UseWindowSize'
function Content() {
  const {width} = useWindowSize()
  const FadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className='container'>
  
      <Why/>
      <Empower/>
     <div style={{background : '#f8f9fa'}}>
       {
        width < 450 &&  <Carousel/>
      }
     </div>
      <Stat/>
      <Ready/>
      <motion.section 
        class="feature-section"
        variants={FadeUp}
        initial="hidden"
        whileInView = 'visible'
        viewport={{ once: true, amount: 0.2 }}>
        <div class="text-content">
          <h2>Your Trusted Financial Partner</h2>
          <p>
            Elite Finance  combines decades of banking and investment expertise to give you a secure and reliable platform for managing your money. From daily banking to long-term investments, we provide the tools, insights, and guidance you need to make informed financial decisions and grow your wealth confidently.
          </p>
        </div>
        <div class="image-content">
          <img src= {img} alt="Financial growth illustration or dashboard" />
        </div>
      </motion.section>

      <motion.section class="feature-section"
       variants={FadeUp}
        initial="hidden"
        whileInView = 'visible'
        viewport={{ once: true, amount: 0.2 }}>
        <div class="text-content">
          <h2>Empowering Your Financial Future</h2>
          <p>
            At Elite Finance , we provide more than just banking  we deliver a platform built for growth and opportunity. From personalized investment options to seamless banking services, we equip you with the insights, tools, and strategies you need to take control of your finances and build a future you can trust.
          </p>
        </div>
        <div class="image-content">
          <img src= {close} alt="Investments and banking illustration or dashboard" />
        </div>
      </motion.section>
      <motion.section class="feature-section"
          variants={FadeUp}
          initial="hidden"
          whileInView = 'visible'
          viewport={{ once: true, amount: 0.2 }}>
        <div class="text-content">
          <h2>Seamless Banking Meets Smart Investing</h2>
          <p>
            Elite Finance  brings together the best of banking and investment in one platform. Effortlessly manage your accounts, track your investments, and explore new opportunitiesall with intuitive tools and real-time insights that help you make smarter financial decisions every day.
          </p>
        </div>
        <div class="image-content">
          <img src= {lastWun} alt="Banking and investment dashboard illustration" />
        </div>
      </motion.section>   
     <Testimony/>
     <Blog/>
     <Affilation/>
     <FAQ/>
     <ScrollTop/>
     <Footer/>
    </div>
  )
}

export default Content
