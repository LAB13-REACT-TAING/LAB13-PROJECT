import { useNavigate } from 'react-router';
import { string } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSignIn, useSignOut } from '../../utils/firebase/auth/';
import style from './SignInButton.module.css';

export function SignInButton({ emailData, passwordData }) {
  // 로그인 성공 여부 임시 상태 관리
  const [loginSuccess, setLoginSuccess] = useState(false);
  const movePage = useNavigate();
  const {
    signIn,
    isLoading: isLoadingSignIn,
    error: errorSignIn,
    user: userSignIn,
  } = useSignIn();

  const {
    signOut,
    isLoading: isLoadingSignOut,
    error: errorSignOut,
  } = useSignOut();

  useEffect(() => {
    console.log('로그인 시도 흔적');
    if (userSignIn) {
      console.log(userSignIn);
      console.log(userSignIn.operationType);
      console.log(userSignIn.tokenResponse);
      console.log(userSignIn.user.uid);
      setLoginSuccess(true);
      // movePage('/test'); 로그인 성공시 이동
    }
    if (errorSignIn && userSignIn === null) {
      alert('아이디와 비밀번호를 다시 입력해주세요.');
      console.log('errorSignIn.message : ', errorSignIn.message);
      console.log('errorSignIn.name : ', errorSignIn.name);
      console.log('errorSignIn.stack : ', errorSignIn.stack);
    }
  }, [errorSignIn, userSignIn]);

  const onClickShowDataHandler = async () => {
    console.log('emailData : ', emailData);
    console.log('passwordData : ', passwordData);
    console.log('로그인 시도 시작');
    signIn(emailData, passwordData);
    console.log('로그인 시도 끝');

    // 메인페이지라고 생각하자.
    // movePage('/test');
  };

  const onClickSignOutHandler = () => {
    console.log('로그아웃 기능 구현 예정');
    signOut();
    setLoginSuccess(false);
  };
  return (
    <>
      <div>
        <input type="checkbox" id="autoSignInCheck" />
        <label htmlFor="autoSignInCheck">자동로그인</label>
      </div>
      <div>
        <button
          type="button"
          onClick={onClickShowDataHandler}
          disabled={loginSuccess === true}
        >
          로그인
        </button>
        <button
          type="button"
          onClick={onClickSignOutHandler}
          disabled={loginSuccess === false}
        >
          (임시)로그아웃
        </button>
      </div>
    </>
  );
}

SignInButton.propTypes = {
  emailData: string,
  passwordData: string,
};
