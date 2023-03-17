import style from './SignInButton.module.css';

export function SignInButton() {
  return (
    <>
      <div>
        <input type="checkbox" id="autoSignInCheck" />
        <label htmlFor="autoSignInCheck">자동로그인</label>
      </div>
      <div>
        <button type="button">로그인</button>
      </div>
    </>
  );
}
