import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import './LiveChannel.css';
import { useReadData } from '../../utils/firebase/index';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function LiveChannel() {
  const [filterData, setfilterData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  const baseUrl = '../src/assets/images/'; // 경로 설정
  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('LiveState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('LiveState'));
      const datas = records?.image?.filter(item => {
        return item.src?.live !== undefined;
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
          인기 LIVE 채널
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
        pagination={{ clickable: true }}
      >
        {filterData?.map(contents => (
          <SwiperSlide key={contents.id}>
            <div>
              <Link to={`${contents.src.live}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.live}.jpg`}
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
