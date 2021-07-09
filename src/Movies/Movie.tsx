import { Movie } from "./Movie.model";
import css from "./Movie.module.css";
export const IndividualMovie = ({ movie }: MovieProps) => {
  const getLink = (id: string) => `movie/${id}`;
  return (
    <div className={css.div}>
      <a href={getLink(movie.id)}>
        <img src={movie.poster} alt={movie.title}></img>
      </a>
      <p>
        <a href={getLink(movie.id)}>{movie.title}</a>
      </p>
    </div>
  );
};

interface MovieProps {
  movie: Movie;
}
