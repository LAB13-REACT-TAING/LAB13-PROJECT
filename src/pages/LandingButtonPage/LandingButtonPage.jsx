import { useNavigate } from 'react-router-dom';
import style from './LandingButtonPage.module.css';
import backgroundimage from '../../assets/images/randingpagebackgorund.jpg';

function LandingButtonPage() {
  const taingloginpage = useNavigate();
  const navigatetologin = () => {
    taingloginpage('/loginpage');
  };

  return (
    <section className={style.section}>
      <div className={style.section_image}>
        <img src={backgroundimage} alt="background" />
      </div>
      <div className={style.section_message}>
        <p className={style.section_text}>타잉 오리지널 콘텐츠,</p>
        <p className={style.section_text}>방송, 영화, 해외시리즈까지!</p>
        <p className={style.section_text}>재미를 플레이해보세요.</p>
        <p className={style.section_subtext}>
          간편하게 가입하고, 원하실 때 해지할 수 있어요.
        </p>
      </div>
      <div className={style.section_button}>
        <div className={style.svgimage} />
        <button className={style.section_buttonstyle} onClick={navigatetologin}>
          <p className={style.button_text}>새로워진 티빙을 만나보세요!</p>
        </button>
      </div>
    </section>
  );
}

export default LandingButtonPage;
