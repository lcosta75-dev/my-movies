import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesServices } from "../api/MoviesService";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fethMovie = async () => {
    const { data } = await MoviesServices.getMovieById(id);
    setMovie(data);
    console.log(data);
  }

    useEffect(() => {
      fethMovie();
    }, []);

    return (
      <>
        <h1>{movie.title}</h1>

        <article>
          {movie.overview}
        </article>
      </>
    )
}