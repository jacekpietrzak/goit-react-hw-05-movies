import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px 30px;
  background-color: #e2e2e2;
`;

function Footer() {
  return (
    <StyledFooter>
      <h2>Footer</h2>
    </StyledFooter>
  );
}

export default Footer;
