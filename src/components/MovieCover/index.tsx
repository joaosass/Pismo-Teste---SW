import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovie } from '../../types/IMovie';
import { Cover, Title, MovieOrder } from './styles';
import convertToRoman from '../../utils/convertToRoman';

interface MovieCoverProps {
  data: IMovie;
  id: number;
}

const MovieCover: React.FC<MovieCoverProps> = ({ data, id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie/${id}`);
  }

  return (
    <Cover onClick={handleNavigate}>
      <MovieOrder>{convertToRoman(data.episode_id)}</MovieOrder>
      <Title>{data.title}</Title>
    </Cover>
  );
}

export default MovieCover;
