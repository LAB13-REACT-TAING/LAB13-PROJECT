import {
  SignInTitle,
  SignInButton,
  SignInInfo,
  SignInInputForm,
} from '@components';

import { useState, useEffect, useCallback } from 'react';
import { debounce } from '../../utils/debounce';
import style from './SignInSection.module.css';

export function SignInSection() {
  const [emailData, setEmailData] = useState('');
  const [passwordData, setPasswordData] = useState('');

  const onChangeUserDataHandler = e => {
    const DataId = e.target.id;
    const Data = e.target.value;
    if (DataId === 'userEmail') {
      setEmailData(Data);
    } else if (DataId === 'userPassword') {
      setPasswordData(Data);
    }
  };

  const onChangeUserDatadebounce = useCallback(
    debounce(onChangeUserDataHandler),
    [],
  );

  return (
    <section className={style.signInSection}>
      <div className={style.signInContentWrap}>
        <SignInTitle />
        <SignInInputForm onChangeUserDatadebounce={onChangeUserDatadebounce} />
        <SignInButton emailData={emailData} passwordData={passwordData} />
        <SignInInfo />
      </div>
    </section>
  );
}
