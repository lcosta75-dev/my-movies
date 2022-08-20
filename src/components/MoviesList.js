import React from 'react'
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(m => <MovieItem title={m.title} /> )}
  </ul>
);