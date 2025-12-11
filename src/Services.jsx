
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaUserAlt, FaMoneyBill, FaChartLine, FaBriefcase, FaChevronLeft, FaChevronRight, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import "./styles/Services.css";
import { LuArrowBigRight } from "react-icons/lu";
import ScrollButtons from "./ScrollDown";

export default function ServicesSlider() {
  const services = [
    {
      id : 1,
      title: "Wealth Management",
      description: "Tailored strategies to help you grow, preserve, and transfer wealth effectively through expert financial planning.",
      icon: <FaChartLine />,
    },
    {
      id : 2,
      title: "Credit & Financing",
      description: "Flexible credit lines, personal loans, and financing solutions designed to support your goals and ambitions.",
      icon: <FaMoneyBill />,
    },
    {
      id : 3 ,
      title: "Investment Solutions",
      description: "Access a wide range of investment options from equities to fixed income, guided by expert insights and analytics.",
      icon: <FaBriefcase />,
    },
    {
      id : 4,
      title: "Digital Accounts",
      description: "Seamless and secure digital accounts with tools to manage transactions, track growth, and plan your future.",
      icon: <FaUserAlt />,
    },
  ];

  return (
    <div className="services-section">
     <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
       <h2 className="services-heading">Our Financial Services</h2>
     </div>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
          delay: 10000, // delay in milliseconds
          disableOnInteraction: false,
          }}

          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="services-slider"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
               <div style={{display : 'flex' , alignItems : 'center' , gap : '0.5rem'}}>
                 <Link to={`/serviceDet/${service.id}`}><span>Read more</span></Link>  <FaLongArrowAltRight/>
               </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


