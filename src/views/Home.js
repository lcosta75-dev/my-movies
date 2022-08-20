import React from 'react'
import { useEffect, useState } from "react";
import { MoviesServices } from "../api/MoviesService";
import { MoviesList } from "../components/MoviesList"
import { MoviesContainer } from "../styles/MoviesContainer"

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const fethMovies = async () => {
      const { data } = await MoviesServices.getMovies();
      setMovies(data.results);
    }
  
    useEffect(() => {
      fethMovies();
    }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  )
}