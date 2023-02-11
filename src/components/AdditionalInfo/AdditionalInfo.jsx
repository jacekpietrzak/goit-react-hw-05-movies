import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledAdditionalInfo = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;

function AdditionalInfo() {
  return (
    <StyledAdditionalInfo>
      <p>Additional information</p>
      <StyledList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </StyledList>
    </StyledAdditionalInfo>
  );
}

export default AdditionalInfo;
