import style from './FindPassword.module.css';

export default function FindPassword() {
  return (
    <form className={style.findPassword}>
      <h2 className={style.title}>비밀번호 찾기</h2>
      <p className={style.info}>
        아이디 확인 후 등록된 이메일 주소로 비밀번호 재설정을 위한 인증 메일이
        발송됩니다. <br /> 이메일을 확인하여 12시간 이내에 비밀번호 재설정을
        완료해주세요.
      </p>
      <label name="findPassword" htmlFor="findPassword">
        <input
          className={style.input}
          id="findPassword"
          type="text"
          placeholder="아이디"
        />
      </label>
      <button className={style.button} type="submit">
        확인
      </button>
    </form>
  );
}
