import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

import css from 'components/ContactForm/ContactForm.module.css';

export const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/">Home</NavLink>
          {authenticated ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
