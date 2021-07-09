import React from "react";
import { IndividualMovie } from "./Movie";
import { Loading } from "../utils/Loading";
import { Movie } from "./Movie.model";
import css from "./MoviesList.module.css";
export const MoviesList = ({ movies, isLoading }: MoviesListProps) => {
  if (isLoading) return <Loading />;

  if (movies.length === 0) return <>There are no movies to show...</>;

  return (
    <div className={css.div}>
      {movies.map((movie) => (
        <IndividualMovie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

interface MoviesListProps {
  movies: Movie[];
  isLoading: boolean;
}
