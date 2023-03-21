import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import style from './LandingAutoSlide.module.css';
import useDataFilter from '../../hooks/useDataFilter';

export default function LandingAutoSlide() {
  const DataFilter = useDataFilter('rendingfunny');
  const [data, setData] = useState([]);
  const firstSlid = useRef();
  const lastSlide = useRef();

  useLayoutEffect(() => {
    gsap.to(firstSlid.current, {
      duration: 10,
      ease: 'none',
      x: '-=500',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -500),
      },
      repeat: -1,
    });
    gsap.to(lastSlide.current, {
      duration: 5,
      ease: 'none',
      x: '-=500',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -500),
      },
      repeat: -1,
    });

    DataFilter.splice(3, 2);
    DataFilter.shift(0);
    setData(DataFilter);
  }, [DataFilter]);

  return (
    <div>
      <div className={style.slide} ref={firstSlid}>
        {data.map(contents => {
          const baseUrl = '../src/assets/images/';
          const src = `${baseUrl}${contents.src.rendingfunny}.jpg`;
          return (
            <div className={style.wrapper}>
              <img
                key={contents.id}
                className={style.img}
                src={src}
                alt={`${contents.name}`}
              />
            </div>
          );
        })}
      </div>
      <div className={style.slide} ref={lastSlide}>
        {DataFilter.reverse().map(contents => {
          const baseUrl = '../src/assets/images/';
          const src = `${baseUrl}${contents.src.rendingfunny}.jpg`;
          return (
            <div className={style.wrapper}>
              <img
                key={contents.id}
                className={style.img}
                src={src}
                alt={`${contents.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
