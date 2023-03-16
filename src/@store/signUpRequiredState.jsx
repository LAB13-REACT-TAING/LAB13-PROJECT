import { atom } from 'recoil';

export const signUpRequiredState = atom({
  key: 'signUpRequiredState',
  default: {
    userEmail: false,
    userPw: false,
    checkServiceReq01: true,
    checkServiceReq02: true,
    checkServiceReq03: true,
  },
});
