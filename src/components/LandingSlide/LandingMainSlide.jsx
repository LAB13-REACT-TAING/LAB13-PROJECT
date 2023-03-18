import { useLayoutEffect, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, A11y } from 'swiper';
import { useReadData } from '../../utils/firebase/firestore';
import banner01 from '../../assets/images/bomulchajgi_06.jpg';
import './LandingMainSlide.css';
import 'swiper/css';

export default function LandingMainSlide() {
  const [images, setImages] = useState('');
  const { readData, data } = useReadData('image');
  const baseUrl = '../src/assets/images/';

  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('imageState', JSON.stringify({ image: data }));
      setImages(JSON.parse(localStorage.getItem('imageState')));

    }

  }, [data]);

  console.log(images);

  return (
    <Swiper
      style={{ height: '583px' }}
      slidesPerView="auto"
      spaceBetween={0}
      centeredSlides
      // releaseonedges
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
