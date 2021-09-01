import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieService } from "../api/MovieService";

export const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await MovieService.getMoviesDetail(props.match.params.id);
    //foi criada uma classe MovieService com um metodo getMovies que retorna o axios que é equivalente ao fetch, usando a desestruturação da pra pegar direto os results de dentro da propriedade data
    console.log(data);

    setMovie(data);
    //joga o array de objetos do results na variavel movies
  };

  useEffect(() => {
    getMovie();
    //useEffect com um array vazio é equivalente ao componentDidMount, só é chamado uma vez
  });

  return (
    <section className="movie-detail">
      <Link to={`/`} className="btn btn-primary back">
        Voltar
      </Link>
      <div className="container">
        <div className="row gx-5">
          <div className="col-12">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="col-12">
            <h1>{movie.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original language: {movie.original_language}</li>
              <li>Popularity: {movie.popularity}</li>
              <li>Overview: {movie.overview}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
