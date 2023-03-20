import { useLayoutEffect, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, A11y } from 'swiper';
import { useReadData } from '../../utils/firebase/firestore';
import './LandingMainSlide.css';
import 'swiper/css';

export default function LandingMainSlide() {
  const [images, setImages] = useState([]);
  const { readData, data } = useReadData('image');

  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('imageState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('imageState'));
      const datas = records?.image
        ?.filter(item => {
          return item.src?.rendingfunny !== undefined;
        })
        .map(item => {
          return item.src?.rendingfunny;
        });
      setImages(datas.slice(0, 4));
    }
  }, [data, readData]);

  console.log('images', images);

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
      {images.map(url => {
        const baseUrl = '../src/assets/images/';
        const src = `${baseUrl}${url}.jpg`;
        const style = { marginLeft: '24px' };

        return (
          <SwiperSlide style={style}>
            <img src={src} alt="이미지" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}