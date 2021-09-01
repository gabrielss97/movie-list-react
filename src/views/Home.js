import { Movie } from "../components/Movie";
import { useState, useEffect } from "react";
import { MovieService } from "../api/MovieService";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {data:{results}} = await MovieService.getMovies();
    //foi criada uma classe MovieService com um metodo getMovies que retorna o axios que é equivalente ao fetch, usando a desestruturação da pra pegar direto os results de dentro da propriedade data
    console.log(results);

    setMovies(results)
    //joga o array de objetos do results na variavel movies
  };

  useEffect(() => {
      getMovies()
      //useEffect com um array vazio é equivalente ao componentDidMount, só é chamado uma vez
  }, []);

  return (
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie) => (
            //a variavel movies agora está preenchida por causa do setMovies que incluiu a variavel results, usando o map ele vai percorrer cada um dos objetos do array
          <div key={movie.id} className="col-12">
            <Movie movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};
