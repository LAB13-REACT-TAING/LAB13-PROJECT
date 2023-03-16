import { atom } from 'recoil';

export const signUpRequiredState = atom({
  key: 'signUpRequiredState',
  default: {
    userEmail: true,
    userPw: true,
    checkServiceReq01: false,
    checkServiceReq02: false,
    checkServiceReq03: false,
  },
});
