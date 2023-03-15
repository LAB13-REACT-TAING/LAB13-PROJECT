import style from '@components/Header/Aside.module.css';

export function Aside() {
  return (
    <aside className={style.aside}>
      <button type="button" aria-label="Search" className={style.btn} />
      <div className={style.profile} />
    </aside>
  );
}
