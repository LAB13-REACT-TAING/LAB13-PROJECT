import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchForm.module.css';
import useDataList from '../../hooks/useDataList';

export default function SearchForm() {
  const inputFocus = useRef(null);

  const listData = useDataList();

  const [name, setName] = useState({
    name: '',
    id: 0,
  });
  const [listId, setListId] = useState(0);
  const [input, setInput] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') return;

    setInput(prevState => [...prevState, name]);
    setListId(prev => prev + 1);
  };

  const HandleInputValue = e => {
    setName({ id: listId, name: e.target.value });
  };

  const AlldeleteHandler = () => {
    setInput([]);
  };

  const deleteBtnHandler = e => {
    console.log(typeof e.target.id);
    const newList = input.filter(data => data.id !== Number(e.target.id));
    console.log(newList);
    setInput(newList);
  };

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
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="search__id"
          className={styles.label}
          style={{
            'margin-bottom': '80px',
          }}
        >
          <input
            id="search__id"
            ref={inputFocus}
            type="text"
            placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요."
            className={styles['main-image']}
            onChange={HandleInputValue}
          />
          <button type="submit" className={styles.search_button}>
            검사
          </button>
        </label>
      </form>
      <div className={styles.search_container}>
        <ul className={styles.search_title}>
          최근 검색어
          <button type="button" onClick={AlldeleteHandler}>
            전체지우기
          </button>
          {input?.map(data => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={data.id}>
                {data.name}
                <button type="button" id={data.id} onClick={deleteBtnHandler}>
                  삭제버튼
                </button>
              </li>
            );
          })}
        </ul>
        <p className={styles.line} />
        <ul>
          <h2 className={styles.search_popular}>실시간 인기 검색어</h2>

          {listData?.map((contents, index) => (
            <li key={contents.id}>
              <button type="button" className={styles.search_list_button}>
                <span>{index + 1}</span>
                <h3>{contents.name}</h3>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
