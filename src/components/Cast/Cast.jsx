import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieCreditsById } from 'Services/Api';
import { StyledUl, StyledCastThumb } from './Cast.styled';
import { StyledSection } from 'components/AppTemplate/AppTemplate.styled';

function Cast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const loadMovieCredits = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieCreditsById(movieId);
      // console.log('credits', response);
      setCast(response.cast);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovieCredits();
  }, []);

  return (
    <StyledSection>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledUl>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
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
          })}
        </StyledUl>
      )}
    </StyledSection>
  );
}

export default Cast;
