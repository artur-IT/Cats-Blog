/* eslint-disable react/prop-types */
import Form from "/components/AddPostForm";

export const LoginPanel = (props) => {
  // eslint-disable-next-line react/prop-types
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
              <input type="password" name="pass" />
            </label>
          </div>

          <button type="submit" onClick={props.showNewPostHandle}>
            Zaloguj
          </button>
        </form>
      </section>

      {props.showNewPost ? (
        <div className="add_content">
          <Form
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
