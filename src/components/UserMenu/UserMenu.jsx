import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/auth.selectors';
import { authLogOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUserData);
  const OnClickLogOut = () => {
    dispatch(authLogOut());
  };

  return (
    <div className={css.containerLogOut}>
      <p>{email}</p>
      <button type="button" onClick={OnClickLogOut} className={css.button}>
        Logout
      </button>
    </div>
  );
};
