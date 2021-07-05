import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div style={{lineHeight: "200%"}}>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>
          <h2>Name: {movie.title}</h2>
          <div> Time: {movie.time} </div>
          <div> Genre: 
          <ul>
            {movie.genres.map(item => <li>{item}</li>)}
          </ul>
          </div>

        </div>)}

    </div>
  );
};

export default Movies;
