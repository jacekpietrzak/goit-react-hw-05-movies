import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  padding: 15px 0px;
  background-color: #fff;
  box-shadow: 0px -10px 25px #111;
`;
export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 15px;

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
