import { string } from 'prop-types';
import style from '@components/Footer/Snsicon.module.css';

function Snsicon({ name, src }) {
  return (
    <a
      href={src}
      target="_blank"
      title={name}
      className={style[name]}
      rel="noreferrer"
    >
      {' '}
    </a>
  );
}

/** Props */
Snsicon.defaultProps = {
  name: null,
  src: null,
};

Snsicon.propTypes = {
  name: string,
  src: string,
};

export default Snsicon;
