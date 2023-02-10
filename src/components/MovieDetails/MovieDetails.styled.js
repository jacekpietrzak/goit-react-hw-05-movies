import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
`;

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledMovieThumb = styled.img`
  display: block;
  max-height: 350px;
`;

export const StyledGenresList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  list-style: none;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;

export const StyledInfo = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
