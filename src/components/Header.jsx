import CatsInfo from "../components/CatsInfo";
// import { ImageUpload } from "./ImageUpload";
import { LoginPanel } from "../components/LoginPanel";

export const Header = ({ login, showNewPostWindow, loginTopButton, showNewPost }) => {
  return (
    <header className="cd-main-header text-center flex flex-column flex-center">
      {!showNewPost && (
        <div className="login_top_btn" onClick={loginTopButton}>
          Login
        </div>
      )}

      {/* Author's pictures */}
      <CatsInfo />

      {/* <ImageUpload />* /}

      {/* Login panel for admin after to add new post */}
      {login && <LoginPanel showNewPostWindow={showNewPostWindow} loginTopButton={loginTopButton} />}

      <h1>Cat's Blog</h1>
      <h3>our crazy, lazy life</h3>
    </header>
  );
};
