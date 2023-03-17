import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { signUpRequiredState } from '../../@store/signUpRequiredState';

export function SignUpButton() {
  const [requiredState] = useRecoilState(signUpRequiredState);
  const [buttonActive, setButtonActive] = useState(true);

  const isReqTrue = Req => Req === true;

  useEffect(() => {
    const requiredStateValues = Object.values(requiredState);
    if (requiredStateValues.every(isReqTrue)) setButtonActive(false);
    else setButtonActive(true);
  }, [requiredState]);

  return (
    <div>
      <button type="button" disabled={buttonActive}>
        가입하기
      </button>
    </div>
  );
}
