import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const StyledSection = styled.section`
  padding: 30px 30px;
`;

function AppTemplate() {
  return (
    <StyledApp>
      <header>
        <Nav />
      </header>
      <StyledMain>
        <StyledSection>
          <Suspense
            fallback={
              <div>
                <p>Loading...</p>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </StyledSection>
      </StyledMain>
      <Footer />
    </StyledApp>
  );
}

export default AppTemplate;
