import style from './FindIdResult.module.css';

export default function FindIdResult() {
  return (
    <div className={style.result}>
      <img
        className={style.icon}
        src="https://image.tving.com/public/user/images/icon-check-big-sel.svg"
        alt="체크 아이콘"
      />
      <h2 className="a11yHidden">아이디 찾기 결과</h2>
      <p className={style.title}>입력하신 정보와 일치하는 결과 입니다.</p>
      <p className={style.text}>
        개인정보 보호를 위해
        <br />
        아이디 또는 이메일의 일부만 제공합니다.
      </p>
      <input
        value="hjh7814@naver.com"
        className={style.input}
        type="text"
        readOnly
      />
      <p className={style.info}>
        ※ SNS 회원은 해당 SNS 아이디가 아닌 티빙 가입 시 등록한 이메일을
        알려드립니다.
      </p>
      <button type="submit" className={style.button}>
        로그인 하러 가기
      </button>
    </div>
  );
}
