import { useState } from 'react';

export function SignUpRegForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const onChangeEmailHandler = e => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onChangePasswordHandler = e => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const onChangePasswordConfirmonHandler = e => {
    setPasswordConfirm(e.target.value);
    setPasswordConfirmError(false);
  };

  const onBlurEmailHandler = () => {
    if (email === '') {
      setEmailError(true);
    }
  };

  const onBlurPasswordHandler = () => {
    if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/.test(
        password,
      )
    ) {
      setPasswordError(true);
    }
  };

  const onBlurPasswordConfirmHandler = () => {
    if (passwordConfirm === '') {
      setPasswordConfirmError(true);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="userEmail" required />
        <input
          type="text"
          id="userEmail"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {emailError && <p>입력한 내용이 없어요.</p>}
      </div>
      <div>
        <label htmlFor="userPassword" required />
        <input
          type="text"
          id="userPassword"
          placeholder="비밀번호"
          maxLength={15}
          value={password}
          onChange={onChangePasswordHandler}
          onBlur={onBlurPasswordHandler}
        />
        {passwordError ? (
          <p>입력한 내용이 없어요.</p>
        ) : (
          <p>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</p>
        )}
      </div>
      <div>
        <label htmlFor="userPasswordConfirm" required />
        <input
          type="text"
          id="userPasswordConfirm"
          placeholder="비밀번호 확인"
          maxLength={15}
          value={passwordConfirm}
          onChange={onChangePasswordConfirmonHandler}
          onBlur={onBlurPasswordConfirmHandler}
        />
        {passwordConfirmError && <p>입력한 내용이 없어요.</p>}
      </div>
    </form>
  );
}
