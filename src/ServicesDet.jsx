import React from "react";
import { useParams } from "react-router-dom";
import serviceDetails from "./serviceDetData";
import JustHeader from "./JustHeader";
import Footer from "./Footer";
import './styles/ServiceDet.css'

function ServicesDet() {
  const { id } = useParams();
  const service = serviceDetails.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div className="service-not-found">Service not found.</div>;
  }

  return (
    <>
     <div className="services-detail">
      <JustHeader />

   
      <div className="service-hero">
        <img src={service.image} alt={service.title} className="service-hero-img" />
        <div className="service-hero-overlay">
          <p className="service-hero-title">{service.title}</p>
          <p className="service-hero-overview">{service.overview}</p>
        </div>
      </div>

      
      <div className="service-content">
        <div style={{marginBottom : '2rem'}}>
          <p className="section-heading">{service.sectionHeading}</p>
          <p>
            {service.longDescription}
          </p>
        </div>
        {service.sections.map((section, index) => (
          <div key={index} className="service-section">
            <h2 className="service-section-title">{section.heading}</h2>
            <ul className="service-section-list">
              {section.points.map((point, i) => (
                <li key={i} className="service-point">
                  <span className="bullet" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ServicesDet;