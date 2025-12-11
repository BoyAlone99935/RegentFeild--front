// Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import growth from './assets/growth.jpg'
import secure from './assets/secure.png'
import trust from './assets/trust.jpg'
import always from './assets/always.png'
import "swiper/css";
import "swiper/css/pagination";
import './styles/crousel.css'

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 7000, // 4 seconds each slide
          disableOnInteraction: false,
        }}
        pagination={{
          
        }}
      >
        <SwiperSlide className="cont">
          <div className="slide">
            <div className="image-placeholder">
              <img className="img" src= {growth}></img>
            </div>
            <div>
            <h2 className="heading">Banking made simple</h2>
            <p className="content" style={{fontSize : '0.8rem'}}>Manage all your accounts in one secure platform.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="cont">
          <div className="slide">
            <div className="image-placeholder">
              <img className="img" src= {secure}></img>
            </div>
           <div>
            <h2 className="heading">Grow your wealth confidently</h2>
            <p className="content" style={{fontSize : '0.8rem'}}>Expert investment plans tailored for you.</p>
           </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="cont">
          <div className="slide">
            <div className="image-placeholder">
              <img className="img" src= {always}></img>
            </div>
            <div>
            <h2 className="heading">Acess anytime , Anywhere</h2>
            <p className="content" style={{fontSize : '0.8rem'}}>247 banking from the palm of your hand.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cont">
          <div className="slide">
            <div className="image-placeholder">
              <img className="img" src= {trust}></img>
            </div>
           <div>
            <h2 className="heading">Safe secure & trusted</h2>
            <p className="content" style={{fontSize : '0.8rem'}}>Your money is protected with advanced encryption.</p>
           </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;