import style from './ProfileMembers.module.css';

export function ProfileMembers() {
  return (
    <>
      <div className={style.photowrap}>
        <ul className={style.photocontainer}>
          <li>프로필1</li>
          <li>프로필2</li>
          <li>프로필3</li>
        </ul>
      </div>
      <div className={style.buttonwrap}>
        <button className={style.buttonmodify} type="button">
          프로필 편집
        </button>
        <button className={style.buttoncomplete} type="button">
          완료
        </button>
      </div>
    </>
  );
}
