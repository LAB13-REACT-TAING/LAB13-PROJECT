import React from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  return (
    <div
      className={styles.title}
      style={{
        'margin-left': '195px',
        'margin-right': '195px',
        'margin-top': '100px',
        'margin-bottom': '93px',
      }}
    >
      <label
        htmlFor="search__id"
        className={styles.label}
        style={{
          'margin-bottom': '80px',
        }}
      >
        <input
          id="search__id"
          type="text"
          placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요."
          className={styles['main-image']}
        />
        <button type="button" className={styles.search_button}>
          검사
        </button>
      </label>
      <div className={styles.search_container}>
        <ul className={styles.search_title}>
          최근 검색어
          <li>검색 내역이 없습니다.</li>
          <li>분노의 질주7 익스트림 네서녈</li>
          <li>검색 내역이 없습니다.</li>
          <li>검색 내역이 없습니다.</li>
          <li>검색 내역이 없습니다.</li>
        </ul>
        <p className={styles.line} />
        <ul>
          <h2 className={styles.search_popular}>실시간 인기 검색어</h2>
          <li>
            <button type="button" className={styles.search_list_button}>
              <span>1</span>
              <h3>서진이네</h3>
            </button>
          </li>
          <li>
            <button type="button" className={styles.search_list_button}>
              <span>2</span>
              <h3>청출어람</h3>
            </button>
          </li>
          <li>
            <button type="button" className={styles.search_list_button}>
              <span>3</span>
              <h3>청출어람</h3>
            </button>
          </li>
          <li>
            <button type="button" className={styles.search_list_button}>
              <span>4</span>
              <h3>청출어람</h3>
            </button>
          </li>
          <li>
            <button type="button" className={styles.search_list_button}>
              <span>5</span>
              <h3>청출어람</h3>
            </button>
          </li>
          <li />
        </ul>
      </div>
    </div>
  );
}
