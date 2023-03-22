import { bool } from 'prop-types';
import style from './FindModal.module.css';

export default function FindModal({ closeModal }) {
  const onCloseHandler = () => {
    closeModal(false);
  };

  return (
    <div className={style.bg}>
      <div className={style.modal}>
        <p className={style.text}>
          해당 이메일로 비밀번호 재설정 이메일을 전송하였습니다.
        </p>
        <button onClick={onCloseHandler} className={style.button} type="button">
          확인
        </button>
      </div>
    </div>
  );
}

FindModal.propType = {
    closeModal: bool,
};
