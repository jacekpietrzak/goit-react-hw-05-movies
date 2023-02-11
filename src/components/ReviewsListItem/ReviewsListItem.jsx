import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledReviewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function ReviewsListItem({ review }) {
  return (
    <StyledReviewsListItem>
      <h3>Author: {review.author} </h3>
      <p>{review.content}</p>
    </StyledReviewsListItem>
  );
}

ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default ReviewsListItem;
