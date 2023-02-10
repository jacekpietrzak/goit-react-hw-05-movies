import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieReviewsById } from 'Services/Api';
import { StyledUl, StyledLi } from './Reviews.styled';
import { StyledSection } from 'components/AppTemplate/AppTemplate.styled';

function Reviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const loadMovieReviews = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieReviewsById(movieId);
      // console.log(response);
      setReviews(response.data.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovieReviews();
  }, []);

  return (
    <StyledSection>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {reviews.length === 0 ? (
            <p>We don't have any reviews for this movie</p>
          ) : (
            <StyledUl>
              {reviews.map(review => {
                return (
                  <StyledLi key={review.id}>
                    <h3>Author: {review.author} </h3>
                    <p>{review.content}</p>
                  </StyledLi>
                );
              })}
            </StyledUl>
          )}
        </div>
      )}
    </StyledSection>
  );
}

export default Reviews;
