import React from 'react';
import { useForm } from 'react-hook-form';

export const LoginPanel = ({ showNewPostWindow, loginTopButton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    if (data.user != 'cats') setError('user', { type: 'manual', message: 'Nieprawidłowy login' });
    if (data.pass != 'crazy') setError('pass', { type: 'manual', message: 'Nieprawidłowe hasło' });

    if (data.user === 'cats' && data.pass === 'crazy') {
      loginTopButton();
      showNewPostWindow();
    }
  };

  return (
    <section className="login-panel">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="user">Login:</label>
          <input
            id="user"
            type="text"
            {...register('user', { required: 'błędny login' })}
            className={errors.user ? 'error' : ''}
          />
          {errors.user && <span className="error-message">{errors.user.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="pass">Hasło:</label>
          <input
            id="pass"
            type="current-password"
            {...register('pass', { required: 'błędne hasło' })}
            className={errors.pass ? 'error' : ''}
          />
          {errors.pass && <span className="error-message">{errors.pass.message}</span>}
        </div>

        <button type="submit" className="btn_add">
          Login
        </button>
      </form>
    </section>
  );
};
