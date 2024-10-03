export const LoginPanel = ({ showNewPostWindow, loginTopButton }) => {
  const permissions = {
    user: "cats",
    pass: "crazy",
  };

  const checkPremissions = () => {
    const userData = document.querySelector('input[name="user"]').value;
    const passData = document.querySelector('input[name="pass"]').value;

    if (userData === permissions.user && passData === permissions.pass) {
      loginTopButton();
      showNewPostWindow();
    } else alert("Zły login lub hasło!");
  };

  return (
    <section className="login-panel">
      <form>
        <div className="form-group">
          <label>
            admin:
            <input type="user" name="user" placeholder="cats" />
          </label>
        </div>

        <div className="form-group">
          <label>
            hasło:
            <input type="new-password" name="pass" placeholder="crazy" />
          </label>
        </div>

        <button type="submit" onClick={checkPremissions}>
          Login
        </button>
      </form>
    </section>
  );
};
