import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import styles from './QuickVodSlide.module.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';

import quickVod01 from '../../assets/images/almaengi_02.jpg';
import quickVod02 from '../../assets/images/chainaneun _02.jpg';
import quickVod03 from '../../assets/images/eommauibomnal_02.jpg';
import quickVod04 from '../../assets/images/geongangmyeonsae_02.jpg';
import quickVod05 from '../../assets/images/jtbcnewsroom_02.jpg';
import quickVod06 from '../../assets/images/narosalgiro_02.jpg';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function QuickVodSlide() {
  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}
          className={styles.list_title}
        >
          Quick VOD
        </h2>
      </div>

      <Swiper
        style={{ 'margin-bottom': '36px' }}
        spaceBetween={10}
        slidesPerView={5.2}
        slidesPerGroup={5}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ 'margin-left': '40px' }}>
          <img src={quickVod01} alt="이미지 사진" />
        </SwiperSlide>

        <SwiperSlide style={{ 'margin-right': '4px' }}>
          <img src={quickVod02} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide style={{ 'margin-right': '0' }}>
          <img src={quickVod03} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={quickVod04} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={quickVod05} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={quickVod06} alt="이미지 사진" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
