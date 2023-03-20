/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import style from '@components/Header/Aside.module.css';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Search, Profile } from '@components';

export function Aside() {
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);

  const onClickSearchHandler = () => {
    setToggle(!toggle);
    setIcon(!icon);
  };
  const onClickMemberHandler = () => {
    setShow(!show);
  };

  const buttonClass = icon ? `${style.closeBtn}` : `${style.searchBtn}`;

  return (
    <aside className={style.aside}>
      {toggle === true && <Search />}
      <button
        onClick={onClickSearchHandler}
        type="button"
        aria-label="검색"
        className={buttonClass}
      />
      <div onClick={onClickMemberHandler} className={style.member}>
        {show === true && <Profile />}
      </div>
    </aside>
  );
}
