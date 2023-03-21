import style from './EmailInput.module.css';

export default function EmailInput() {
  return (
    <fieldset className={style.email}>
      <h3 className={style.title}>이메일로 찾기</h3>
      <p className={style.info}>가입 시 등록한 이메일을 입력해주세요.</p>
      <label htmlFor="findId" name="email">
        <input
          id="email"
          type="email"
          placeholder="이메일"
          className={style.input}
          required
        />
      </label>
      <button className={style.button} type="button">
        확인
      </button>
    </fieldset>
  );
}
