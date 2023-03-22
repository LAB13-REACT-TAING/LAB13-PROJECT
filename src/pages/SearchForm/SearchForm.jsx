import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchForm.module.css';
import useDataList from '../../hooks/useDataList';

const Worker = () => {
  return [];
};

export default function SearchForm() {
  const inputFocus = useRef(null);

  // const listData = useDataList();

  const [names, setNames] = useState(() => {
    return Worker();
  });
  const [addvalue, setAddValue] = useState('');

  const HandleInputValue = e => {
    setAddValue(e.target.value);
  };
  console.log(names);
  const clickHandler = () => {
    setNames(prevState => {
      return [addvalue, ...prevState];
    });
  };
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      clickHandler();
    }
  };

  console.log(addvalue);
  useEffect(() => {
    inputFocus.current.focus();

    document.body.style = `background-color: black; overflow: hidden;`;
    // return (document.body.style = `overflow: auto`);
  }, []);

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
          value={addvalue}
          ref={inputFocus}
          type="text"
          placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요."
          className={styles['main-image']}
          onChange={HandleInputValue}
          onKeyPress={handleOnKeyPress}
        />
        <button
          type="button"
          onClick={clickHandler}
          className={styles.search_button}
        >
          검사
        </button>
      </label>
      <div className={styles.search_container}>
        <ul className={styles.search_title}>
          최근 검색어
          {names.length === 0 ? (
            <li>검색내역이 없습니다</li>
          ) : (
            names.map((name, idx) => {
              return <li key={names.idx}>{name}</li>;
            })
          )}
        </ul>
        <p className={styles.line} />
        <ul>
          <h2 className={styles.search_popular}>실시간 인기 검색어</h2>

          {/* {listData?.map((contents, index) => (
            <li key={contents.id}>
              <button type="button" className={styles.search_list_button}>
                <span>{index + 1}</span>
                <h3>{contents.name}</h3>
              </button>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
