import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import blogPosts from "./datastr";
import './styles/blog.css';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function BlogSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
   
    setSwiperReady(true);
  }, []);

  return (
    <div className="blog-slider-container">
      <h2 style={{textAlign : 'center'}} className="cta-text">Elite Finance Journal</h2>
      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="blog-swiper"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="blog-slide">
                <img src={post.image} alt={post.title} className="blog-slide-img" />
                <h3 className="blog-slide-title">{post.title}</h3>
                <p className="blog-slide-text">{post.content.substring(0, 120)}...</p>
                <Link className="blog-slide-link" to={`/blogDet/${post.id}`}>Read More</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

   
      <LuChevronLeft ref={prevRef} className="blog-slider-prev" />
      <LuChevronRight ref={nextRef} className="blog-slider-next" />
    </div>
  );
}