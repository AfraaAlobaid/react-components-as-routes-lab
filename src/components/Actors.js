import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div style={{lineHeight: "200%"}}>
      <h1>Actors Page</h1>
      {actors.map(actor => 
        <div>
          <h2>Name: {actor.name}</h2>
          <div>
            Movies:
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
        </div>
        )}
    </div>
  );
};

export default Actors;
