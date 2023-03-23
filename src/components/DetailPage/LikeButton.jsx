import React, { useState } from 'react';
import styles from './LikeButton.module.css';
import Modal from './Modal';

function Button() {
  const [isActive, setIsActive] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <button
        className={`${styles.button} ${isActive ? styles.active : ''}`}
        onClick={handleClick}
      >
        {isBookmarked ? '찜 해제하기' : '찜 하기'}
      </button>
      {isBookmarked && (
        <Modal>
          <p>이 아이템을 찜했습니다.</p>
        </Modal>
      )}
      {!isBookmarked && isActive && (
        <Modal>
          <p>이 아이템을 찜하시겠습니까?</p>
        </Modal>
      )}
    </>
  );
}

export default Button;
