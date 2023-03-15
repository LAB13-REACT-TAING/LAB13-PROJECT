import style from '@components/Header/Aside.module.css';
import { useState } from 'react';
import { Modal } from '@components';

export function Aside() {
  const [toggle, setToggle] = useState(false);

  const onClickSearchHandler = () => {
    setToggle(!toggle);
  };

  return (
    <aside className={style.aside}>
      <button
        onClick={onClickSearchHandler}
        type="button"
        aria-label="검색"
        className={style.btn}
      />
      {toggle === true && <Modal />}
      <div className={style.profile} />
    </aside>
  );
}
