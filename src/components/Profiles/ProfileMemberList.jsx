import { array } from 'prop-types';
import style from './ProfileMemberList.module.css';

export function ProfileMemberList({ profileData }) {
  const baseUrl = '../src/assets/images/';
  return (
    <li className={style.profileliwrap}>
      <button className={style.profilewrap} type="button">
        <img src={`${baseUrl}${profileData[1]}.jpg`} alt="" />
      </button>
      <p>{profileData[0]}</p>
    </li>
  );
}

ProfileMemberList.propTypes = {
  profileData: array,
};
