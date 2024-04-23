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
    } else alert("Bad login or password!");
  };

  return (
    <section className="login-panel">
      <form>
        <div className="form-group">
          <label>
            user:
            <input type="user" name="user" />
          </label>
        </div>

        <div className="form-group">
          <label>
            password:
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
