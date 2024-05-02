export const LoginPanel = (props) => {
  // eslint-disable-next-line react/prop-types
  const permissions = {
    user: "cats",
    pass: "m",
  };

  const checkPremissions = () => {
    const userData = document.querySelector('input[name="user"]').value;
    const passData = document.querySelector('input[name="pass"]').value;

    if (userData === permissions.user && passData === permissions.pass) {
      props.loginTopButtonHandle();
      props.showNewPostWindow();
    } else alert("Zły login lub hasło!");
  };

  return (
    <section className="login-panel">
      <form>
        <div className="form-group">
          <label>
            admin:
            <input type="user" name="user" />
          </label>
        </div>

        <div className="form-group">
          <label>
            hasło:
            <input type="new-password" name="pass" />
          </label>
        </div>

        <button type="submit" onClick={checkPremissions}>
          Login
        </button>
      </form>
    </section>
  );
};
