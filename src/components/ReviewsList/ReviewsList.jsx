import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
`;

function ReviewsList({ reviews }) {
  return (
    <StyledReviewsList>
      {reviews.map(review => {
        return <ReviewsListItem key={review.id} review={review} />;
      })}
    </StyledReviewsList>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewsList;
