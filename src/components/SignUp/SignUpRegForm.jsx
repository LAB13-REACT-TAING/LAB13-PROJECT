/* eslint-disable no-nested-ternary */
import { atom, useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { signUpRequiredState } from '../../@store/signUpRequiredState';

export function SignUpRegForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const [signUpRequired, setSignUpRequired] =
    useRecoilState(signUpRequiredState);

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
    if (password === '') {
      setPasswordError(true);
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/.test(
        password,
      )
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const onBlurPasswordConfirmHandler = () => {
    if (passwordConfirm === '') {
      setPasswordConfirmError(true);
    } else if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
    } else {
      setPasswordConfirmError(false);
    }
  };

  useEffect(() => {
    setSignUpRequired(prevState => ({
      ...prevState,
      userEmail: !emailError,
      userPw: !passwordError && password === passwordConfirm, // add userPw to the state
    }));
  }, [emailError, passwordError, passwordConfirm, setSignUpRequired]);

  // 처음 렌더링시 이메일 입력x -> true..?
  // 비밀번호 유효성 통과 -> 가입하기 활성화..? false...? why..

  return (
    <form>
      <div>
        <label htmlFor="userEmail" />
        <input
          required
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
        <label htmlFor="userPassword" />
        <input
          required
          type="text"
          id="userPassword"
          placeholder="비밀번호"
          maxLength={15}
          value={password}
          onChange={onChangePasswordHandler}
          onBlur={onBlurPasswordHandler}
        />
        {passwordError ? (
          password === '' ? (
            <p>입력한 내용이 없어요.</p>
          ) : (
            <p>
              영문, 숫자, 특수문자 (~!@#$%^&*) 조합 8~15 자리 로 입력해주세요.
            </p>
          )
        ) : (
          <p>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</p>
        )}
      </div>
      <div>
        <label htmlFor="userPasswordConfirm" />
        <input
          required
          type="text"
          id="userPasswordConfirm"
          placeholder="비밀번호 확인"
          maxLength={15}
          value={passwordConfirm}
          onChange={onChangePasswordConfirmonHandler}
          onBlur={onBlurPasswordConfirmHandler}
        />
        {passwordConfirmError &&
          (passwordConfirm === '' ? (
            <p>입력한 내용이 없어요.</p>
          ) : (
            <p>비밀번호가 일치하지 않습니다.</p>
          ))}
      </div>
    </form>
  );
}
