import { NavLink } from 'react-router-dom';

import { Container } from './Container.styles';
import s from './NavLink.module.css';

function Header() {
  return (
    <Container>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.link}  ${s.activeLink}` : s.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${s.link}  ${s.activeLink}` : s.link
        }
      >
        Movies
      </NavLink>
    </Container>
  );
}

Header.propTypes = {};

export default Header;
