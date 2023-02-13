import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'Services/Api';
import { StyledSection } from 'Layouts/AppTemplate/AppTemplate.styled';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import Loading from 'components/Loading/Loading';

function Reviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const loadMovieReviews = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieReviewsById(movieId);
      setReviews(response.data.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSection>
      {isLoading ? (
        <Loading text={'reviews'} />
      ) : (
        <div>
          {reviews.length === 0 ? (
            <p>We don't have any reviews for this movie</p>
          ) : (
            <ReviewsList reviews={reviews} />
          )}
        </div>
      )}
    </StyledSection>
  );
}

export default Reviews;
