import CatsInfo from "/components/CatsInfo";
import { LoginPanel } from "/components/LoginPanel";

export const Header = ({ login, loginState, copyArticles, posts, updateBlogState, showNewPost, showNewPostWindow, loginTopButton }) => {
  return (
    <header className="cd-main-header text-center flex flex-column flex-center">
      <div className="login_top_btn" onClick={loginTopButton}>
        Login
      </div>

      {/* Author's pictures */}
      <CatsInfo />

      {/* Login panel for admin after to add new post */}
      {login && (
        <LoginPanel
          login={login}
          state={loginState}
          copyArticles={copyArticles}
          post={posts}
          updateBlogState={updateBlogState}
          showNewPost={showNewPost}
          showNewPostWindow={showNewPostWindow}
          loginTopButton={loginTopButton}
        />
      )}

      <h1>Cat Blog - our crazy, lazy life</h1>
    </header>
  );
};
