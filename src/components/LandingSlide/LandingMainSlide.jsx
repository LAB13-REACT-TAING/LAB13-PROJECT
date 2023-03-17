import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, A11y } from 'swiper';
import banner01 from '../../assets/images/bomulchajgi_06.jpg';
import './LandingMainSlide.css';

import 'swiper/css';

export default function App() {
  return (
    <Swiper
      style={{ height: '583px' }}
      slidesPerView="auto"
      spaceBetween={0}
      centeredSlides
      releaseOnEdges
      mousewheel
      keyboard={{
        enabled: true,
      }}
      modules={[Mousewheel, Keyboard, A11y]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          marginLeft: '24px',
        }}
      >
        <img src={banner01} alt="이미지" />
      </SwiperSlide>
      <SwiperSlide
        style={{
          marginLeft: '24px',
        }}
      >
        <img src={banner01} alt="이미지" />
      </SwiperSlide>
      <SwiperSlide
        style={{
          marginLeft: '24px',
        }}
      >
        <img src={banner01} alt="이미지" />
      </SwiperSlide>
      <SwiperSlide
        style={{
          marginLeft: '24px',
        }}
      >
        <img src={banner01} alt="이미지" />
      </SwiperSlide>
      <SwiperSlide
        style={{
          marginLeft: '24px',
        }}
      >
        <img src={banner01} alt="이미지" />
      </SwiperSlide>
      <SwiperSlide
        style={{
          marginLeft: '24px',
        }}
      >
        <img src={banner01} alt="이미지" />
      </SwiperSlide>
      
    </Swiper>
  );
}
