import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import { useReadData } from '../../utils/firebase/index';
import './EventSlide.css';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function EventSlide() {
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
      localStorage.setItem('eventState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('eventState'));
      const datas = records?.image?.filter(item => {
        return item.src?.smallbanner !== undefined;
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
          이벤트
        </h2>
      </div>

      <Swiper
        style={{
          'margin-bottom': '36px',
          'margin-left': '44px',
          'padding-top': '10px',
        }}
        spaceBetween={10}
        slidesPerView={5.2}
        slidesPerGroup={5}
        navigation
      >
        {filterData?.map(contents => (
          <SwiperSlide key={contents.id}>
            <div>
              <Link to={`${contents.src.smallbanner}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.smallbanner}.jpg`}
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
