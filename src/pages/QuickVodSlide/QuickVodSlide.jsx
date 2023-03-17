import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import './QuickVodSlide.css';
// 커밋 내용 컨텐츠 호버했을때 살짝 튀어나오는 효과 및 왼쪽하단에 해당 컨텐츠 상세페이지 링크 출력 #16
import { useReadData } from '../../utils/firebase/index';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function QuickVodSlide() {
  const [VODData, setVODData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  const baseUrl = '../src/assets/images/'; // 경로 설정

  async function handleReadData() {
    // 모든 데이터를 가져옵니다.
    await readData();
  }
  // 필요한 데이터만 뽑기
  useEffect(() => {
    readData();
    const result = data?.filter(ele => ele.src.quickslide);
    setVODData(result);
  }, []);

  return (
    <>
      <div>
        <h2 style={{ 'margin-left': '60px', 'margin-bottom': '8px' }}>
          Quick VOD
        </h2>
      </div>

      <Swiper
        style={{ 'margin-bottom': '36px', 'margin-left': '44px' }}
        spaceBetween={10}
        slidesPerView={5.2}
        slidesPerGroup={5}
        navigation
      >
        {VODData?.map(contents => (
          <SwiperSlide>
            <div>
              <Link to={`${contents.src.quickslide}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.quickslide}.jpg`}
                  alt={`${contents.name}`}
                />
                <p className="contentsName">{contents.name}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
