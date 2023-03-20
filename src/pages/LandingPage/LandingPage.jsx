import LandingAutoSlide from '@components/LandingSlide/LandingAutoSlide';
import LandingMainSlide from '@components/LandingSlide/LandingMainSlide';
import LandingSlideTitle from '@components/LandingSlide/LandingSlideTitle';
import style from './LandingPage.module.css';

export default function LandingPage() {
  const mainTitle = '타잉에만 있는 재미';
  const mainBoldText = '오리지널 콘텐츠를 만나보세요!';
  const mainText = '차별화된 웰메이드 오리지널 콘텐츠';

  const autoTitle = '내가 찾던 재미';
  const autoBoldText = '보고 싶은 콘텐츠를 발견하세요!';
  const autoText =
    '최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점';

  return (
    <div className={style.landing}>
      <LandingSlideTitle
        title={mainTitle}
        boldText={mainBoldText}
        text={mainText}
      />
      <LandingMainSlide />
      <LandingSlideTitle
        title={autoTitle}
        boldText={autoBoldText}
        text={autoText}
      />
      <LandingAutoSlide />
    </div>
  );
}
