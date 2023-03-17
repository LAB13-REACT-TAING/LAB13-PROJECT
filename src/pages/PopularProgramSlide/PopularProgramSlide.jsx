import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import { useReadData } from '../../utils/firebase/index';
import './PopularProgramSlide.css';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function PopularProgramSlide() {
  const [filterData, setfilterData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  const baseUrl = '../src/assets/images/'; // 경로 설정

  async function handleReadData() {
    // 모든 데이터를 가져옵니다.
    await readData();
  }
  // 필요한 데이터만 뽑기
  useEffect(() => {
    readData();
    const result = data?.filter(ele => ele.src.slide);
    setfilterData(result);
  }, []);

  return (
    <div className="swiper-title">
      <h2
        style={{ 'margin-left': '60px', 'margin-bottom': '8px' }}
        className="list_title"
      >
        티빙에서 꼭 봐야하는 콘텐츠
      </h2>

      <Swiper
        style={{ 'margin-bottom': '36px', 'margin-left': '44px' }}
        spaceBetween={10}
        slidesPerView={7.4}
        slidesPerGroup={6}
        navigation
      >
        {filterData?.map(contents => (
          <SwiperSlide>
            <div>
              <Link to={`${contents.src.slide}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.slide}.jpg`}
                  alt={`${contents.name}`}
                />

                <img
                  style={{ 'margin-top': '-24px' }}
                  src="/src/assets/images/numbers/three.png"
                  alt="숫자 사진"
                />
                <p className="contentsName">{contents.name}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
