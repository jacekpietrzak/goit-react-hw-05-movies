import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px 30px;
  background-color: #fff;
  box-shadow: 0px -10px 25px #111;

  a {
    color: #111;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .active {
    color: red;
    text-decoration: underline;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </StyledNav>
  );
}

export default Nav;
