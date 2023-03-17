import { useNavigate } from 'react-router';
import { string } from 'prop-types';
import style from './SignInButton.module.css';
import { useSignIn } from '../../utils/firebase/auth/useSignIn';

export function SignInButton({ emailData, passwordData }) {
  const movePage = useNavigate();
  const {
    signIn,
    isLoading: isLoadingSignIn,
    error: errorSignIn,
    user: userSignIn,
  } = useSignIn();

  const onClickShowDataHandler = async () => {
    console.log('emailData : ', emailData);
    console.log('passwordData : ', passwordData);

    const signInState = await signIn(emailData, passwordData);
    console.log(errorSignIn.name);
    console.log(errorSignIn.message);

    // 메인페이지라고 생각하자.
    // movePage('/test');
  };

  const onClickSignOutHandler = () => {
    console.log('로그아웃 기능 구현 예정');
    // signOut();
  };
  return (
    <>
      <div>
        <input type="checkbox" id="autoSignInCheck" />
        <label htmlFor="autoSignInCheck">자동로그인</label>
      </div>
      <div>
        <button type="button" onClick={onClickShowDataHandler}>
          로그인
        </button>
        <button type="button" onClick={onClickSignOutHandler}>
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
