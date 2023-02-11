import styled from 'styled-components';
import { StyledContainer } from '../AppTemplate.styled';

export const StyledFooter = styled.footer`
  padding: 15px 0px;
  background-color: #e2e2e2;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

function Footer() {
  const date = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterWrapper>
          <p>© {date} Movies</p>
        </StyledFooterWrapper>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
