import { ProfileTitle, ProfileMembers } from '@components';
import style from './ProfileMain.module.css';

export function ProfileMain() {
  return (
    <section className={style.layout__profile}>
      <div className={style.contents}>
        <ProfileTitle />
        <ProfileMembers />
      </div>
    </section>
  );
}
