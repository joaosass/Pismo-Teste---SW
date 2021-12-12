import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IMovie } from '../../types/IMovie';
import getMovies from '../../utils/getMovies';
import Crawl from 'react-star-wars-crawl';
import Loading from '../../components/Loading';
import convertToRoman from '../../utils/convertToRoman';
import 'react-star-wars-crawl/lib/index.css'
import { Container, Controls, ActionButton } from './styles';

const Movie: React.FC = () => {
  let { movieId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<IMovie>();

  const handleGetMovie = useCallback(async () => {
    let result = await getMovies(movieId);
    if (result) {
      setMovie(result);
      setIsLoading(false);
    } else {
      navigate('/404');
    }
  }, [movieId, navigate]);

  useEffect(() => {
    if (movieId) {
      handleGetMovie();
    }
  }, [movieId, handleGetMovie]);

  const handleNavigate = () => {
    navigate('/');
  }

  const handleReload = () => {
    window.location.reload();
  }

  return (
    <Container data-testid="movieContainer">
      <Loading isVisible={isLoading} />
      {!isLoading && <>
        <Controls>
          <ActionButton onClick={handleNavigate}><strong>↩</strong> Back to home</ActionButton>
          <ActionButton onClick={handleReload}><strong>▶ </strong> Replay</ActionButton>
        </Controls>
        <Crawl
          title={`Episode ${convertToRoman(movie?.episode_id || 0)}`}
          subTitle={movie?.title || ''}
          text={movie?.opening_crawl || ''}
        />
      </>}
    </Container>
  );
}

export default Movie;
