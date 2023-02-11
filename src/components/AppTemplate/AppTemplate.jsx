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

function AppTemplate() {
  return (
    <StyledApp>
      <header>
        <Nav />
      </header>
      <StyledMain>
        <StyledContainer>
          <StyledSection>
            <Suspense
              fallback={
                <div>
                  <p>Loading page...</p>
                </div>
              }
            >
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
