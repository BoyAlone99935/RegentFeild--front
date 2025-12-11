import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import visa from './assets/visa.png'
import binance from './assets/binance.png'
import notron from './assets/notron.png'
import mcaffe from './assets/mcaffe.png'
import google from './assets/google.png'
import amazon from './assets/amazon.svg'
import azure from './assets/azure.png'
import bloomberg from './assets/bloomberg.png'
import vanguard from './assets/vanguard.webp'

function Affilation() {
  const logos = [
    { src: visa, alt: 'Visa' },
    { src: binance, alt: 'Binance' },
    { src: notron, alt: 'Norton' },   
    { src: mcaffe, alt: 'McAfee' },  
    { src: google, alt: 'Google Cloud' },
    { src: amazon, alt: 'Amazon Web Services' },
    { src: azure, alt: 'Microsoft Azure' },
    { src: bloomberg, alt: 'Bloomberg' },
    { src: vanguard, alt: 'Vanguard' },
  ]

  return (
    <section style={{ padding: '2rem 0', background: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Swiper
          modules={[Autoplay]}
          loop
          speed={700}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 32 },
            768: { slidesPerView: 4, spaceBetween: 36 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
            1280: { slidesPerView: 6, spaceBetween: 44 },
          }}
          // no navigation or pagination added
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  padding: '0.75rem',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.85,
                    transition: 'filter 200ms ease, opacity 200ms ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)'
                    e.currentTarget.style.opacity = '1'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)'
                    e.currentTarget.style.opacity = '0.85'
                  }} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Affilation