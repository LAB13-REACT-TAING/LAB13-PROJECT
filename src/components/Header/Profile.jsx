import style from '@components/Header/Profile.module.css';
import { Link } from 'react-router-dom';

// icon ? `${style.modal}` : `${style.modal}` + `${style.hidden}`

export function Profile() {
  return (
    <div>
      <div className={style.member} />
      <div className={style.my}>
        <div className={style.profile}>
          <div className={style.image}></div>
          <div className={style.info}>
            <p className={style.name}>닉네임</p>
            <Link to="/profile" className={style.site}>
              프로필 전환 >
            </Link>
          </div>
        </div>
        <hr />
        <ul className={style.menu}>
          <li>MY</li>
          <li>이용권</li>
          <li>쿠폰등록</li>
          <li>고객센터</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </div>
  );
}
