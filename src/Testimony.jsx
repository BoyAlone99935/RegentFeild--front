import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "./UseWindowSize";
import "swiper/css";
import image1 from "./assets/img1.jpg";
import image2 from "./assets/img2.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img4.jpg";
import image5 from "./assets/img5.jpg";
import image6 from "./assets/img6.jpg";
import lastWun from "./assets/lastWun.jpg";
import client1 from "./assets/client1.webp";
import client2 from "./assets/client2.webp";
import client3 from "./assets/client3.webp";
import client4 from "./assets/client4.jpg";
import client5 from "./assets/client5.jpg";
import client6 from "./assets/hero-stuff.jpg";
import investopedia from "./assets/investopedia.svg";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "John Doe", text: "Elite Finance  transformed my investment experience.", year: "2020", img1: image1, img2: client1 },
  { id: 2, name: "Sarah Johnson", text: "Elite Finance  makes managing finances stress-free.", year: "2018", img1: image2, img2: client2 },
  { id: 3, name: "Michael Lee", text: "Elite Finance 's insights and tools are unmatched.", year: "2016", img1: image3, img2: client3 },
  { id: 4, name: "Emily Chen", text: "Elite Finance 's platform is simple and effective.", year: "2022", img1: image4, img2: client4 },
  { id: 5, name: "David Kim", text: "Elite Finance 's customer support is top-notch.", year: "2019", img1: image5, img2: client5 },
  { id: 6, name: "Jane Smith", text: "Elite Finance  helped me reach my financial goals.", year: "2021", img1: image6, img2: client6 }
];




  const stats = [
    { number: "$42M+", label: "Assets" },
    { number: "11+", label: "Financial Expertise"},
    { number: "80K+", label: "Active Investors" },
    { number: "100%", label: "Uptime Guaranteed" },
  ];


export default function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];
  const {width} = useWindowSize();
  return (
   <>
     <section className="testimonials">
      <div className="testimonial-container">
        <div style={{ textAlign: "center", marginBottom: "2rem", marginTop: "4rem" }}>
          <FaQuoteLeft />
          <h1 style={{ textAlign: "center", marginLeft: "0.5rem", width: "500px" }} className="title">
            Your partner in financial success.
          </h1>
          <img src={investopedia} alt="Investopedia Logo" />
          <p>2025</p>
        </div>

      
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
    
            <motion.img
              key={`bg-${activeTestimonial.id}`}
              src={activeTestimonial.img2}
              alt="Background"
              className="test-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />

      
            <motion.div
              className="testimonial-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                key={`profile-${activeTestimonial.id}`}
                src={activeTestimonial.img1}
                alt={activeTestimonial.name[0]}
                className="profile-pic"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="text-container">
                <p  className="text">{
                    width > 450 ? 
                    activeTestimonial.text :
                    `${activeTestimonial.text.slice(0, 45)}...`
                  }</p>
                <span className="det">
                  - {activeTestimonial.name} | {`client since ${activeTestimonial.year}`}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    <section className="metrics">
  <div className="metrics-wrapper">
    {stats.map((item, index) => (
      <div key={index} className="metric-card">
       <div>
        <h2 className="metric-value">{item.number}</h2>
        <p className="metric-title">{item.label}</p>
       </div>
      </div>
    ))}
  </div>
</section>
  <span style={{ fontSize: "0.7rem", color: "gray",  display: "block", width: "80%", marginLeft: "auto", marginRight: "auto", marginBottom: "4rem" }} className="disclaimer">
    The testimonials above are by clients of Elite Finance  Advisers and Elite Finance  Brokerage. No compensation was provided. These testimonials may not be representative of other clients’ experience. Past performance is no guarantee of success. Investopedia receives compensation from Elite Finance  Advisers for advertising, which presents a conflict of interest. The endorsements provided are independent and not directly influenced by the compensation. There is no other affiliation between Investopedia and Elite Finance  Advisers, and Investopedia is not a client of Elite Finance  Advisers.
  </span>  
  </section>
  <div className="cta-container">
     {
      width > 450 ? <>
      <span className="cta-text">
        save and invest
      </span> <span className="whats-nxt">
        for what’s  next
      </span>
      </> : <>
       <div>
        <span className="cta-text">
        save and invest
      </span></div> 
      <div>
         <span className="whats-nxt">
        for what’s  next
      </span>
      </div>
      </>
     }
    <div>
       <button className="cta-button">Open account</button>
    </div>
  </div>
   </>
  );
}