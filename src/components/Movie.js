import {Link} from 'react-router-dom'

export const Movie = ({movie}) => (
  <div className="movie-item">
    <div>
      <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
    </div>
    <div className="movie-excerpt">
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`} className='btn btn-primary'>Ver detalhes</Link>
      {/* a string que está no 'to' do Link é um parametro especifico que você encontra na api do tmdb */}
    </div>
  </div>
);
