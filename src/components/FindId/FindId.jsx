import style from './FindId.module.css';
import Email from './Email';
import AuthButton from './AuthButton';

export default function FindId() {
  return (
    <form method="get" className={style.findId} name="findId" action="#">
      <h2 className={style.id}>아이디 찾기</h2>
      <Email />
      <div className={style.line}>또는</div>
      <AuthButton />
    </form>
  );
}
