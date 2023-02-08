import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'Services/Api';

function Movies() {
  return (
    <>
      <h2>Movies</h2>

      <Link to="movie1" state={{ from: `/movies` }}>
        Movie 1
      </Link>
    </>
  );
}

export default Movies;
