import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import './OnlyTaing.css';
import { useReadData } from '../../utils/firebase/index';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function OnlyTaing() {
  const baseUrl = '../src/assets/images/'; // 경로 설정
  const [filterData, setfilterData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('onlyState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('onlyState'));
      const datas = records?.image?.filter(item => {
        return item.src?.only !== undefined;
      });

      setfilterData(datas);
    }
  }, [data, readData]);
  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '8px' }}
          className="list_title"
        >
          오직 티빙에만 있습니다.
        </h2>
      </div>
      <Swiper
        style={{
          'margin-bottom': '36px',
          'margin-left': '44px',
          'padding-top': '10px',
        }}
        spaceBetween={10}
        slidesPerView={6.4}
        slidesPerGroup={6}
        navigation
      >
        {filterData?.map(contents => (
          <SwiperSlide key={contents.id}>
            <div>
              <Link to={`${contents.src.only}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.only}.jpg`}
                  alt={`${contents.name}`}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
