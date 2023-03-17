import { func } from 'prop-types';

export function SignInInputForm({ onChangeUserDatadebounce }) {
  return (
    <form>
      <div>
        <label htmlFor="userEmail">userEmail</label>
        <input type="text" id="userEmail" onChange={onChangeUserDatadebounce} />
      </div>
      <div>
        <label htmlFor="userPassword">userPassword</label>
        <input
          type="text"
          id="userPassword"
          onChange={onChangeUserDatadebounce}
        />
      </div>
    </form>
  );
}

SignInInputForm.propTypes = {
  onChangeUserDatadebounce: func,
};
