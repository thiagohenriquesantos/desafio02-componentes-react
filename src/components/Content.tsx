import { MovieCard } from './MovieCard';
import '../styles/content.scss';
import { MovieProps } from '../@types/IMovieProps';
import { Header } from './Header';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface Props {
  selectedGenreId: number
}

export function Content(props: Props) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [props.selectedGenreId]);

  return (
    <div className="container">
        <Header selectedGenreId={props.selectedGenreId}/>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}