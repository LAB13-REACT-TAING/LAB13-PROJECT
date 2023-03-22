import { useState } from 'react';
import { useResetPassword } from '../../utils/firebase/auth/useResetPassword';
import FindModal from './FindModal';
import style from './FindPassword.module.css';

export default function FindPassword() {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { resetPassword } = useResetPassword('');
  const onChangeHandler = e => {
    setEmail(e.target.value);
    setVisible(true);
  };

  const onClickHandler = () => {
    resetPassword(email).then(setModalOpen(true));
  };
  const onResetHandler = () => {
    setEmail('');
    setVisible(false);
  };

  return (
    <div>
      <form className={style.findPassword}>
        <h2 className={style.title}>비밀번호 찾기</h2>
        <p className={style.info}>
          등록된 이메일 주소로 비밀번호 재설정을 위한 인증 메일이 발송됩니다.
          <br /> 이메일을 확인하여 12시간 이내에 비밀번호 재설정을 완료해주세요.
        </p>
        <div className={style.wrapper}>
          <label name="findPassword" htmlFor="findPassword">
            <input
              value={email}
              onChange={onChangeHandler}
              className={style.input}
              id="findPassword"
              type="email"
              placeholder="이메일"
            />
          </label>
          {visible && (
            <button
              aria-label="초기화 버튼"
              className={style.reset}
              onClick={onResetHandler}
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0604 11.5464L8.51543 7.00141L13.0604 2.45641L11.5454 0.941406L7.00043 5.48641L2.45543 0.941406L0.94043 2.45641L5.48543 7.00141L0.94043 11.5464L2.45543 13.0614L7.00043 8.51641L11.5469 13.0614L13.0604 11.5464Z"
                  fill="black"
                />
              </svg>
            </button>
          )}
        </div>
        <button onClick={onClickHandler} className={style.button} type="submit">
          확인
        </button>
      </form>
      {modalOpen && <FindModal setModalOpen={setModalOpen} />}
    </div>
  );
}
