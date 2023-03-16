import style from '@components/Header/Aside.module.css';
import { useState } from 'react';
import { Modal } from '@components';

export function Aside() {
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(true);

  const onClickSearchHandler = () => {
    setToggle(!toggle);
    setIcon(!icon);
  };

  return (
    <aside className={style.aside}>
      <button
        onClick={onClickSearchHandler}
        type="button"
        aria-label="검색"
        className={icon ? `${style.searchBtn}` : `${style.closeBtn}`}
      />

      {toggle === true && <Modal />}
      <div className={style.profile} />
    </aside>
  );
}
