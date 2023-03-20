import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import useDataMain from '../../hooks/useDataMain';

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './MainNavPage.module.css';

export default function UseDataFilter() {
  const imagedatas = useDataMain();
  const slides = [
    {
      id: 'slide-1',
      description: '테스트용1',
      link: '/sample/1',
    },
    {
      id: 'slide-2',
      description: '테스트용2',
      link: '/sample/2',
    },
    {
      id: 'slide-3',
      description: '테스트용3',
      link: '/sample/3',
    },
    {
      id: 'slide-4',
      description: '테스트용4',
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
        {imagedatas.map(url => {
          const baseUrl = '../src/assets/images/';
          const src = `${baseUrl}${url}.jpg`;
          return (
            <SwiperSlide key={slides.id} className={style.swiperSlide}>
              <img src={src} alt="이미지" />
              <div className={style.contents}>
                <p className={style.contents_text}>{slides.description}</p>
                <a className={style.contents_button} href={slides.link}>
                  자세히 보기
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
