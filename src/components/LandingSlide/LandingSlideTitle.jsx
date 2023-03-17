import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import style from './LandingSlideTitle.module.css';

export default function LandingSlideTitle() {
  const title = '내가 찾던 재미';
  const boldText = '보고 싶은 콘텐츠를 발견하세요!';
  const text =
    '최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점';
  const slideTitle = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      gsap.fromTo('h2', { y: 50 }, { y: 0 });
      gsap.fromTo(
        'p',
        { y: 50 },
        { y: 0, ease: 'circ.out', stagger: 0.2, delay: 0.2 },
      );
    }, slideTitle);
  }, []);

  return (
    <div className={style.slideTitle} ref={slideTitle}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.boldText}>{boldText}</p>
      <p className={style.text}>{text}</p>
    </div>
  );
}
