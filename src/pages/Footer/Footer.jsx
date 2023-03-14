import Footerh1 from '@components/Footer/Footerh1';
import style from '@pages/Footer/Footer.module.css';
import Snsicon from '@components/Footer/Snsicon';

function Footer() {
  const iconList = {
    youtube: 'youtube',
    twitter: 'twitter',
    facebook: 'facebook',
    instagram: 'instagram',
  };

  const iconSrc = {
    youtube: 'https://www.youtube.com/',
    twitter: 'https://twitter.com/?lang=ko',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  };

  return (
    <footer className={`${style.Footer} ${style.gray500}`}>
      <section className={style.contents}>
        <div className={style.topinfo}>
          <div className={style.notice}>
            <a href="#section">공지사항</a>
            <a href="#section" className={style.gray200}>
              [안내] 합병보고 주주총회에 갈음하는 공고
            </a>
          </div>
          <div className={`${style.select} ${style.gray200}`}>
            <a href="#section">브랜드 바로가기 +</a>
            <p>|</p>
            <a href="#section">그룹 계열사 바로가기 +</a>
          </div>
        </div>
        <nav className={`${style.nav} ${style.gray200}`}>
          <a href="#section">고객센터</a>
          <a href="#section">이용약관</a>
          <a href="#section">개인정보처리방침</a>
          <a href="#section">청소년 보호정책</a>
          <a href="#section">법적고지</a>
          <a href="#section">이벤트</a>
          <a href="#section">인재채용</a>
        </nav>
        <div className={style.copyright}>
          <p>
            대표이사 : YANG JIEUL 사업자정보확인 사업자등록번호 : 188-88-01893
            통신판매신고번호 : 2020-서울마포-3641호
          </p>
          <p>
            사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동) |
            호스팅사업자 : 씨제이올리브네트웍스(주)
          </p>
          <p>
            고객문의 바로가기 | 대표메일 : tving@cj.net | 고객센터 : 1670-1525
            (평일/주말 09시~18시, 공휴일 휴무)
          </p>
          <p>
            ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780 | Mnet
            고객센터(반송편성문의) : 1855-1631
          </p>
        </div>
        <div className={style.snsicon}>
          <Snsicon name={iconList.youtube} src={iconSrc.youtube} />
          <Snsicon name={iconList.instagram} src={iconSrc.instagram} />
          <Snsicon name={iconList.twitter} src={iconSrc.twitter} />
          <Snsicon name={iconList.facebook} src={iconSrc.facebook} />
        </div>
        <p>Copyright © 주식회사 티빙 All right reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
