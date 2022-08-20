import React from 'react'
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(m => <MovieItem id={m.id} title={m.title} /> )}
    {/* {movies.map(m => <MovieItem movie={m} />)} */}
    {/* {movies.map(m => <MovieItem {...m} />)} */}
  </ul>
);