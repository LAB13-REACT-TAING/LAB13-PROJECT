import { bool, string } from 'prop-types';
import style from './FindModal.module.css';

export default function FindModal({ closeModal, modalText }) {
  const onCloseHandler = () => {
    closeModal(false);
  };

  return (
    <div className={style.bg}>
      <div className={style.modal}>
        <p className={style.text}>{modalText}</p>
        <button onClick={onCloseHandler} className={style.button} type="button">
          확인
        </button>
      </div>
    </div>
  );
}

FindModal.propType = {
  closeModal: bool,
  modalText: string,
};
