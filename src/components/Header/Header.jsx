import React from 'react';
import { NavLink } from 'react-router-dom';
import header from '@/assets/css/Header.module.css';

function Header() {
  return (
    <div className={header.header}>
      <NavLink className={header.logo} to="/main" />
      <ul className={header.menu}>
        <li className={header.live}>실시간</li>
        <li>TV프로그램</li>
        <li className={header.movie}>영화</li>
        <li className={header.paramount} />
      </ul>
    </div>
  );
}

export default Header;
