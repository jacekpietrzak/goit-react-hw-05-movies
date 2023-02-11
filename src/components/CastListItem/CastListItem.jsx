import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCastThumb = styled.img`
  display: block;
  max-height: 100px;
`;

function CastListItem({ actor }) {
  return (
    <li>
      {actor.profile_path === null ? (
        <StyledCastThumb src="https://via.placeholder.com/150" />
      ) : (
        <StyledCastThumb
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name}
        />
      )}
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </li>
  );
}

CastListItem.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};

export default CastListItem;
