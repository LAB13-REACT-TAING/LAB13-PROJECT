import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../utils/firebase/firebase';
import style from './MainPageSlide.module.css';
import './MainPageSlide.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';

// eslint-disable-next-line import/no-duplicates
import contentsMovie01 from '../../assets/images/amugeosdo_02.jpg';
import contentsMovie02 from '../../assets/images/alsseurinjap_02.jpg';
import contentsMovie03 from '../../assets/images/blackdog_02.jpg';
import contentsMovie04 from '../../assets/images/bomulchajgi_02.jpg';
import contentsMovie05 from '../../assets/images/canadacheckin_02.jpg';
import contentsMovie06 from '../../assets/images/hwanhon_02.jpg';
import contentsMovie07 from '../../assets/images/killimanjaro_02.jpg';
import contentsMovie08 from '../../assets/images/maknaeadeul_02.jpg';
import contentsMovie09 from '../../assets/images/nollauntoyoil_02.jpg';
import contentsMovie10 from '../../assets/images/showmethemoney_02.jpg';
import contentsMovie11 from '../../assets/images/sulkkundosi_02.jpg';
import contentsMovie12 from '../../assets/images/teolsaking_02.jpg';
import contentsMovie13 from '../../assets/images/urideurui_02.jpg';
import QuickVodSlide from '../QuickVodSlide/QuickVodSlide';
import PopularProgramSlide from '../PopularProgramSlide/PopularProgramSlide';
import LiveChannel from '../LiveChannel/LiveChannel';
import OnlyTaing from '../OnlyTaing/OnlyTaing';
import Advertisement from '../Advertisement/Advertisement';
import EventSlide from '../EventSlide/EventSlide';
import useDataFilter from '../../hooks/useDataFilter';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function MainPageSlide() {
  const baseUrl = '../src/assets/images/'; // 경로 설정

  const [numberid, setNumberid] = useState(0);

  // const imageCollectionRef = collection(db, 'image');

  // useEffect(() => {
  //   const getImge = async () => {
  //     const data = await getDocs(imageCollectionRef);

  //     // eslint-disable-next-line no-underscore-dangle
  //     // data.docs[1]._document.data.value.mapValue.fields.name.stringValue, 비디오 이름
  //     // eslint-disable-next-line no-underscore-dangle
  //     const qqqqq =
  //       data.docs[2]._document.data.value.mapValue.fields.src.mapValue.fields.slide.stringValue.concat(
  //         '.jpg',
  //       );

  //     console.log(qqqqq);

  //     setImg(`"/assets/images/${qqqqq}"`);
  //     data.docs.filter((element, index) => {
  //       const result =
  //         // eslint-disable-next-line no-underscore-dangle
  //         data.docs[index]._document.data.value.mapValue.fields.src.mapValue
  //           .fields.slide;
  //       if (result !== undefined) {
  //         console.log(result);
  //       }
  //     });
  //   };

  //   getImge();
  // }, []);

  const handleMouseOver = () => {
    navigationPrevRef.current = undefined;
    navigationNextRef.current = undefined;
    setNum(num + 2);

    // console.log(navigationPrevRef);
  };

  const Test1Handler = () => {
    navigationPrevRef.current = null;
    navigationNextRef.current = null;
    setNum(num + 2);
  };

  return (
    <>
      <div className={style.mainBanner}>메인 배너 들어갈 자리 </div>
      <div className="contanier-title" onMouseEnter={handleMouseOver}>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}
          className={style.list_title}
        >
          티빙에서 꼭 봐야하는 콘텐츠
        </h2>

        <Swiper
          style={{
            'margin-bottom': '36px',
            'margin-left': '44px',
            'padding-top': '10px',
          }}
          spaceBetween={10}
          slidesPerView={7.4}
          slidesPerGroup={6}
          navigation
        >
          <SwiperSlide style={{ 'margin-left': '40px' }}>
            <div>
              <img src={contentsMovie02} alt="이미지 사진" />
            </div>

            <div>
              <p className={style.content_name}>아무것도 하고 싶지 않아</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie02} alt="이미지 사진" />
            <div>
              <p className={style.content_name}>알쓸인잡</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie03} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie04} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie05} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie06} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie07} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie08} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie09} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie10} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie11} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie12} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie13} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie01} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie02} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie03} alt="이미지 사진" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={contentsMovie04} alt="이미지 사진" />
          </SwiperSlide>
        </Swiper>
      </div>
      <QuickVodSlide />
      <PopularProgramSlide />
      <LiveChannel />
      <OnlyTaing />
      <Advertisement />
      <EventSlide />
    </>
  );
}
