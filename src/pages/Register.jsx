import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from 'redux/auth/operations';
import css from 'components/ContactForm/ContactForm.module.css';
import {
  selectAuthError,
  selectAuthIsLoading,
} from 'redux/auth/auth.selectors';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);
  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = {
      name,
      email,
      password,
    };

    dispatch(authRegister(userData));

    form.reset();
  };
  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <label className={css.labelForm}>
        Name:
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          required
          className={css.inputForm}
        />
      </label>

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
        Sign Up
      </button>
      {isLoading && <Loader />}
      {error !== null && Notiflix.Notify.warning({ error })}
    </form>
  );
};

export default Register;
