import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./styles/Stat.css";
import { FaArrowRight } from "react-icons/fa";

const statsData = [
  { value: 80000, suffix: "+", label: "Customers Worldwide" },
  { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  { value: 42, suffix: "M+", label: "Assets Under Management" },
];

export default function Stat() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="stats" ref={ref}>
      <div>
      <div className="intro-text">
        <p className="head-text">We Are Financial Experts</p>
        <div>
          <p className="sub-txt" style={{ marginTop : '3rem' , fontSize : '1.2rem' , lineHeight: '2rem'}}>
           As global finance evolves, Elite Finance  stands at the forefront, guiding investors through both traditional and digital markets. Our team of seasoned experts across investment, banking, technology, and policy delivers innovative solutions, strategic insights, and educational resources, empowering clients to grow their wealth securely and confidently in every asset class.

       </p>
       <p style={{display : 'flex' , alignItems : 'center' , gap : '0.6rem'}}><a href="$">LEARN MORE ABOUT OUR SERVICES</a><FaArrowRight/></p>
        </div>
      </div>
      
    </div>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-box" key={index}>
            <p className="stat-number">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  suffix={stat.suffix}
                />
              ) : (
                0
              )}
            </p>
            <p stat-box-txt>{stat.label}</p>
          </div>
        ))}
      </div>
      <p style={{marginTop : '2rem' , color : 'grey'}}>*As of 08/21/2025</p>
    </section>
  );
}
