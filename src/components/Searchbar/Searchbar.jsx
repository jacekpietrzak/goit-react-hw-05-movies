import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
`;

const StyledButton = styled.button`
  padding: 5px;
  cursor: pointer;
`;

function Searchbar({ handleSubmit, handleInputChange, inputValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="search for a movie"
        value={inputValue}
        onChange={handleInputChange}
      />
      <StyledButton type="submit">Search</StyledButton>
    </form>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export default Searchbar;
