import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from 'Services/Api';
import { StyledSection } from 'Layouts/AppTemplate/AppTemplate.styled';
import CastList from 'components/CastList/CastList';
import Loading from 'components/Loading/Loading';

function Cast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const loadMovieCredits = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieCreditsById(movieId);
      setCast(response.cast);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovieCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSection>
      {isLoading ? <Loading text={'cast'} /> : <CastList cast={cast} />}
    </StyledSection>
  );
}

export default Cast;
