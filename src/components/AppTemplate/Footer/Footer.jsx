import { StyledFooter, StyledFooterWrapper } from './Footer.styled';
import { StyledContainer } from '../AppTemplate.styled';

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
