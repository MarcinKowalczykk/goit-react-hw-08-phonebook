import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../redux/auth/operations';
import css from '../components/ContactForm/ContactForm.module.css';
import Notiflix from 'notiflix';
import { Loader } from '../components/Loader/Loader';
import {
  selectAuthError,
  selectAuthIsLoading,
} from '../redux/auth/auth.selectors';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);
  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const userData = {
      email,
      password,
    };

    dispatch(authLogin(userData));

    form.reset();
  };

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <label className={css.labelForm}>
        Email:
        <input
          type="email"
          name="userEmail"
          placeholder="email@email.com"
          required
          className={css.inputForm}
        />
      </label>
      <label className={css.labelForm}>
        Password:
        <input
          type="password"
          name="userPassword"
          placeholder="********"
          required
          className={css.inputForm}
        />
      </label>

      <button type="submit" className={css.button}>
        Sign In
      </button>
      {isLoading && <Loader />}
      {error !== null && Notiflix.Notify.warning({ error })}
    </form>
  );
};

export default Login;
