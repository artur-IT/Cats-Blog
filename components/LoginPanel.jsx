/* eslint-disable react/prop-types */
import FormAddPost from "/components/FormAddPost";

export const LoginPanel = (props) => {
  // eslint-disable-next-line react/prop-types
  const permissions = {
    user: "cats",
    pass: "m",
  };

  const checkPremissions = (e) => {
    e.preventDefault();
    const userData = document.querySelector('input[name="user"]').value;
    const passData = document.querySelector('input[name="pass"]').value;

    if (userData == permissions.user && passData == permissions.pass) {
      return props.showNewPostHandle();
    } else alert("Złe dane logowania!");
  };

  return (
    <>
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
            Zaloguj
          </button>
        </form>
      </section>

      {/* popup with add new post form after successful login */}
      {props.showNewPost ? (
        <div className="add_content">
          <FormAddPost
            copyArticles={props.copyArticles}
            post={props.post}
            updateBlogState={props.updateBlogState}
            formHandler={props.formHandler}
          />
        </div>
      ) : null}
    </>
  );
};
