import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div style={{lineHeight: "200%"}}>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>
          <h2>Name: {movie.title}</h2>
          Time: {movie.time}
          {"\n"}
          Genre: 
          <ul>
            {movie.genres.map(item => <li>{item}</li>)}
          </ul>
        </div>)}

    </div>
  );
};

export default Movies;
