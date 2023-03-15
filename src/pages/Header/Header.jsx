import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from '@pages/Header/Header.module.css';
import { Menu, Aside } from '@components';

function Header() {
  return (
    <div className={style.header}>
      <NavLink className={style.logo} />
      <Menu />
      <Aside />
    </div>
  );
}

export default Header;
