import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './MainNavPage.module.css';

import slideImage1 from '../../assets/images/maknaeadeul_01.jpg';
import slideImage2 from '../../assets/images/bodyvalue_03.jpg';

export default function App() {
  // 커밋 수정용
  const slides = [
    {
      id: 'slide-1',
      image: slideImage1,
      description: '인생 1회차를 사는 판타지 드라마',
      link: '/sample/1',
    },
    {
      id: 'slide-2',
      image: slideImage2,
      description: '인생 2회차를 사는 판타지 드라마',
      link: '/sample/2',
    },
    {
      id: 'slide-3',
      image: slideImage1,
      description: '인생 3회차를 사는 판타지 드라마',
      link: '/sample/3',
    },
    {
      id: 'slide-4',
      image: slideImage1,
      description: '인생 4회차를 사는 판타지 드라마',
      link: '/sample/4',
    },
  ];

  return (
    <div className={style.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        speed={400}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onMouseEnter={{
          pauseOnMouseEnter: true,
        }}
        loop
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={style.swiper}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className={style.swiperSlide}>
            <img src={slide.image} alt="" />
            <div className="contents">
              <p className="contents-text">{slide.description}</p>
              <a href={slide.link}>자세히 보기</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
