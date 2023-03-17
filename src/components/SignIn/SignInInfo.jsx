import style from './SignInInfo.module.css';

export function SignInInfo() {
  return (
    <>
      <div>
        <a href="#section">아이디 찾기</a>
        <a href="#section">비밀번호 찾기</a>
      </div>
      <div className={style.infoJoin}>
        <p>아직 계정이 없으신가요?</p>
        <a href="#section">회원가입하기</a>
      </div>
    </>
  );
}
