import { atom } from 'recoil';

export const loginInfo = atom({
  key: 'emailId',
  default: 'abc123@gmail.com',
  // 임시값 나중에 null로 수정
});
