import CatsInfo from '../components/CatsInfo';
import { LoginPanel } from '../components/LoginPanel';

export const Header = ({ login, showNewPostWindow, loginTopButton, showNewPost }) => {
  return (
    <header className="cd-main-header text-center flex flex-column flex-center">
      {!showNewPost && (
        <div className="login_top_btn" onClick={loginTopButton}>
          Miauuu
        </div>
      )}

      {/* Author's pictures */}
      <CatsInfo />

      {/* Login panel for admin for add new post */}
      {login && <LoginPanel showNewPostWindow={showNewPostWindow} loginTopButton={loginTopButton} />}

      <h1>Koci Blog</h1>
      <p className="slogan">nasze szalone, leniwe życie</p>
    </header>
  );
};
