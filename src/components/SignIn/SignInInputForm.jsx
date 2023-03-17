export function SignInInputForm() {
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
    </form>
  );
}
