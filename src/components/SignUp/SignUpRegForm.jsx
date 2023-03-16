import { InputForm } from '@components';

export function SignUpRegForm() {
  return (
    <form>
      <div>
        <label htmlFor="userEmail">userEmail</label>
        <input type="text" id="userEmail" />
      </div>
      <div>
        <label htmlFor="userPassword">userPassword</label>
        <input type="text" id="userPassword" />
      </div>
      <div>
        <label htmlFor="userPasswordConfirm">userPasswordConfirm</label>
        <input type="text" id="userPasswordConfirm" />
      </div>
    </form>
  );
}
