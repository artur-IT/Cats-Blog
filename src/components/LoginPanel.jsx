// export const LoginPanel = ({ showNewPostWindow, loginTopButton }) => {
//   const permissions = {
//     user: 'cats',
//     pass: 'crazy',
//   };

//   const checkPremissions = () => {
//     const userData = document.querySelector('input[name="user"]').value;
//     const passData = document.querySelector('input[name="pass"]').value;

//     if (userData === permissions.user && passData === permissions.pass) {
//       loginTopButton();
//       showNewPostWindow();
//     } else alert('Zły login lub hasło!');
//   };

//   return (
//     <section className="login-panel">
//       <form>
//         <div className="form-group">
//           <label>
//             admin:
//             <input type="user" name="user" />
//           </label>
//         </div>

//         <div className="form-group">
//           <label>
//             hasło:
//             <input type="new-password" name="pass" />
//           </label>
//         </div>

//         <button type="submit" onClick={checkPremissions}>
//           Login
//         </button>
//       </form>
//     </section>
//   );
// };

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
