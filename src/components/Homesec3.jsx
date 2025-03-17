


import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from "../assets/slider/slide1.jpeg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
import slide4 from "../assets/slider/slide4.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';

import { Pagination } from 'swiper/modules';

const Homesec3 = () => {
  return (
    <section className="homesec3" id='latest'>
      <Container>
        <div className='lll'>
            <h2 className="text">Latest builds.</h2>
            <div className="mb-4">
            <Link to="/projects" className="link">View Projects</Link>
            </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="Slide 1" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Slide 2" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Slide 3" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="Slide 4" className="slider-img" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Homesec3;
