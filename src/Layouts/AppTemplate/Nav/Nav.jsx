import { NavLink } from 'react-router-dom';
import { StyledContainer } from '../../AppTemplate/AppTemplate.styled';
import { StyledHeader, StyledNav } from './Nav.styled';

function Nav() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Nav;
