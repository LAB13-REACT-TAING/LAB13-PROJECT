/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import style from '@components/Header/Aside.module.css';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Modal, Profile } from '@components';

export function Aside() {
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);

  const onClickSearchHandler = () => {
    setToggle(!toggle);
    setIcon(!icon);
  };

  const onClickProfileHandler = () => {
    setShow(!show);
  };

  return (
    <aside className={style.aside}>
      <button
        onClick={onClickSearchHandler}
        type="button"
        aria-label="검색"
        className={icon ? `${style.closeBtn}` : `${style.searchBtn}`}
      />
      {show === true && <Profile />}
      <div onClick={onClickProfileHandler} className={style.profile} />
      {toggle === true && <Modal />}
    </aside>
  );
}
