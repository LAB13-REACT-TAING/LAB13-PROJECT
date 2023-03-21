import { array, object } from 'prop-types';
import { useEffect } from 'react';
import { ProfileMemberList } from '@components';
import style from './ProfileMembers.module.css';

export function ProfileMembers({
  profileData1,
  profileData2,
  profileData3,
  profileData4,
  profileData5,
}) {
  return (
    <>
      <div className={style.photowrap}>
        <ul className={style.photocontainer}>
          <ProfileMemberList profileData={profileData1} />
          <ProfileMemberList profileData={profileData2} />
          <ProfileMemberList profileData={profileData3} />
          <ProfileMemberList profileData={profileData4} />
          <ProfileMemberList profileData={profileData5} />
        </ul>
      </div>
      <div className={style.buttonwrap}>
        <button className={style.buttonmodify} type="button">
          프로필 편집
        </button>
        <button className={style.buttoncomplete} type="button">
          완료
        </button>
      </div>
    </>
  );
}

ProfileMembers.propTypes = {
  profileData1: array,
  profileData2: array,
  profileData3: array,
  profileData4: array,
  profileData5: array,
};
