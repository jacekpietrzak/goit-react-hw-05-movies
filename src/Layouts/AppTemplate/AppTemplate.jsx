import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  StyledApp,
  StyledMain,
  StyledSection,
  StyledContainer,
} from './AppTemplate.styled';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Loading from 'components/Loading/Loading';

function AppTemplate() {
  return (
    <StyledApp>
      <Nav />
      <StyledMain>
        <StyledContainer>
          <StyledSection>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </StyledSection>
        </StyledContainer>
      </StyledMain>
      <Footer />
    </StyledApp>
  );
}

export default AppTemplate;
