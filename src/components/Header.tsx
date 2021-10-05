import { useEffect, useState } from "react";
import { GenreResponseProps } from "../@types/IGenreResponseProps";
import { api } from '../services/api';

interface Props {
  selectedGenreId: number
}

export function Header (props: Props) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${props.selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [props.selectedGenreId]);

  return (
  <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>
  )
}