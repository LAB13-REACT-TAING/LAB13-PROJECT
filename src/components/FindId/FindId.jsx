import style from './FindId.module.css';

export default function FindId() {
  return (
    <form method="get" className={style.findId} name="findId" action="#">
      <h2 className={style.id}>아이디 찾기</h2>
      <fieldset>
        <label htmlFor="findId" className={style.find}>
          이메일로 찾기
        </label>
        <p className={style.email}>가입 시 등록한 이메일을 입력해주세요.</p>
        <input
          id="findId"
          type="email"
          placeholder="이메일"
          className={style.emailInput}
          required
        />
        <button className={style.confirm} type="button">
          확인
        </button>
      </fieldset>
      <div className={style.line}>또는</div>
<fieldset>
      <legend className={style.find}>본인인증으로 찾기</legend>
      <p className={style.auth}>
        이미 본인인증이 완료된 계정에 한하여 아이디 찾기가 가능합니다.
      </p>
      <button className={style.authButton} type="button">
        본인인증하기
      </button>
      </fieldset>
    </form>
  );
}
