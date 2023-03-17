import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import img from '../../assets/images/maknaeadeul_03.jpg';
import style from './LandingAutoSlide.module.css';

export default function LandingAutoSlide() {
  const firstSlid = useRef();
  const laseSlide = useRef();

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
    gsap.to(laseSlide.current, {
      duration: 5,
      ease: 'none',
      x: '-=500',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -500),
      },
      repeat: -1,
    });
  }, []);

  return (
    <div>
      <div className={style.slide} ref={firstSlid}>
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
      </div>
      <div className={style.slide} ref={laseSlide}>
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
        <img className={style.img} src={img} alt="이미지" />
      </div>
    </div>
  );
}