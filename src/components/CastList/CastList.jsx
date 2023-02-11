import PropTypes from 'prop-types';
import styled from 'styled-components';
import CastListItem from 'components/CastListItem/CastListItem';

export const StyledCastList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 18px;
`;

function CastList({ cast }) {
  return (
    <StyledCastList>
      {cast.map(actor => {
        return <CastListItem key={actor.cast_id} actor={actor} />;
      })}
    </StyledCastList>
  );
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
    })
  ),
};

export default CastList;
