import {
  SignInTitle,
  SignInButton,
  SignInInfo,
  SignInInputForm,
} from '@components';

import style from './SignInSection.module.css';

export function SignInSection() {
  return (
    <section className={style.signInSection}>
      <div className={style.signInContentWrap}>
        <SignInTitle />
        <SignInInputForm />
        <SignInButton />
        <SignInInfo />
      </div>
    </section>
  );
}
