import { useState } from 'react';
import style from './EmailInput.module.css';

export default function EmailInput() {
  const [email, setEmail] = useState('');

  const onChangeHandler = e => {
    setEmail(e.target.value);
  };
  const onClickHandler = () => {
    alert('체크');
  };

  return (
    <fieldset className={style.email}>
      <h3 className={style.title}>이메일로 찾기</h3>
      <p className={style.info}>가입 시 등록한 이메일을 입력해주세요.</p>
      <label htmlFor="findId" name="email">
        <input
          value={email}
          onChange={onChangeHandler}
          id="email"
          type="email"
          placeholder="이메일"
          className={style.input}
          required
        />
      </label>
      <button onClick={onClickHandler} className={style.button} type="submit">
        확인
      </button>
    </fieldset>
  );
}
