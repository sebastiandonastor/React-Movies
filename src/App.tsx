import { useEffect, useState } from "react";
import "./App.css";
import { MoviesList } from "./Movies/MoviesList";
import { Movie } from "./Movies/Movie.model";
import { Container } from "react-bootstrap";
import { MainMenu } from "./MainMenu/MainMenu";

function App() {
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);
  const [moviesComingSoon, setMoviesComingSoon] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setMoviesComingSoon([
        {
          id: "spiderman-no-way-home",
          poster:
            "https://i.pinimg.com/originals/e4/e7/84/e4e784b0e59fba14771d291f84b412d1.jpg",
          title: "Spiderman No Way Home",
        },
      ]);

      setMoviesInCinema([
        {
          id: "kimetsu-yaiba",
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/81C0yyxkoCL._AC_SY679_.jpg",
          title: "Kimetsu",
        },
      ]);
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <MainMenu />
      <Container>
        <h3>In Cinema</h3>
        <MoviesList movies={moviesInCinema} isLoading={loading} />
        <h3>Coming soon...</h3>
        <MoviesList movies={moviesComingSoon} isLoading={loading} />
      </Container>
    </div>
  );
}

export default App;
